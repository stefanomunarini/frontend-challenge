# ELSA Frontend challenge
Thank you for yor interest in a frontend position at ELSA. This readme specifies the challenge that we ask you to take to show your skills.

Please fork this repository and work in your own fork, then do a pull request when you are finished. We will evaluate your work on the pull request. We will be looking for code beauty, organization, structure and functionality.

The challenge is designed to allow us to evaluate your programming skills, but this is not the only think we are looking for an ELSA team member. Do not worry if you are pressed with time and can not finish all parts of the challenge, likewise, feel free to extend its functionality beyond what is proposed if you want.

We appreciate that after you check the description below you let us know when you expect to be able to send us a result, so that we can already schedule a technical interview where we look at the code together and resolve any questions we might have on it.

# Hymns website
We want to build a microservice + frontend that is able to present a set of hymns together with the flags to a user.
Hymns and flags are all stored in tgz files in an AWS S3 bucket. In order to make it easy to retrieve a GET request can be sent to the following URL:
http://elsa-frontend-challenge.s3-website-eu-west-1.amazonaws.com/index.json

e.g. `wget http://elsa-frontend-challenge.s3-website-eu-west-1.amazonaws.com/index.json` should return a list like the one below:

        [
        "Spain.tgz",
        "Portugal.tgz",
        "Catalonia.tgz",
        "France.tgz"
        ]
        
The actual number of files will vary over time, so you should make sure the microservice retrieves it regularly to make sure the user gets the latest data.
The elements found in the list are the different countries available for the end user. The tgz packages can be found in the same URL, for example: http://elsa-frontend-challenge.s3-website-eu-west-1.amazonaws.com/France.tgz

Inside each tgz file we have a json file with name info.json, an image file and an mp3 file. An example of json file is:

        {
        "title": "Hymn of Catalonia",
        "image": "Catalonia.gif",
        "music": "Catalonia.mp3",
        "description": "Catalonia is an autonomous community of Spain, with the official status of a \"nationality\". Catalonia comprises four provinces: Barcelona, Girona, Lleida, and Tarragona."
        }
        
You need to build a frontend that shows the information inside this json, i.e. the flag image, the title and description and play the music automatically when the page starts.

To do this, we want you to build a small backend microservice that, upon user request, retrieves the list of possible countries from S3 and, if there is any that it does not yet have locally, it downloads and extracts the information from that new country locally in the microservice. 
Next, you will build an application that runs on the user browser and which retrieves from the microservice which flags and content is available and will show it to the user. The end product will be a UI that allows the user to select ay of the available countries and then he sees the title, description, flag image and listens to the audio playing in the background.

NOTE: It is important for us that you do this exercise using a microservice + application in order to see how well you can manage to define an API between both parts, and to develop such kind of architectures.
You can use any technology you want for each part, although RoR/Python would be preferrable for the microservice, and React/Angular for the app.


