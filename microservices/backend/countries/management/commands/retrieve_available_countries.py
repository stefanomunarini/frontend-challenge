import json
import tarfile
import urllib

from django.core.management import BaseCommand

from backend import settings
from countries.models import Country


class Command(BaseCommand):
    help = 'Retrieve the list of available countries from a remote server'

    def handle(self, *args, **options):
        import requests
        response = requests.get(settings.REMOTE_ENDPOINT_FOR_COUNTRY_LIST)

        if response.json() and response.status_code == 200:
            for available_country in response.json():
                obj, created = Country.objects.get_or_create(name=available_country)

                if created:
                    input_stream = urllib.request.urlopen(
                        'http://elsa-frontend-challenge.s3-website-eu-west-1.amazonaws.com/{}'.format(obj.name))
                    tar_archive = tarfile.open(fileobj=input_stream, mode="r|gz")
                    tar_archive.extractall(path=settings.MEDIA_ROOT + obj.name)

                    with open(settings.MEDIA_ROOT + obj.name + '/info.json', 'r') as json_file:
                        json_data = json.load(json_file)
                        obj.title = json_data['title']
                        obj.description = json_data['description']
                        obj.image = json_data['image']
                        obj.music = json_data['music']
                        obj.save()
        else:
            raise Exception(
                "Error while retrieving the list of available countries from the server. Error message: \n\n {}".format(
                    response.text))
