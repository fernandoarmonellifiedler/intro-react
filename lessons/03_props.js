/*
Interacting with child components with props:
Now, let's discuss how we can reuse the same component with different properties.

That might sound a little confusing, but let's take a look. Go to our final solution and add some assignments along with students. You might start to notice that both lists look the same, but with different values. In fact, both lists are the same component!

How do we pass different values to a component? We pass properties to the component, otherwise known as props.

Props are the input to components. Props allow us to reuse a component (like a list) in multiple places within our app. 


Take a look at our final solution for our assignments and students page above. You'll see that they look similar. The lists used in the assignments and students pages use the same component, but with different values (props). Next, we'll learn to pass different values to the same components.
https://githubtraining.github.io/react-solution/

------------------------------------------------

Step 3: Import a Child Component
In this step, we will import the List component that we created for you into App.

Activity: Import a List component to src/App.jsx
1.At the top of src/App.jsx, replace line 3 with:

import List from "./List";

2.Save your file
3.To run your code, move inside your repo folder in your terminal and run npm start
4.Exit the process in your terminal using Ctrl + C
5.Stage, commit, and push your changes to the changes branch:

git add src/App.jsx
git commit -m "import list component"
git push
*/