import React, { Component } from 'react';
import './css/index.css';

export default class Form extends Component {

    constructor(props){
        super(props);
        this.state = {
            firstname : '',
            lastname : '',
            zipcode : '',
            email : '',
            username :'',
            password : '',
            confirmpassword :'',
            invalidData: true,
            formError : {
                email : true,
                username:true,
                password:true,
                confirmpassword:true,
            }
            
        };
        this.count = 0;
        this.handleChange=this.handleChange.bind(this)
        this.validationcheck=this.validationcheck.bind(this)
    }

    handleChange(e){
        const name = e.target.name;
        const value = e.target.value;
        
        this.setState({
            [name]:value
        },()=>{this.validationcheck(name,value)})
    }
    validationcheck(name,value){
        let errorValidation= this.state.formError;
        switch (name)
            {
               case 'email': 
                    const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                    errorValidation.email = value.match(emailReg)?false:true;
                    break;
               case 'username': 
                    // const usernameval = "/^[a-zA-Z\-]+$/" 
                    errorValidation.username = value.length<6?true:false;
               break;
            
               case 'password': 
               errorValidation.password = value.length<6?true:false;
               break;
            
               case 'confirmpassword': 
               errorValidation.confirmpassword = (this.state.password.length>0 && this.state.password !== this.state.confirmpassword)?true:false;
               break;
            
               default:  
                    break;
            }

            this.setState({
                formError : errorValidation
            });
            if(!errorValidation.email && !errorValidation.username && !errorValidation.password && !errorValidation.confirmpassword){
                this.setState({
                    invalidData: false
                });
            }
                
            
    }
    handleSubmit(event) {
        event.preventDefault();
        alert("Your form is submitted successfully!!!");
    }

  render() {
    return (
      <div>
        <section>
            <div className="background-image">
                <label>My Sign Up Form</label>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="inputsubdiv">
                        <span><i class="fa fa-user" aria-hidden="true"></i></span>
                        <input type="text" placeholder="First Name" name="firstname" value={this.state.firstname} onChange={this.handleChange}/>
                    </div>
                    <div className="inputsubdiv">
                        <span><i class="fa fa-user" aria-hidden="true"></i></span>
                        <input type="text" placeholder="Last Name" name="lastname" value={this.state.lastname} onChange={this.handleChange}/>
                    </div>
                    <div className="inputsubdiv">
                        <span><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                        <input type="text" placeholder="Location" name="zipcode" value={this.state.zipcode} onChange={this.handleChange}/>
                    </div>
                    <div className="inputsubdiv">
                        <span><i class="fa fa-envelope" aria-hidden="true"></i></span>
                        <input type="email" placeholder="Enter Email"  className={"speinp"+ " "+ (this.state.email.length > 0 && this.state.formError.email ? "error-border":"")} name="email" value={this.state.email} onChange={this.handleChange}/>
                        <span>{(this.state.email.length > 0 && this.state.formError.email)?<i className="fa fa-warning fawarningstyles"></i>:''}</span>
                        <div className="errormsg">{this.state.email.length > 0 && this.state.formError.email?"Invalid Email":""}</div>
                    </div>
                    <div className="inputsubdiv">
                        <span><i class="fa fa-user" aria-hidden="true"></i></span>
                        <input type="text" placeholder="Enter User Name"  name="username" value={this.state.username} onChange={this.handleChange}/>
                        <span>{(this.state.username.length > 0 && this.state.formError.username)?<i className="fa fa-warning fawarningstyles"></i>:''}</span>
                        <div className="errormsg">{this.state.username.length > 0 && this.state.formError.username?"Invalid User Name":""}</div>
                    </div>
                    <div className="inputsubdiv">
                        <span><i class="fa fa-lock" aria-hidden="true"></i></span>
                        <input type="password" placeholder="Enter password" name="password" value={this.state.password} onChange={this.handleChange}/>
                        <span>{(this.state.password.length > 0 && this.state.formError.password)?<i className="fa fa-warning fawarningstyles"></i>:''}</span>
                        <div className="errormsg">{this.state.password.length > 0 && this.state.formError.password?"Invalid Password":""}</div>
                    </div>
                    <div className="inputsubdiv">
                        <span><i class="fa fa-lock" aria-hidden="true"></i></span>
                        <input type="password" placeholder="Enter Confirm Password" name="confirmpassword" value={this.state.confirmpassword} onChange={this.handleChange}/>
                        <span>{(this.state.confirmpassword.length > 0 && this.state.formError.confirmpassword)?<i className="fa fa-warning fawarningstyles"></i>:''}</span>
                        <div className="errormsg">{this.state.confirmpassword.length > 0 && this.state.formError.confirmpassword?"Password Not Matching":""}</div>
                    </div>
                    <div className="inputsubdiv">
                        <button disabled={this.state.invalidData} type="submit" >Sign Up</button>
                    </div>
                </form>
                <hr/>
            </div>
        </section>
      </div>
    )
  }
}