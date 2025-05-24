# Stage 1: Build the Angular application
FROM node:latest AS build

# Setup the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci
#install angular
RUN npm install -g @angular/cli

# Copy other files and folders to the working directory
COPY . .

# Build Angular application in PROD mode
#RUN npm run build --prod
RUN npm run build --configuration=production




# Stage 2: Serve the application using Nginx
FROM nginxinc/nginx-unprivileged:1.21-alpine

# copy out nginx config to override default one
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# Copy built Angular app files to Nginx HTML folder
COPY --from=build /app/dist/ng-portfilio-web-ui/browser /usr/share/nginx/html



# Expose port 80
EXPOSE 80


# build Docker Image: docker build -t ng-portfolio-docker-1 .
# run Docker Container using the image: docker run -d -p 7070:80 ng-portfolio-docker-1

#AWS


#my setup for repository
# test/repository_for_first_steps == full repository name
# 'test' is namespace
# 'repository_for_first_steps' repository name withing

#login to ECR
#Retrieve an authentication token and authenticate your Docker client to your registry. Use the AWS CLI:
#     aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 058264353478.dkr.ecr.us-east-2.amazonaws.com
#Note: If you receive an error using the AWS CLI, make sure that you have the latest version of the AWS CLI and Docker installed.

#Build your Docker image using the following command. For information on building a Docker file from scratch see the instructions here . You can skip this step if your image is already built:
#     docker build -t ng-portfolio-docker-1 .

#After the build completes, tag your image so you can push the image to this repository:
#     docker tag ng-portfolio-docker-1:latest 058264353478.dkr.ecr.us-east-2.amazonaws.com/portfolioui:latest

#Run the following command to push this image to your newly created AWS repository:
#     docker push 058264353478.dkr.ecr.us-east-2.amazonaws.com/portfolioui:latest