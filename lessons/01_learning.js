/* 
What's in our React App
Let's take a look of what our React App looks like right now. We will go through our file structure which is a standard React setup. You will not be editing any files in this step, but the structure is important for future code references. 

> public
> src
.gitignore
{} package-lock.json
{} package.json
i README.md

package.json
The package.json file is our roadmap of the app. It tells us the name of the app, the version, the different dependencies we need to run our app, and more.

public/
The public/ directory contains our index.html file. The index.html file directs us to the rest of the web application that requires additional processing.

src
This is where most of your code will go. You'll notice we have App.jsx along with other jsx files. But, what is jsx? Think of jsx as a mix between html and javascript. We can write tags, functions, and classes. Take a look at the App.jsx file. Some of that contents might look familiar from html, like <div/> tags.

------------------------------------------------

Step 1: Set up the project locally
In this repository, we have two branches - master and changes. We will be working off of the changes branch. Let's go ahead and get started.

Activity: Clone the repository and install Node

1.Open your terminal
If you're using a Windows operating system, we recommend downloading and using git bash as your terminal
2.Change directories into a location where you want to keep this project
3.Clone this repository: git clone https://github.com/fernandoarmonellifiedler/intro-react
4.Move into the repository's directory: cd intro-react
5.Checkout to the changes branch: git checkout changes
6.Open the intro-react folder in your favorite text editor
7.Check for Node installation: node -v
8.Install Node if it is not installed
9.In your repository folder, install the necessary packages: npm install
10.Start the React Application: npm start

Your browser should automatically open http://localhost:3000/, and you should see our barebones gradebook application.

You'll see that our app can't really do anything! All we have is three buttons! We are going to add all the functionality.


*/