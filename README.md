# Blogger-2020-app

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

The frontend will have 8 components of Login, createUser, Profile, Posts, Contact Blogger, About Blogger, Header, and Footer. It take data the Rails backend and parse them onto the page. It will also use React Router to route. Frontend will indicate index or show actions to indicate when a user is logged in or not.
 
The front end will also allow for full CRUD capabilities to create, update, and delete posts. CSS styling will be included for a responsive page to suit mobile and desktop.

#### Wireframes

![image](https://media.git.generalassemb.ly/user/25138/files/0a99f980-5faf-11ea-8101-2593fc44ab84)


#### Component Hierarchy

![image](https://media.git.generalassemb.ly/user/25138/files/1be30600-5faf-11ea-8762-249ff9d0f8bb)


#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   | State | Description                                                      |
| :----------: | :---: | :--------------------------------------------------------------- |
|    Header    |   n   | The header will contain the site title and user state info    |
|    App.js    |   Y   | Component will manage routes for app hold user login state.    |
| Contact Us  |   n   | This component will render a page for users to submit feedback on a form.      |
|   About Blogger   |   y   | This page will render a brief description of Blogger 2020     |
| Login |   n   | Login Page for Users   |
| Profile |   n   | Page will render  User profile info    |
| Posts |   Y  | Page will display user posts |
| Comments |   Y  | Page will manage comments.   |
|    Footer    |   n   | The footer will contain copyright info. |

<br>

### MVP Server (Back End)

The main feature of the backend will be User Authentication. The built out server will use RESTful JSON endpoints with self-created data. The database will include one user table and two additional tables of posts and comments. Users & posts will have a 1:m relationship and posts and comments will have 1:m relationship.

#### ERD Model

![image](https://media.git.generalassemb.ly/user/25138/files/23a2aa80-5faf-11ea-9e84-0b215f5e804f)


#### Endpoints

> Use this section to list a selection of your intended endpoints and their uses. Please list any and all custom-created endpoints.

- GET `/login`
	- Route to login page
- GET `/login/signup`
	- Route renders when user clicks to create new account, submission will createa new accounts
- POST `/profile/:id`
	- Create route for a new user
- PUT `/profile/:id
  - Update a user by id to create an association to the ballots table
 - DELETE `/deleted
  - Deleted user will render page confirming delete
- GET `/profile/:id/posts
  - Will render all posts by logged in user
- PUT `/profile/:id
  - Update a user by id to create an association to the ballots table
- GET `/profile/:id/posts
 - Will render all posts by logged in user
- POST `/profile/:id/posts/:id
 - Will create new posts by logged in user
- PUT `/profile/:id/posts
 - Will update posts by logged in user
- DELETE `/profile/:id/posts
 - Will delete posts by logged in user
- GET `/about-blogger-2020
 - Will render info about Blogger 2020
- GET `/contact-us
 - Will render form for feedback
  
<br>

***

## Planning

My plan is to reach MVP by Wednesday March 10th

### Timeframes

> Use this section to estimate the time necessary to build out the various sections of your project. You may include an additional priority matrix, if you desire.

| Task                | Priority | Estimated Time | Actual Time |
| ------------------- | :------: | :------------: | :---------: |
| Setup Rails Backend including User Auth  |    H     |     20 hrs      |    TBF    |
| Set up routes/end points  |    H     |     8 hrs      |    TBF    |
| Create CRUD Actions |    H     |     8 hrs      |     TBD     |
| Front-end React Components w/ Full CRUD |    H     |     16 hrs      |     TBD     |
| CSS |    M    |     8 hrs      |     TBD     |
| Unforseen errors & debugging  |    H     |     4 hrs      |    TBF    |
| TOTAL               |    H      |     64 hrs      |     TBD     |


<br>

### Schedule

> Use this section to look at your project week and plan out when and what you want to do.

|  Day   | Deliverables                              |
| ------ | ----------------------------------------- |
|Mar 5th | project proposal worksheet / psuedocoding |
|Mar 6th | Project pitch / build out endpoints	     |
|Mar 7th | Build out Back-end & User Authentication  |
|Mar 8th | Build out Back-end & User Authentication  |
|Mar 9th | Front-end React componenets/ 	     |
|Mar 10th| MVP, begin post-MVP  /styling             |
|Mar 11th| post-MVP                                  |
|Mar 12th| polishing                                 |
|Mar 13th| final presentations                       |

<br>

***

## Post-MVP

Post MVP ideas:

- Allow users to follow each other in m:m relationship
- Allow users to LIKE/DISLIKE POSTS
- Randomized random feed

<br>

***

## Project Change Log

> This section should be expanded and revised as you work on your project.

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.

***
