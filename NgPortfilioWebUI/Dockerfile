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
FROM nginx:latest

# copy out nginx config to override default one
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# Copy built Angular app files to Nginx HTML folder
COPY --from=build /app/dist/ng-portfilio-web-ui /usr/share/nginx/html

# Expose port 80
EXPOSE 80


# build Docker Image: docker build -t ng-portfolio-docker-1 .
# run Docker Container using the image: docker run -d -p 7070:80 ng-portfolio-docker-1