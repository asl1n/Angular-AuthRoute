# Angular Authentication Routing

This is an Angular-based authentication system built using Angular 16 which has login functionality and route protection using guard.

## Features

- User authentication with email and password( admin@gmail.com, admin )

- Login validation using Angular Reactive Forms

- Authentication guard to protect admin routes

- Token-based authentication (stored in local storage)

- Logout functionality

## Installation

### Clone the Repository:

- git clone https://github.com/asl1n/Angular-AuthRoute.git

- cd angular-auth-project

### Install Dependencies:

- npm install

### Run the Application:

- ng serve --open

### How It Works:
- We will see login form and after entering credentials(email: admin@gmail.com password: admin), we will be directed to Admin Page.
- Can't access Admin page without authentication, also we can't go back to login page without logging out from the admin.