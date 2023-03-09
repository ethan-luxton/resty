# RESTy - Lab - Class 28

### Authors: Ethan Luxton

## Project: useReducer and History

### Problem Domain

Your application must employ the following programming concepts:

* As a user, I want to see a list of my previous API calls, so that I can see the results again, quickly.

Application Flow:

* User enters an API URL.
* Chooses a REST Method.
* Clicks the “Go” button.
* Application fetches data from the URL given, with the method specified.
* Application stores the API request and returned data into state.
    * Updates the list of previous API calls.
* Application Displays the response headers and results separately.
    * Both headers and results should be “pretty printed” JSON.

### .env requirements

REACT_APP_OPEN_AI_SECRET_KEY= OpenAI Secret Key
REACT_APP_OPEN_AI_ORG= OpenAI Org Key

### requirements

For the URL, type: https://api.openai.com/v1/chat/completions

#### Features

-   Feature One: History of POST requests to ChatGPT
-   Feature Two: Makes use of useReducer
-   Feature Four: Deploy to Dev
-   Feature Five: Deploy to main

### UML

![.](https://i.imgur.com/x9ds4bB.png)

--------------------------------------------------------------------------------

# RESTy - Lab - Class 27

### Authors: Ethan Luxton

## Project: useState Hooks and API Calls

### Problem Domain

Your application must employ the following programming concepts:

Receive user input in preparation of connecting to live APIs, using the useState() hook in our functional components. In order to properly manage state with the useState hook, we will now convert ```<App />``` to a functional component.

The following user stories detail the major functionality for this phase of the project.

* As a user, I want to enter the REST Method and URL to an API.
* As a user, I want to see a summary of my request as well as results returned from an API request in my browser in a readable format.

Application Flow:

* User enters an API URL.
* Chooses a REST Method.
* Clicks the “Go” button.
* Application fetches data from the URL given, with the method specified.
* Displays the response headers and results separately.
* Both headers and results should be “pretty printed” JSON.

### .env requirements

REACT_APP_OPEN_AI_SECRET_KEY= OpenAI Secret Key
REACT_APP_OPEN_AI_ORG= OpenAI Org Key

### requirements

For the URL, type: https://api.openai.com/v1/chat/completions

#### Features

-   Feature One: POST Request to OpenAI API, returns valid response from ChatGPT
-   Feature Two: Makes use of useState Hooks and Fetch functionality.
-   Feature Four: Deploy to Dev
-   Feature Five: Deploy to main

### UML

![.](https://i.imgur.com/x9ds4bB.png)