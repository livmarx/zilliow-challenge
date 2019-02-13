# Zillow Code Challenge

#### By Olivia Marks

### Description:

###### This is a small app that allows users to find informations on GitHub users by searching for a particular GitHub username.

### Stack:

###### This app uses Javascript, Node, Express, React,HTML, CSS, and Webpack and is built on top of the GitHub API.

### Installation:

###### To install this app:

- `Fork` and `Clone` this repository
- Run npm install to download dependencies
- Run npm start
- Navigate to http://localhost:8800/

### Final Thought / Next Steps:

###### Some ideas I wrestled with:

- Redux, yes or no? I ultimately decided that this was not a great use-case for Redux since the app was so small.

###### With more time I would:

- GitHub Oauth Key: I was unable to get the process.env.GIT_KEY to work. For now, my key is hard-coded into the API call. If I had more time, I would like to figure this out.

- Error Handling: I would like to integrate semantic error handling. Right now, there is only one error message that the user gets. I would to show different error messages based on the errors thrown.
