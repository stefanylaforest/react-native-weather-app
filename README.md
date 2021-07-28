# react-native-weather-app

React Native, Expo, Styled-Components



<img src="https://user-images.githubusercontent.com/66086002/127359185-90067028-c3c0-4ccc-8ddb-5bca37c6ec6e.png" alt="The User Interface" width="500"/>

## How To Run The App in IOS

#### Step 1: 
- Clone the repo
- Open it in your favorite editor
- Open a terminal in your editor and run `yarn install`

#### Step 2: 
- Head over to https://openweathermap.org/api/one-call-api to get an API key. (You will have to sign up)
- Head over to https://developers.google.com/maps/documentation/geocoding/overview to get a GEOCODING API key. You will have to follow the instructions on that page. I am using this to get the Lat and Long from the postal code since Open Weather API accepts only zip codes.
- Create a .env file in the root folder and put your keys in the file like this: 

```
API_KEY=YourKeyHere
GOOGLE_KEY=YourKeyHere
```

#### Step 3:

- Download xcode 
- In the menu bar go to Xcode -> Open Developer Tools

#### Step 4: 

- In your terminal run yarn start. 
- In the browser, click on Run on IOS Simulator.

## Dependencies 

```json
"dependencies": {
    "expo": "~42.0.1",
    "expo-status-bar": "~1.0.4",
    "moment": "^2.29.1",
    "react": "16.13.1",
    "react-dom": "16.13.1",
    "react-native": "https://github.com/expo/react-native/archive/sdk-42.0.0.tar.gz",
    "react-native-dotenv": "^3.1.1",
    "react-native-web": "~0.13.12",
    "styled-components": "^5.3.0"
  },
  
  ```
