# User Profile Management

Demo - [User Profile](https://user-profile-testing.netlify.app/)

![This is an image](https://github.com/faryozbekTFK/user-profile/blob/master/src/assets/images/user-page.png)

## Project Setup

1. Clone the repository
   ```bash
   git clone https://github.com/faryozbekTFK/user-profile.git
   cd user-profile
   ```

# Run The Project

1. Install packages
   ```bash
   npm install
   ```
2. Run Project
   ```bash
   npm start
   ```

Server running - http://localhost:3005

Project running - http://localhost:3000

## Error In Mock API - [mswjs.io](https://mswjs.io/)

Could not use this server due to an error in the [mock API](https://mswjs.io/). That's why I used [json-server](https://www.npmjs.com/package/json-server).

![This is an image](https://github.com/faryozbekTFK/user-profile/blob/master/src/assets/images/errors/error-2.png)

![This is an image](https://github.com/faryozbekTFK/user-profile/blob/master/src/assets/images/errors/error-1.png)

## Working Process

During development, I connected to the api using json-server. The process of connecting to the api was done using react-query. State was used because json-server was not working when released to production.
