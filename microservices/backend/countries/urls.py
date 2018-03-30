from django.conf.urls import url

from countries.views import CountryListView

urlpatterns = [

    url(r'^list/$', CountryListView.as_view(), name='available-countries'),

]