# PocketHealth Intern Challenge Submission
Stefan Vuia - stefanvuia@gmail.com

## Run Project
To run the full project, you'll need to run the backend and frontend.

### Backend
Install dependencies using and then build and run the project:
```bash
cd ./backend
go get ./...
go run main.go
```

### Frontend
Install dependencies using `npm install` and then serve the Angular project.
```bash
ng serve --open
```

## Checklist of required changes
1. Updated main.go to have `LISTEN_PORT = '80'`
   
   Additionally, changed the `apiUrl: 'http://localhost'` in environment.ts for the frontend to access the api from the default port (80)

2. Fixed the bug in backend/pkg/user/service.go that caused POST "/register" to not return the User ID by returning the correct value in PostRegister(). 

3. Implemented the "/home" page that displays "Welcome to PocketHealth {Name}. Your User ID is: {User ID}" on a background containing the user's favourite colour.

4. Changed the "/register" page to not allow the user to signup without a name or a proper email.
  
5. added a colour wheel input in the "/register" page to allow the user to pick its favourite colour to be displayed on the home page.

