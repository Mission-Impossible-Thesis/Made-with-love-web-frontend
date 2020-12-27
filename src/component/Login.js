import { connect } from 'react-redux';
import $ from 'jquery';
import React from 'react';
import { Control, actions,Form } from 'react-redux-form';


class Login extends React.Component {
    ajax(login){
        $.ajax({
            method: 'POST',
            url:'http://127.0.0.1:8000/login',//fix it later
            data : JSON.stringify(login),
            contentType: "application/json",
            success:function(res){
              localStorage.setItem('token', JSON.stringify(res));
              console.log(JSON.parse(localStorage.getItem('token')))
            },
            error: function(err){
              console.log('error:' ,err)
            }
          })
      
        }    
    render() {
        return (
<div style ={{marginLeft : "700px"}}>
      <br></br><br></br>
<Form class="row g-3 needs-validation"  model="login" type="submit" onSubmit={(login) => this.ajax(login)}
             novalidate>
  <div class="col-md-4">

  <label for="validationCustom01" class="form-label">Email address</label>
  <b></b><br></br>
            <Control.text className="form-control" type="email" placeholder="Enter email" model="login.email" id="login.email" required style ={{padding:"2px 2px 2px 2px"}}/>
            <div class="valid-feedback">
      Looks good!
    </div>
    <b></b><br></br>
    <label for="validationCustom01" className="form-label">Password</label>

<Control.text className="form-control" type="password" placeholder="Enter email" model="login.password" id="login.password" required style ={{padding:"7px 2px 2px 2px"}}/>
<div class="valid-feedback">
Looks good!
</div>

<b></b><br></br>
<div class="col-12" >
            <button class="btn btn-primary" type="submit" >
             Log in
            </button></div>
        </div>  </Form></div>
        );
      }
}
export default Login;
