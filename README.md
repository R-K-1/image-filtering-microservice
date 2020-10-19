# Image Filtering Microservice

It is a Node-Express application which runs a simple script to process images, and is deployed using AWS Elastic Beanstalk.

 You'll need to create a new node server. we should open a new terminal within the project directory and run:

    Initialize a new project: npm i
    run the development server with npm run dev

## Running application locally

Follow this process to run application locally

* Install npm

> run :

```terminal
   npm install
   npm run dev
```
## Deploying your system

Follow this process to initialize and deploy your image-filtering-service via the awsebcli.

* Install awsebcli

> For deploying use :

```terminal
   eb init
   npm run build
 ```

Open .elasticbeanstalk/config.yml and add the following lines at the very bottom of the file

```
deploy:
    artifact: ./www/Archive.zip
```

back to the terminal, run:

```terminal
   eb create
   eb deploy
```

### Usage
**Base url:** http://localhost:8082
#### filtering an image
| Path | Parameter | Description |
| :--- | :--- | :--- |
| filteredimage | `image_url` | **Required**. The image url to filter |

**Example:** http://localhost:8082/filteredimage?image_url=https://www.gstatic.com/webp/gallery3/1.png

Note: _All API requests __require__ authorization headers_ (click [here](http://localhost:8082/token) to generate a token).

- AWS Elastic Beanstalk deployed application dashboard.
  ![depcruise generated graph](https://github.com/R-K-1/image-filtering-microservice/blob/master/deployment_screenshots/Elastic%20Beanstalk.png)

*Postman collection file is [here](https://github.com/R-K-1/image-filtering-microservice/blob/master/image-filtering-microservice.postman_collection.json).*
