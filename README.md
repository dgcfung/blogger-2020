# Blogger-2020-app

# Full Stack Project

> The Project Planning section **should be completed** for your project pitch with instructors.
> To ensure correct Markdown, we recommend copy/pasting the raw template code from this file and removing/updating the necessary sections.

- [Full Stack Project](#Full-Stack-Project)
  - [Overview](#Overview)
    - [Team Members](#Team-Members)
    - [Team Expectations](#Team-Expectations)
    - [Permissions](#Permissions)
  - [MVP](#MVP)
    - [MVP Goals](#MVP-Goals)
    - [MVP Libraries](#MVP-Libraries)
    - [MVP Client (Front End)](#MVP-Client-Front-End)
      - [Wireframes](#Wireframes)
      - [Component Hierarchy](#Component-Hierarchy)
      - [Component Breakdown](#Component-Breakdown)
      - [Component Estimates](#Component-Estimates)
    - [MVP Server (Back End)](#MVP-Server-Back-End)
      - [ERD Model](#ERD-Model)
      - [Data Heirarchy](#Data-Heirarchy)
  - [Post-MVP](#Post-MVP)
  - [Project Delivery](#Project-Delivery)
  - [Code Showcase](#Code-Showcase)
  - [Code Issues & Resolutions](#Code-Issues--Resolutions)


<br>

## Overview

Blogger-2020 will be a re-designed modern version of the "Blogger" app. The Blogger-2020 app will include a build out back-end using Rails and allow Full CRUD functionality in adding users. The app will feature 1:m association between users & posts and 1:m association between posts & comments. Users will be able to make blog posts which post to their personal endpoint.

### Permissions

N/A, all rights will be reserved to General Assembly and Donald Fung. Will add additional permissions as project progresses if applicable.


<br>

## MVP


Blogger 2020's Minimum Viable Product will feature a Full-stack application featuring a back-end built on Rails and front-end built on react. The app will feature User Authentication login with full CRUD controller capabilities for users. 

## Backend MVP
The main feature of the backend will be User Authentication. The built out server will use RESTful JSON endpoints with self-created data. The database will include one user table and two additional tables of posts and comments. Users & posts will have a 1:m relationship and posts and comments will have 1:m relationship.

## Frontend MVP

The frontend will have 8 components of Login, createUser, Profile, Posts, Contact Blogger, About Blogger, Header, and Footer. It take data the Rails backend and parse them onto the page. It will also use React Router to route. Frontend will indicate index or show actions to indicate when a user is logged in or not.
 
The front end will also allow for full CRUD capabilities to create, update, and delete posts. CSS styling will be included for a responsive page to suit mobile and desktop.




> The Minimum Viable Product should be a well-planned, easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

_The **Project Title** MVP lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus fermentum risus vitae bibendum. Integer vel ipsum mollis odio sollicitudin ornare eu vel ex. In quis fringilla velit, ac maximus quam. Etiam eget placerat neque. Aenean faucibus sem non nisi lobortis ullamcorper._

<br>

### MVP Goals

- User Authentication
- FULL Crud for users
- Database w/ three tables: Users, Posts table (belongs_to: users, 1:m relationship), Comments table(belongs_to: Posts 1:m relationship)
- Rails backend defining models
- React App featuring 8 components
- Basic CSS Styling

<br>

### MVP Libraries

> Use this section to list all supporting libraries and dependencies, and their role in the project.

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       |	Frontend |
|   React Router   | Set-up Routes for Frontend |
| 	Rails  	   | Backend setup |
|     Additional   | As needed|


<br>

### MVP Client (Front End)

#### Wireframes


![image](https://media.git.generalassemb.ly/user/25138/files/14a3f580-5ee6-11ea-9564-f725ba64423d)

Login & Sign up Page

![image](https://media.git.generalassemb.ly/user/25138/files/343b1e00-5ee6-11ea-842a-5c442646aaed)

Feedback & Profile Page
![image](https://media.git.generalassemb.ly/user/25138/files/50d75600-5ee6-11ea-9541-c9f3e9179b53)

Contact Us & About Blogger 2020

![image](https://media.git.generalassemb.ly/user/25138/files/5cc31800-5ee6-11ea-82c1-1500252a0bc7)

Posts Feed


#### Component Hierarchy

![image](https://media.git.generalassemb.ly/user/25138/files/95f48b80-5ed8-11ea-8a99-7c633c37e0b6)


#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   | State | Description                                                      |
| :----------: | :---: | :--------------------------------------------------------------- |
|    Header    |   n   | The header will contain the site title and login status.    |
|    App.js    |   Y   | Component will manage routes for app.    |
| Contact Us  |   n   | This component will render a page for users to submit feedback on a form.      |
|   About Blogger   |   y   | This page will render a brief description of Blogger 2020     |
| Login |   n   | Login Page for Users   |
| Profile |   n   | Page will render  User profile info    |
| Posts |   Y  | Page will display user posts |
| Comments |   Y  | Page will manage comments.   |
|    Footer    |   n   | The footer will contain copyright info. |

<br>

### MVP Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model.

![image](https://media.git.generalassemb.ly/user/25138/files/f0daa400-5e40-11ea-9b22-0345d7da9671)


#### Endpoints

> Use this section to list a selection of your intended endpoints and their uses. Please list any and all custom-created endpoints.

- GET `/api/users`
	- Index route returning an array of all Users and nested 'Likes'
- GET `/api/users/:id`
	- Show route for a user requested by ID
- POST `/api/users`
	- Create route for a new user
- PUT `/api/users/:id/nominate
  - Update a user by id to create an association to the ballots table

<br>

***

## Planning

> You've got a little over a week to reach your Minimum Viable Product. Use these sections to plan out your approach.

<br>

### Timeframes

> Use this section to estimate the time necessary to build out the various sections of your project. You may include an additional priority matrix, if you desire.

| Task                | Priority | Estimated Time | Actual Time |
| ------------------- | :------: | :------------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     TBD     |
| TOTAL               |          |     6 hrs      |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Schedule

> Use this section to look at your project week and plan out when and what you want to do.

|  Day   | Deliverables                              |
| ------ | ----------------------------------------- |
|Mar 4th | project proposal worksheet / psuedocoding |
|Mar 5th | project pitch / build out endpoints       |
|Mar 6th | Build out front-end components            |
|Mar 7th | OFF                                       |
|Mar 8th | impliment user auth                       |
|Mar 9th | styling                                   |
|Mar 10th| MVP, begin post-MVP                       |
|Mar 11th| post-MVP                                  |
|Mar 12th| polishing                                 |
|Mar 13th| final presentations                       |

<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

<br>

***

## Project Change Log

> This section should be expanded and revised as you work on your project.

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.

***
