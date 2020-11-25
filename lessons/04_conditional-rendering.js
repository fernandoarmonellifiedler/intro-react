/*
Conditional Rendering
Let's take a look at what the code between lines 52 and 61 means. When we click the Assignments button, the list for assignments is assigned to the variable tabChoice. tabChoice is rendered in the render method.*/

render() {
    let tabChoice = <div />;

    if (this.state.buttonClicked === "assignments") {
      tabChoice = (
        <List
          placeholder="Add Assignment..."
          currList={this.state.assignments}
          addFunction={this.addAssignment}
          title="Assignments"
        />
      );
    }
};

/*
But how do we specialize the List for our assignments? This where our props come into play. We create properties such as placeholder, and currList. We then assign values to them.

------------------------------------------------

Step 4: Import Assignments
Now that we imported the child component, let's use it in our code. At the end of this step, you should be able to click on the Assignments tab and render the following:

Activity: Uncomment the assignments conditional in src/App.jsx
1.In src/App.jsx, uncomment the conditional statement between lines 52 and 61
2.Save your file
3.To run your code, move inside your repo folder in your terminal and run npm start
4.Exit the process in your terminal using Ctrl + C
5.Stage, commit, and push your changes to the changes branch:

git add src/App.jsx
git commit -m "import list component"
git push
*/