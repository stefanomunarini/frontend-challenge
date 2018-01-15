# ELSA Frontend challenge
Thank you for yor interest in a frontend position at ELSA. This readme specifies the challenge that we ask you to take to show your skills.

Please fork this repository and work in your own fork, then do a pull request when you are finished. We will evaluate your work on the pull request. We will be looking for code beauty, organization, structure and functionality.

The challenge is designed to allow us to evaluate your programming skills, but this is not the only think we are looking for an ELSA team member. Do not worry if you are pressed with time and can not finish all parts of the challenge, likewise, feel free to extend its functionality beyond what is proposed if you want.

We appreciate that after you check the description below you let us know when you expect to be able to send us a result, so that we can already schedule a technical interview where we look at the code together and resolve any questions we might have on it.

# Hymns website
We want to build a microservice + frontend that is able to present a set of hymns together with the flags to a user.
Hymns and flags are stored in tgz files in an AWS S3 bucket. In order to make it easy to retrieve a GET request can be sent to the following URL:
http://elsa-frontend-challenge.s3-website-eu-west-1.amazonaws.com/index.json

e.g. `wget http://elsa-frontend-challenge.s3-website-eu-west-1.amazonaws.com/index.json` should return a list like the one below:

        [
        "Spain.tgz",
        "Portugal.tgz",
        "Catalonia.tgz",
        "France.tgz"
        ]
        
The actual number of files will vary over time, so you should make sure the server retrieves it regularly to make sure the user gets the latest data.
The elements found in the list are the different countries available for the end user. The tgz packages can be found in the same URL, for example: http://elsa-frontend-challenge.s3-website-eu-west-1.amazonaws.com/France.tgz

Inside each tgz file we have a json file with name info.json, an image file and an mp3 file. An example of json file is:

        {
        "title": "Hymn of Catalonia",
        "image": "Catalonia.gif",
        "music": "Catalonia.mp3",
        "description": "Catalonia is an autonomous community of Spain, with the official status of a \"nationality\". Catalonia comprises four provinces: Barcelona, Girona, Lleida, and Tarragona."
        }
        
You need to build a frontend that shows the information inside this json, i.e. the flag image, the title and description and play the music automatically when the page starts.


