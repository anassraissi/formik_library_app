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
      <Field name="email"  type='email'/><br />
      <label>Type</label><br />
      <Field name="type"  component='select'> 
      <option value='1'>one</option>
      <option value='2'>two</option>
      <option value='3'>tree</option>
      </Field> 
      <br/>
      <label>Active</label><br />
      <Field name="active"  type='checkbox'/> <br></br> 
      <label>Sex</label><br />
      <Field name="sex" type='radio' value="F" /> Femme <br></br> 
      <Field name="sex" type='radio' value="H" /> Homme <br></br> 

      <button type="submit">Send</button>
    </form>
  }

  render() {
    return (
      <div className="App">
        <Formik 
          initialValues={{name: "Raissi Anass",email:"",type:'1',active:false,sex:'H'}} // by default  is false 
          onSubmit={this.onSubmit}  //katl3ab 3la li fo9mminha
          render={this.form}
          />
      </div>
    );
  }
}

export default App;

