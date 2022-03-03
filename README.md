# Table of Contents
* [General Info](#general-info)
* [Application Functionalities](#application-functionalities)

# General Info
React Gamelist is a basic React application to showcase my understanding on how to build an application incorporating a number of several React Hooks such as useState, useEffect, useReducer and also state manager: Context API. Moreover, there are a few more packages involved in this project as well which are React Router and Styled Component.<br/>
Since this is a pure front-end project, there won't be any backend and the data will be stored in the local storage in you browser.
The data in this project is derived from Free-to-game API (please head over to https://rapidapi.com/digiwalls/api/free-to-play-games-database/details for more info about the API.)

# Application Functionalities
Data and state values are handled by context API which is one way of managing states across the application and any actions upon the application and dispatched by recduer functions. This is the more effective way and handling states in which makes the code more organized and readable, also avoid props drilling.
## 1.Filtering
Initailly, there are 368 games that are fetched from the API and with this, you can filter the games by either game platforms or game genres, or even apply more than one filters at the same time to obtain more desirable results. The result text at the top will change accordingly.
