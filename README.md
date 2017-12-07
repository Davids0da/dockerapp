# DockerApp

## Run in terminal: 

docker run -d -v /var/run/docker.sock:/var/run/docker.sock -p 127.0.0.1:1234:1234 bobrik/socat TCP-LISTEN:1234,fork UNIX-CONNECT:/var/run/docker.sock

export DOCKER_HOST=tcp://localhost:1234

## Open chrome in unsafe mode: 

open -a Google\ Chrome --args --disable-web-security --user-data-dir

## Run some docker containers, and see what is going in the app. And if you do not have docker, and docker containers, i will present you on skype this App.

