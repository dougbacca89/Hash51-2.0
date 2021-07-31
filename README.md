<!-- eslint-disable -->
# `Hash51`
## `Introduction`
We want to believe. Hash51 is an app for the free exchange of ideas for connecting the dots.

---
# `Folder structure`

## `src`
- ## `contexts`
  - ## DisplayContext

  - ## EvidenceContext

  - ## UserContext

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

    - ## Evidence

    - ## index

  - ## `helpers`

    - ## getImages

  - ## `routes`

    - ## passportRoutes

    - ## routes

    - ## userRoutes

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
* [Side bar](https://www.youtube.com/watch?v=CXa0f4-dWi4)
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
* Implementation for making adding evidence is present on the Schema,
  Frontend and Backend by way of the favorites feature. This feature
  may be used to create custom feeds. The feature is hitherto unfinished
  as favorites are occasionally saved as null to the db in the current
  implementation.

### - Videos:
* Adding related videos to accompany Evidence using the Youtube API is
  a part of the original vision of this project. The implementation was not
  finalized but the Video Schema is still extant.

