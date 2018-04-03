### Frontend

The frontend folder of this project contains the React project responsible for showcasing the data retrieved from the backend.

The application is structured in a very simple way: a components folder (located at /src/components), which contains all the components used by the app, and a static folder (located at /src/static), which contains all the static assets needed by the app (CSS files, images and strings).

#### Components

The application is made of 5 components: an App component, which is the main element, the one that defines the high level structure of the app; the CountryList component, which is responsible for fetching the data from the backend webserver and passing it to each ContryListItem, which are then responsible for showcasing the data of each and every available country; the Anthem and Flag components, finally, which are responsible for showcasing the data relative to that pieve of CountryListItem which require one more interaction with the backend server (for downloading the audio and the image src respectively.

