import React, { Component } from 'react';
import {Formik , Field, yupToFormErrors, ErrorMessage,FieldArray} from "formik";
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

      <label>twitter</label><br />
      <Field name="social.twitter" /><br />
      <ErrorMessage name='social.twitter'/> <br/>

 <label>Facebook</label><br />
      <Field name="social.facebook" /><br />
      <ErrorMessage name='social.facebook'/> <br/>
      
      <FieldArray
              name='friends'
              render={arrayHelper=>(
                    <div>

                    {props.values.friends.map((item,index)=>(
                      <div key={index}>
                      <Field name={`friends.${index}`} />
                      <button type='button' onClick={()=>arrayHelper.remove(index)}> - </button>
                      <ErrorMessage name={`friends.${index}`}/> <br/>
                      </div>

                      ))}
                        <button type='button'  onClick={()=>arrayHelper.push('')}>Add</button>
                      </div>
                    
              )} 
      />
      <button type="submit">Send</button>
    </form>
  }
  Schema=()=>{
        const schema=yup.object().shape({
              email: yup.string().required(), //matkonche khawia
              type: yup.string().required(),  //matkonche khawia
              sex: yup.string().required(),  //matkonche khawia
              name: yup.string().required(),  //matkonche khawia
              social:yup.object().shape({
                facebook:yup.string().required('Facebook is a required field'), //personlise the output of error message
                twitter:yup.string().required('Twitter is a required field'),
              }),
              friends:yup.array().of(
                yup.string().required('friend field Required ')
            )
        });
        return schema;  // return response
  }

  render() {
    return (
      <div className="App">
        <Formik 
          initialValues={{name: "",
          email:"",
          type:'',
          active:false,
          sex:'',
          social:{
              facebook:'',twitter:''
          },
          friends:['Raissi anass','Imam']
              
        }} // by default  is false 
          onSubmit={this.onSubmit}  //katl3ab 3la li fo9mminha
          render={this.form}
          validationSchema={this.Schema()}
          />
      </div>
    );
  }
}

export default App;

