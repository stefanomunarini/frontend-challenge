## Microservices

The project is structured to have a neat separation between the frontend and its backend.

In this folder a docker-compose file can be found, where the configuration of each microservice is defined. In particular, while the project structure only counts 2 microservice folders, the docker-compose file defines 3 microservices: a frontend, a backend and a database.

#### Backend

In the backend entry in the docker-compose file the build directory is defined, together with all the commands to be executed when the container is ready to be spinned up; those commands are responsible for applying database migrations, downloading initial assets, starting cron jobs and starting the webserver.

volumes defines a link between the container and the host, so that some phisical memory can be used by the container itself to store some data. In this case files in the /src/backend directory of the container are stored in the $PWD/backend directory of the host.

The ports tag is used to map ports between the container and the host, so that the running application is accessible from the outside. In this case the container port 8000 is mapped to be visible at port 8000 of the host.

The depends_on tag is used to define the startup order of containers. In this case, the backend container should be spinned up after the db container.

Finally, the restart tag enables to restart the container in particular situations. In this case, it is used to restart the container in case the db container hasn't finished its inizialition at the moment of launching the web server.

#### Frontend

Similarly to the backend container, a frontend configuration is defined. The frontend is mapped to serve internally the application on port 3000, which is also exposed to the outside host on the same port.

#### Database

The database configuration, then, defined the same parameters as above. The only additions are the environment variables, which are used by the psql command to identify and automatically connect to the right database instance.

### Instructions

Starting the containers and being able to use the application is a straightforward operation using a docker-compose file.

`docker-compose up`

Wait for a minute that all the containers are spinned up and running properly, then navigate to `http://localhost:3000` from you favourite web browser and you are all set up!

##### Note

Database migrations are required to be created manually before spinning up the containers. If a database modification is made, remember to create the new migration(s) file(s) with the Django command `python manage.py makemigrations` (remember to execute this command from the /backend folder of this project). Only then you can spin up the containers with the above mentioned command.

P.S.: if there is already a running container, remember to shut it down (the `docker-compose down` command can be used), together with the deletion of the container image (`docker rmi microservices_backend_ms`)
