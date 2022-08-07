import React, { Component } from 'react';
import {Formik , Field, yupToFormErrors, ErrorMessage} from "formik";
import * as yup from 'yup';
//baked-in support for schema-based form-level validation through Yup. 

class App extends Component {
  
  onSubmit = (values) => {
    console.log(values);
  }
  // handleSubmit bach matcharge lpage ajaxifie
  form = (props) => {
    return <form onSubmit={props.handleSubmit}> 
      <label>Name</label><br />
      <Field name="name" /><br />
      <ErrorMessage name='name'/> <br/>
      <label>Email</label><br />
      <Field name="email"  type='email'/><br />
      <ErrorMessage name='email'/> <br/>
      <label>Type</label><br />
      <Field name="type"  component='select'> 
      <option value=''></option>
      <option value='1'>one</option>
      <option value='2'>two</option>
      <option value='3'>tree</option>
      </Field> <br></br> 
      <ErrorMessage name='type'/> <br/>

      <br/>
      <label>Active</label><br />
      <Field name="active"  type='checkbox'/> <br></br> 

      <label>Sex</label><br />
      <Field name="sex" type='radio' value="F" /> Femme <br></br> 
      <Field name="sex" type='radio' value="H" /> Homme <br></br> 
      <ErrorMessage name='sex'/> <br/>


      <button type="submit">Send</button>
    </form>
  }
  Schema=()=>{
        const schema=yup.object().shape({
              email: yup.string().required(), //matkonche khawia
              type: yup.string().required(),  //matkonche khawia
              sex: yup.string().required(),  //matkonche khawia
              name: yup.string().required()  //matkonche khawia
        });
        return schema;  // return response
  }

  render() {
    return (
      <div className="App">
        <Formik 
          initialValues={{name: "",email:"",type:'',active:false,sex:''}} // by default  is false 
          onSubmit={this.onSubmit}  //katl3ab 3la li fo9mminha
          render={this.form}
          validationSchema={this.Schema()}
          />
      </div>
    );
  }
}

export default App;

