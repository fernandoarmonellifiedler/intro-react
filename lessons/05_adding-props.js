/* Step 5: Adding a prop
What does the List component do with the information we just included? Adding this.props tells the component to look for the property that was passed to it.

To see, open the src/List.jsx file. In the render method, in our input tag, notice that we set our placeholder to this.props.placeholder. Then, at the bottom of our render method, we loop through our this.props.currList. This shows each item in the list that we pass.*/

render() {
    return (
      <div className="col-6 mx-auto">
        {/*Replace the code below to call the title prop*/}
        <p className="h2">{this.props.title}</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              className="form-control input-sm"
              type="text"
              placeholder={this.props.placeholder}
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input className="btn btn-sm" type="submit" value="Submit" />
        </form>
        <ul className="Box">
          <div className="Box-header">{this.props.title}</div>
          {this.props.currList.map((item, index) => (
            <li className="Box-row" key={index}>
              {" "}
              {item}{" "}
            </li>
          ))}
        </ul>
      </div>
    );
  }

/*
Let's go ahead and replace the current title with another prop.

Activity: Replace the title prop in src/List.jsx
1.In src/List.jsx, replace line 31 with {this.props.title}
2.Save your changes
3.To run your code, move inside your repo folder in your terminal and run npm start
4.Exit the process in your terminal using Ctrl + C
5.Stage, commit, and push your changes to the changes branch:

git add src/List.jsx
git commit -m "use a prop for the header"
git push
*/