<!-- eslint-disable -->
# `Hash51`
## `Introduction`
We want to believe. Hash51 is an app for the free exchange of ideas for connecting the dots.

---
# `Folder structure`

## `src`
- ## `contexts`
  - ## `DisplayContext`
      Holds all of the hooks for the conspiracies and post comment containers on the user page. `The naming of userName on the front end and username on the back end should have the same name.` 
      - **`handleCommentBody:`** updates the text value of the comment body as the user types in to the text area of the comment component. 
      - **`fetchStories:`** gets all of the conspiracies from the database and sets the results to the user page context. 
      - **`postComment:`** structures client context values into the db schema before sending it to the server.

  - ## `EvidenceContext`
      Holds all of the hooks for the search page. Contexts are for the results of the nasa api query and de-structured information `The naming of userName on the front end and username on the back end should have the same name.` 
      - **`handlePostBody:`** updates the text value of the conspiracy body as the user types in to the text area of the PostStory component. 
      - **`handlePostTitle:`** updates the text value of the conspiracy title as the user types in to the text area of the PostStory component. 
      - **`fetchSearch:`** sends a search term to the server to be routed to the nasa api. The image url returned by the query object are thumbnail quality. `The json object could be used with a read stream to access the high quality urls without need for the second api call below.`
      - **`fetchImage:`** once the user clicks on an image to see or comment a request for the nasa_id of the photo is sent to the nasa api to return the high res url to be displayed to the user. 
      - **`postStory:`** takes the username of the user logged in and structures the context values of the conspiracy being created to be stored in the database. 

  - ## `UserContext`
      Holds all of the hooks for the user login state. userObj represents all of the user relevant values from the database. `The naming of userName on the front end and username on the back end should have the same name.` 
      - **`handleUserReg:`** set the text value of email input to the userReg context in the CreateUser component.
      - **`handlePass:`** set the text value of password input to the pass context in the CreateUser component.
      - **`handleConfirm:`** set the text value of confirm password input to the confirm context in the CreateUser component.
      - **`handleUserLogin:`** set the text value of email input to the confirm context in the Login component.
      - **`handlePassLogin:`** set the text value of password input to the confirm context in the Login component.
      - `UNUSED` storeEvidence: for the planned favorites list functionality.
      - `UNUSED` getEvidence: for the planned favorites list functionality.
      - **`localRegister:`** send a request to the passport route for the user to be created in the database. 
      - **`getUser:`** sends request to login from the server using the supplied user credentials. 
      - **`getConspirators:`** requests the information for each conspirator from the database.
      - **`addConspirator:`** adds conspirator to the logged in users conspirator list. 
      - **`localLogin:`** logs in the user with the supplied user information on the login page.
      - **`localLogout:`** logs out the user and resets the state values associated with user state.




- ## `pages`
  - ## `createPage`

    - ## NewStory

    - ## PostStory


    - ## CreateContainer

  - ## `loginPage`

    - ## CreateUser

    - ## GoogleButton

    - ## Login

    - ## LoginContainer

  - ## `searchPage`

    - ## Search

    - ## SearchResult

    - ## SearchContainer

  - ## `commentPage`

    - ## Comment

    - ## CommentList

    - ## Conspirator

    - ## ConspiratorList

    - ## PostComment

    - ## Story

    - ## User

    - ##  UserContainer

- ## App

- ## Header
---

## `server`

  - ## `database`

    - ## `UNUSED` Comment
    - ## Evidence

    - ## index
    - ## `UNUSED` Video

  - ## `helpers`

    - ## getImages
      - **`getImagesFromNasa:`**
      - **`nasaIdCall:`**

  - ## `routes`

    - ## passportRoutes
      - **`passportRouter.post('/register')`**
      - **`passportRouter.post('/login')`**
      - **`passportRouter.get('/logout')`**
      - **`passportRouter.get('/auth/google')`**
      - **`passportRouter.get('/auth/google/login')`**
      - **`passportRouter.get('/getUser')`**

    - ## routes
      - **`serverRouter.post('/search')`**
      - **`serverRouter.post('/asset')`**
      - **`serverRouter.post('/story')`**
      - `UNUSED` serverRouter.get('/story/comments')
      - `UNUSED` serverRouter.put('/story/comments/:comment_id')
      - `UNUSED` serverRouter.delete('/story/comments/:comment_id')
      - **`serverRouter.put('/story/:evidence_id')`**
      - **`serverRouter.delete('/story/:evidence_id')`**

    - ## userRoutes
      - **`userRouter.post('/store/favorites')`**
      - `UNUSED` userRouter.post('/pop/favorites')
      - `UNUSED` userRouter.get('/get/favorites')
      - **`userRouter.post('/add/conspirator)`**
      - **`userRouter.get('/get/conspirators')`**
      - **`userRouter.post('/update/conspirators')`**
      - `UNUSED` userRouter.post('/conspirator/favorites')
      - **`userRouter.get('/user')`**
      - **`userRouter.get('/user/:id')`**

  - ## config

  - ## index
  ---
# `Available scripts`
### - npm dev:
* Builds Webpack

### - npm start:
* Runs Server

### - npm restart:
* PM2 restart

### - npm deploy:
* Deploys with PM2

### - npm lint:
* Linter

### - npm lint:fix:
* Fixes Lint Issues
---
# `Resources`

