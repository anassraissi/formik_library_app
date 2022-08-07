import React, { Component } from 'react';
import {Formik , Field} from "formik";

class App extends Component {
  
  onSubmit = (values) => {
    console.log(values);
  }
  // handleSubmit bach matcharge lpage ajaxifie
  form = (props) => {
    return <form onSubmit={props.handleSubmit}> 
      <label>Name</label><br />
      <Field name="name" /><br />
      <label>Email</label><br />
      <Field name="email" /><br />
      <button type="submit">Send</button>
    </form>
  }

  render() {
    return (
      <div className="App">
        <Formik 
          initialValues={{name: "Raissi Anass",email:""}} 
          onSubmit={this.onSubmit}  //katl3ab 3la li fo9mminha
          render={this.form}
          />
      </div>
    );
  }
}

export default App;

