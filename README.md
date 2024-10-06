# HTTP JSON API Node.js Time Server

### Google slide link
https://docs.google.com/presentation/d/1YihKPzbo02fzlHbrqAag66K6YadYlbWQzgP06HpSC0Q/edit#slide=id.g308a21e03c0_0_84
### Repository
https://github.com/Junehuit/javascript-projects-/

## Time Data API Server
This project offers a straightforward Node.js HTTP server that provides time data via JSON APIs. It includes two endpoints, `/api/parsetime` and `/api/unixtime`, which process an ISO 8601 date string to return human-readable time components or a UNIX timestamp, respectively.

## Getting Started
These instructions will guide you through setting up and running the project on your local machine for development and testing purposes.

### Prerequisites
You'll need Node.js installed on your computer to run the server. You can install Node.js from [Node.js official website](https://nodejs.org/).

### Installation
Clone this repository to your local machine, install dependencies, and start the server:

### Run the server
node server.js

##Testing
The server will default to port 8000. Access the API using the following URLs:
Parsetime: http://localhost:8000/api/parsetime?iso=2021-06-01T14:20:00.000Z
Unixtime: http://localhost:8000/api/unixtime?iso=2021-06-01T14:20:00.000Z

##Deployment
For production environments, use a process manager like PM2 to keep the server running:
