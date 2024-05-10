# Proliferate API

This project is a RESTful API for LMS learning management system.

## Installation

To install the project, you need to follow these steps:

1. Clone the repository to your local machine.
2. Run `npm install` to install the dependencies.
3. Create a `.env` file and configure the environment variables.
4. Run `npm start` to start the server.

## Endpoints

The following endpoints are available on the API:

- `POST /api/user/register`: user registers.
- `POST /api/users/login`: user login.
- 'POST /api/users/logout`: user logout.
- `POST /api/subject`: admin adds subject.
- `Post /api/tutor/:subjectId`: admin adds tutor.
- `Post /api/classes/:subjectId/:tutorId/enroll`: user enrolls for a class.
- `put /api/classes/:classId/reschedule`: user reschedules a class.
- `Get /api/search`: user searches for subject(query search).
- `Get /api/notification/unread': user gets unread notification.
- `Get /api/notification/:notificationId/read': user gets read notification.

## Documentation
The Project is well documented on Postman. 

This document provides a comprehensive guide to an API for user registration, login, and authentication using JSON Web Tokens (JWT). The API allows users to securely register an account, authenticate themselves with the provided credentials, and obtain a JWT token for subsequent authorized requests and perform CRUD operations.

API documentation on postman link. [Click the link to view the documentation](https://documenter.getpostman.com/view/24145860/2sA3JM7gXZ).


## Deployment
The backend deployed is [ on render](https://proliferateapp-backend.onrender.com). Click and use the documentation to know the routes for easy navigation.


