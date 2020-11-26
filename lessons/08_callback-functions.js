/*
Callback Functions
The last thing you need to know before you can call yourself a React Developer is callback functions. We said that we can pass data to the child with props, but what about passing data from the child to the parent?

With callback functions, we are able to do just that. We pass a function as a prop, and then the child component can call the function that was defined in the parent. Let's look at an example below.

Example of passing functions as props
So where exactly are those functions we created to set state getting called?

On line 63 in src/App.jsx, it looks like we pass the addAssignment function as a prop in this chunk of code.

Navigate to src/List.jsx and take a look at the code between lines 18 and 25 in src/List.jsx.*/

handleSubmit(event) {
    this.setState({
      value: ""
    });

    this.props.addFunction(this.state.value);
    event.preventDefault();
}
/*
When the submit button is clicked, we call the addFunction with the value of our input box. For assignments, the addFunction references the this.addAssignment in App. So when we call this.props.addFunction, we are calling back to the parent component and using the parent's function.

Scroll below for next steps.

---------------------------------------------

Step 9: Adding the correct props
There are some issues with this code. We want to be modifying the students list, not the assignments list.

Let's change some props between lines 71 and 80 to render the correct components when we click Students.

Activity: Change the props for Students

1.Uncomment the conditional statement between lines 65 and 75 of src/App.jsx
2.On line 68, change the placeholder prop to "Add Student..."
3.On line 69, change the currList prop to {this.state.students}
4.On line 70, change the addFunction prop to {this.addStudent}
5.Save your changes
6.To run your code, move inside your repo folder in your terminal and run npm start
7.Exit the process in your terminal using Ctrl + C
8.Stage, commit, and push your changes to the changes branch:

git add src/App.jsx
git commit -m "change props for students rendering"
git push

---------------------------------------------

Step 10: Include Grades
Let's get our grades working! At the end of this activity, your code should now be able to add assignments, students, and grades.

Activity: Uncomment the grades conditional in src/App.jsx

1.In the src/App.jsx file, uncomment the conditional statement between lines 77 and 86 for our grades tab
2.Save your changes
3.To run your code, move inside your repo folder in your terminal and run npm start
4.Exit the process using Ctrl + C
5.Stage, commit, and push your changes to the changes branch:

git add src/App.jsx
git commit -m "uncomment grades section"
git push
*/