### - React:
* [Documentation](https://reactjs.org/docs/getting-started.html)
* [Hooks](https://reactjs.org/docs/hooks-intro.html)
* [Hooks useContext tutorial](https://www.youtube.com/watch?v=lhMKvyLRWo0&ab_channel=BenAwad)


### - React-router:
* [Documentation](https://reactrouter.com/web/example/basic)
* [Server-Side Routing with ](https://reactrouter.com/web/guides/server-rendering)
* [Server-Side For React-Router 5](https://ui.dev/react-router-v5-server-rendering/)
* [Different Routers in React-Router](https://learnwithparam.com/blog/different-types-of-router-in-react-router/)
* [ReactRouter - BrowserHistory in production](https://www.youtube.com/watch?v=cdUyEou0LHg)
* [Different types of routers in react](https://learnwithparam.com/blog/different-types-of-router-in-react-router/)

### - PropTypes in React:
* [Documentation](https://reactjs.org/docs/typechecking-with-proptypes.html)

### - Chakra UI:
* [Documentation](https://reactrouter.com/web/example/basic)
* [Light/dark mode](https://www.youtube.com/watch?v=wI2vqXsjsIo)
* [building a landing page with Chakra UI](https://raptis.wtf/blog/build-a-landing-page-with-chakra-ui-part-1/)
* [Chakra ui layout](https://codesandbox.io/s/eotiy?file=/src/index.js)
* [exploreing the chakra ui react component library](https://www.digitalocean.com/community/tutorials/react-chakra-ui)
### - Express:
* [Documentation](https://expressjs.com/en/guide/routing.html)


### - Passport:
* [Documentation](https://www.passportjs.org/docs/downloads/html/)
* [Passport Operations](http://www.passportjs.org/docs/login/)
* [With React Router](https://reactrouter.com/web/example/auth-workflow)
* [Troubleshooting CORS](https://stackoverflow.com/questions/63289585/cors-issue-with-passport-js-google-oauth-strategy)
* [Oauth2.0React + Passport](https://www.youtube.com/watch?v=cD17CYA1dck)
### - Google OAUTH 2.0 with Passport:
* [Documentation](http://www.passportjs.org/packages/passport-google-oauth20/)
* [Endpoint Docs](https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow#oauth-2.0-endpoints_4)
* [Facebook Example of OAUTH implementation](https://github.com/passport/express-4.x-facebook-example)
* [Google Oauth Tutorial](https://dev.to/phyllis_yym/beginner-s-guide-to-google-oauth-with-passport-js-2gh4)

### - CORS:
* [Documentation](https://www.npmjs.com/package/cors#configuring-cors)


### - Axios:
* [Documentation](https://axios-http.com/docs/intro)

### - Mongo:
* [Documentation](https://docs.mongodb.com/manual/)


### - Mongoose:
* [Documentation](https://mongoosejs.com/docs/guide.html)
* [Sub-Documents Documentation](https://mongoosejs.com/docs/subdocs.html)
* [Embedding subDocuments](https://stackoverflow.com/questions/37537493/how-to-create-an-embedded-document-that-follows-a-model-with-mongoose)
* [Mongoose 101: working with subdocuments](https://zellwk.com/blog/mongoose-subdocuments/)

### - MongoDB Atlas:
* [Quick Start Documentation](https://aws-quickstart.s3.amazonaws.com/quickstart-mongodb/doc/MongoDB_on_the_AWS_Cloud.pdf)

### - AWS:
* [Creating and managing a Node.js server on AWS](https://hackernoon.com/tutorial-creating-and-managing-a-node-js-server-on-aws-part-1-d67367ac5171)
* [mongodb security on aws](https://docs.aws.amazon.com/quickstart/latest/mongodb/security.html)


### - Github Actions:
* [Documentation](https://docs.github.com/en/actions/quickstart)
* [Testing Node Version](https://docs.github.com/en/actions/guides/building-and-testing-nodejs)
* [Lint Docs](https://github.com/sibiraj-s/action-eslint)
* [Setup-Node](https://github.com/actions/setup-node/)

### - Dotenv:
* [Documentation](https://github.com/motdotla/dotenv#readme)

### - lodash:
* [Documentation](https://lodash.com/docs/)

### - PM2:
* [Documentation](https://pm2.keymetrics.io/docs/usage/deployment/)

# `Known Bugs and Unused Assets`

### - Favorites:
* **`Unused Asset:`** Implementation for making adding evidence is present on the Schema,
  Frontend and Backend by way of the favorites feature. This feature
  may be used to create custom feeds. The feature is hitherto unfinished
  as favorites are occasionally saved as null to the db in the current
  implementation.

### - Videos:
* **`Unused Asset:`** Adding related videos to accompany Evidence using the Youtube API is a part of the original vision of this project. The implementation was not finalized but the Video Schema is still extant.

### - Home Page:
* **`BUG:`** If a database is not connected the Home Page Renders as Blank as there is no dummy data that populates it automatically. If creating the first entry into the evidence database the user page will not automatically update until the user refreshes the page.

### - Conspirator list: 
* **`BUG:`** If using locally created user sometimes the app will allow you to add the same user to your conspirator list. Don't have this but with google auth. Seems like the db is slow to send a response with the updated conspirator list so that the client side check doesn't work properly. 

###  - Search result: 
* **`BUG:`** Some high res images are in a .tif format which will not render on the page. 

###  - Prop-type: 
* **`BUG:`** prop-type verification isn't working. 


