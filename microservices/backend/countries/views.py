from django.http import JsonResponse
from django.views import View

from countries.services import get_available_countries


class CountryListView(View):

    def dispatch(self, request, *args, **kwargs):
        response = {
            'data': get_available_countries()
        }
        return JsonResponse(response, status=200, safe=False)
