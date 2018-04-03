### Backend

The backend folder of the project contains the Django application. Being it a very simple application, it contains a unique Django app, countries, where the Country model is defined and a simple API endpoint is responsible for serving the data of the available countries.

In addition to the model and the view, in the /backend/countries/management/commands/ folder a function for retrieving the list of available countries can be found. In the crontab file, which is located at the root of this folder, the schedule definition of this function is defined.

In this folder, moreover, a Dockerfile is defined, where all the container-related properties and instructions are listed.

Finally, inside the /data folder, a Dockerfile responsible for spinning up the database container can be found.
