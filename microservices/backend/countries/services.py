from backend import settings
from countries.models import Country


def get_available_countries():
    countries = Country.objects.all()
    serialized_countries = []
    for country in countries:
        serialized_countries.append({
            'name': country.name,
            'title': country.title,
            'image': '{}{}/{}'.format(settings.MEDIA_URL, country.name, country.image),
            'music': '{}{}/{}'.format(settings.MEDIA_URL, country.name, country.music),
            'description': country.description
        })
    return serialized_countries
