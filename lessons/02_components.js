/*
Building Blocks of Life Apps - Components

In this Pull Request you will:

- Add components
- Pass data to child components
- Create and use state variables
- Use callback functions to communicate data
- First, we'll learn about components. 


Components are the building blocks of React apps. Think of components as different parts of the app. Each button is a component, each paragraph of text is a component, and so on. From html, you might recognize some of the built in components like <div /> and <li />. In React, we can create our own components! How cool is that?


Components in src/App.jsx
In our solution, the overall webpage is a component called App. Inside App there are other components like buttons, titles, and custom components that we can create (like the Assginments List).

Take a look at the following line in src/App.jsx.

class App extends React.Component

This line takes a component's properties to create a component named "App". In the render method of App, there are other components like <button/>. These components are child components because they are all a part of its parent, App.

------------------------------------------------

Step 2: Adding components

Activity: Add an h3 component to src/App.jsx
1.In src/App.jsx, replace line 92 with this header component:

<h3 className="Box-title d-flex flex-justify-center">GradeBook</h3>

2.Save your file
3.To run the code, move inside the repository directory in your terminal and run npm start
4.Exit the process in your terminal using Ctrl + C
5.Stage, commit, and push your code to the changes branch:

git add src/App.jsx
git commit -m "add a header component"
git push
*/