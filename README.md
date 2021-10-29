# ReactIn - LinkedIn clone built with react
<p> This project was made as a challenge for Provi. I chose Linkedin because it's the social network I spend more time at the moment.  </p>

### Live demo: https://reactin.vercel.app
### Default user for tests: 
email:    dev@mail.com
<br />password: 123456

or you can create your own user, but be aware that it will expire in an hour or two. That's a json server limitation.

#### The following technologies were used:
- ReactJS for all application
- Styled Components for components and themes 
- React Router Dom for routes management
- Axios for HTTP requests
- React Icons for header, feed and reaction icons
- React Hook Forms + Yup for forms validation
- React Modal for update profile infos
- React Switch for themes switcher
- jwt-decode to get user infos from access token
- Dummy api for feed posts and authors
- Faker to generate some data not provided from dummy api
- json-server + json-server-auth to manage user data and authentication
- React Context API in posts, users data and themes management. 
- Several hours of rock playlists on Spotify

### Resources: 
- Light and dark themes
- During first login, a modal will be triggered to complete the profile. All infos will be sent to json-server and then reloaded in page
- Feed is loaded dynamically with infinite scrolL
- Posts reactions can be incremented or decrementd by clicking in reactions or like buttons
- Access token and themes preferente are saved in browser's local storage
- Posts are random from dummy api, but most are puppies. I was using google news api for posts, but during deploy, I realized they charge for requests not coming from localhost :( (in the end feed is most beatiful with that puppies then the trending news)

PS: All new data on registered on json server expires afer one or two hours. So, if you don't wanna spend yout time registering new users, you can use the default user mentioned above. 

#### server repo: https://github.com/gustavopnunes/reactin-server
