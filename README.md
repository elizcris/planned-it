# Planned It
# LAUNCHING 2/21/24
Full stack web application that allows users to login and create a profile to create and store packing lists, to-dos, travel reward accounts, and plan transportation. The packing lists are organized by category and regularly packed items and to-do lists can be saved for future travel. The transportation planning allows users to enter data such as type of transport, cost, dates, and location to help build out the most seamless logistics.

**Link to project:** https://github.com/elizcris/planned-it.git


## How It's Made:

**Tech used:** PassportJS, MongoDB, Express, Node, JavaScript

I always begin with taking my brainstorming ideas and narrowing it down to 2-3 key features. I use a program to create a blueprint of those features to give me an idea of what the flow will be and what routes are necessary.

I then set up my project focusing on keeping a clean work environment. This means setting up dependencies that I know I'll need and adding only what is essential to begin.

As I build out the routes, controllers, and models I keep notes on optimizations and challenges to continue to improve this project and others.


## Optimizations
- Ability to add friends and share packing lists and to-dos (Travel Buddies)
- Have To-Do reminders sync with your calendar
- Map with visited places


## Lessons Learned:
- The problem: Trouble connecting my style.css file to my partial views: header
- The error: Refused to apply style from 'http://localhost:****/public/css/style.css' because its MIME type ('text/html') is not a supported stylesheet MIME type, and strict MIME checking is enabled.
- The fix: In the link in my header.ejs file, I needed to specify the type. It was reading the file as an html file so I added the type attribute `type=”text/css”`
- Additionally I changed the href to path `"/css/style.css”` instead of path `“/public/css/style.css”`. This is because I had already specified `app.use(express.static(’public’)` in my server.js file so express only needed to see if the path I specified was found in the public folder.


## Features Coming Soon: 
Place to save important travel documents
