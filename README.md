# Back-end

This back-end application was made using node.js with the express and mongoose frameworks. It's exposed on the ip(:port): http://35.196.111.251:3000

If you want to run it locally you must download and install the current LTS (long term support) version of node.js from here https://nodejs.org/es/ this version includes npm.

In the root folder of the project /web/ you must run the following commands:

npm install

npm start

Now the app is running on your localhost:3000 and you can open it from your browser and interact with it using http requests.

### Folder - Files structure:

/models/ -> Here are located the models/scemas used for the database creation.

/services/ -> Here are located all the http services which are exposed for the front-end to use.

### Folder structure:

All folders use their index.js files at first and then redirect the actions depending on the URL of the http request reaching.
### Module 1 - "Game setup" services:

### Bidding Project
Method: GET, URL: /biddingProjects, FUNCTION: returns a JSON with all the projects registered.

Method: POST, URL: /biddingProjects/updateBiddingProject/:id FUNCTION: receives a body receives a body with data of a bbidding roject and actualize by ID.

Method: POST, URL: /biddingProjects/createBiddingProject, FUNCTION: receives a body with data of a bbidding roject and creates it on the database

Method: GET, URL: /biddingprojects/:projectId' FUNCTION: returns a JSON with the bidding project if exist in the database.

### Instant Project
Method: GET, URL: /instantProjects, FUNCTION: returns a JSON with all the projects registered.

Method: POST, URL: /instantProjects/updateinstantProject/:id FUNCTION: receives a body receives a body with data of a instant roject and actualize by ID.

Method: POST, URL: /instantProjects/createIntantProject, FUNCTION: receives a body with data of a instant project and creates it on the database

Method: GET, URL: /instantprojects/:projectId' FUNCTION: returns a JSON with the instant project if exist in the database.

### Questions

Method: GET, URL: /questions, FUNCTION: returns a JSON with all the questions registered.

Method: POST, URL: /questions/updateQuestion/:id FUNCTION: eceives a body with data of a question question and actualize by ID.

Method: POST, URL: /questions/createQuestion', FUNCTION: receives a body with data of a question and creates it on the database

Method: GET, URL: /questions//getQuestionById/:id' FUNCTION: returns a JSON with the iquestion if exist in the database.

### Puzzle
Method: POST, URL: /puzzles/createPuzzle', FUNCTION: receives a body with data of a puzzle and creates it on the database

Method: GET, URL: /puzzles/getPuzzleById/:id' FUNCTION: returns a JSON with the puzzle if exist in the database.

Method: GET, URL: /puzzles/, FUNCTION: returns a JSON with all the puzzles stored.

### Assignment
Method: POST, URL: /assignments/createPuzzle', FUNCTION: receives a body with data of an assignment and creates it on the database

Method: PUT, URL: assignments/updateAssignment/:id, FUNCTION: receives a body with data of a assignment and updates the data of the assignment with the id on the URL.

Method: GET, URL: /assignmentss/getAssignment' FUNCTION: returns a JSON with the assignments

Method: GET, URL: /assignments/:projectId' FUNCTION: returns a JSON with the assignment if exist in the database.

### Certifications
Method: GET, URL: /certifications/getCertification/' FUNCTION: returns a JSON with the certifications

Method: PUT, URL: /certifications/updateCertification/:id', FUNCTION: receives a body with data of a certification and updates the data of the certifications with the id on the URL.

Method: POST, URL: /certifications/createCertification/', FUNCTION: receives a body with data of a certification and creates it on the database

### Module 2 - "Game Management" models:

#### User.

#### Company.

### Module 2 - "Game Management" services:

#### Login:

Method: POST, URL: /login, FUNCTION: receives a body with username and password and returns if it's a registered user.

#### Users:

Method: GET, URL: /users, FUNCTION: returns a JSON with all the users registered.

Method: POST, URL: /users, FUNCTION: receives a body with data of a user and creates it on the database.

Method: GET, URL: users/:userId, FUNCTION: returns a JSON with the user with that id.

Method: PUT, URL: users/:userId, FUNCTION: receives a body with data of a user and updates the data of the user with the id on the URL.

Method: GET, URL: users/username/:username, FUNCTION: returns a JSON with the user with that username.

Method: POST, URL: users/username, FUNCTION: receives a body with a companyId and a role and returns all users with that role and that companyId.

Method: POST, URL: users/usersByRole, FUNCTION: receives a body with a role and returns all users with that role.

Method: GET, URL:users/company/:companyId, FUNCTION: returns a list of the users affiliated to the company with that companyId.

#### Companies

Method: GET, URL: /companies, FUNCTION: returns a JSON with all the companies registered.

Method: POST, URL: /companies, FUNCTION: receives a body with data of a company and creates it on the database.

Method: GET, URL: companies/:companyId, FUNCTION: returns a JSON with the company with that id.

Method: PUT, URL: companies/:companyId, FUNCTION: receives a body with data of a company and updates the data of the company with the id on the URL.

### Module 5 - Communication

Method: GET, URL: /read/:id, FUNCTION: returns a JSON with all the received emails by the user with that id

Method: PUT, URL: /updateState/:idEmail, FUNCTION: updates the Email with that id

Method: POST, URL: /send/, FUNCTION: receives a body with data of a just wrote email, and creates it on database

Method: GET, URL: /sent:id, FUNCTION: returns a JSON with all the sent emails by the user with that id

### Module 4 - "Play team role" models:
TrainingAttempt.
DevelopingAttempt.
### Module 4 - "Play team role" services:
TrainingAttempt.

Method: POST, URL: /trainingAttempt/create', FUNCTION: Creates a new training attempt in the database.

Method: POST, URL: /trainingAttempt/', FUNCTION: Gets all the training attempts based in the state.
DevelopingAttempt.

Method: POST, URL: /developingAttempt/create', FUNCTION: Creates a new developing attempt in the database.

Method: POST, URL: /developingAttempt/', FUNCTION: Gets all the developing attempts based in the state.

### Module 3 - "Manage Team" models:

#### Invitations.

#### Records.

#### Estimations.

### Module 3 - "Manage Team" services:

#### Invitations:

Method: GET, URL: /invitations, FUNCTION: returns a JSON with all the invitations registered.

Method: POST, URL: /invitations, FUNCTION: receives a body with data of a invitation and creates it on the database.

Method: POST, URL: /invitations/getCurrentInvitationID', FUNCTION: returns a JSON with the current invitation with that id.

Method: PUT, URL: /invitations/:invitationsId', FUNCTION: receives a user and state and returns invitation.

Method: POST, URL: /invitations/getCurrentInvitation', FUNCTION: receives a user and company and returns invitation.

#### Records:

Method: POST, URL: /records', FUNCTION: receives a body with data of a record and creates it on the database.

Method: GET, URL: /records', FUNCTION: returns a JSON with all the records registered.

Method: GET, URL: /records/:company', FUNCTION: receives a company and return record.

Method: POST, URL: /records/getCurrentProject', FUNCTION: receives a finishDate and company and returns record.

Method: POST, URL: /records/getRecordsByProject/:project', FUNCTION: receives a project and returns record.

#### Estimations:

Method: POST, URL: /estimations/getEstimationsByProjectManagerUsernameAndState', FUNCTION: receives a username and state and returns estimation.

Method: POST, URL: /estimations/getEstimationByPMAndProject', FUNCTION: receives a username and project and returns estimation.

Method: POST, URL: /estimations', FUNCTION: receives a body with data of a estimate and creates it on the database.
