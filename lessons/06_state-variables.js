/*
State Variables
So now, we learned how to pass data to components, but let's talk about the data itself.

There are two types of data: static data and dynamic data.

Static data doesn't change. Things like a title on a page or the name of a button would be static data.

Dynamic data, on the other hand, is data that does change. In our example, we can change it by adding an item to the list. Our list of assignments would also be considered dynamic data. But, how do we deal with dynamic data in React?

Scroll below to take a look in the code!


In React, we store dynamic data in state variables. Let's take a look at how we store state variables. In src/App.jsx, take a look at the constructor. You'll see that we declare our state variables using this.state = {.....}.

Currently, in App, we have three state variables:

buttonClicked - This stores which button was clicked. It is a state variable because the button that is clicked has the ability to change.
assignments - This stores the list of assignments. It is a state variable because the list changes every time a new assignment is added.
grades - This should store the grade for each student. However, we have no way to store students, so let's fix that!

---------------------------------------------

Step 6: Add a state variable
Let's add a way to store students as a variable.

Activity: Add a state variable to src/App.jsx

1.On line 11 of src/App.jsx, add a state variable named students
2.Set students equal to an empty array
3.Add a comma: students: [],
4.Save your changes
5.To run your code, move inside your repo folder in your terminal and run npm start
6.Exit the process in your terminal using Ctrl + C
7.Stage, commit, and push your changes to the changes branch:

git add src/App.jsx
git commit -m "add a state variable for students"
git push

---------------------------------------------

Explaining this.setState
How do we change data within a state variable?

Unfortunately, we can't just do this.state.studentsList = ..... to change data.

To set the state of a state variable we have to use the method, this.setState.

Take a look at the method on line 30 in src/App.jsx

When this method is called, it is adding assignmentName to our state variable assignments by setting the state of assignments to itself with the concatenation of assignmentName.

We are going to set some state in next steps.
*/