import 'materialize-css/dist/css/materialize.min.css';
import 'material-design-icons/iconfont/material-icons.css';
import './css/app.css';
import React from 'react';
import memberLogo from './images/member_portal_logo.jpg';
window.jQuery = require('jquery');
require('materialize-css');

export class App extends React.Component{

	 render(){
			return <LoginComponent/>;
	}
}  

class LoginComponent extends React.Component{

	constructor(){
	    super();
	    this.state ={
	        employeeLoginDetail : {
                                    employeeLoginId : '',
                                    password :''
                                  }
        };
	    this.login = this.login.bind(this);
    }
    login(){
	    // fetch('request object', 'init params')
         //    .then(function (response object){
        //          response.json();
        //          response object is returned as a promise, it contains the data, to get it we use next then
        // }).then(function(data){
        //  console.log(if our data is image then at line 30 will be response.blob());
        //  fetch works on the http request and response objects and init params are basically a json that has params
        //  such as method, headers, cache, mode etc.
        // })
        console.log(this.state.employeeLoginDetail);
	    fetch('http://localhost:8080/authenticate', {
            method: 'post',
            headers : {
                'Content-Type':'application/json',
                'Accept': 'application/json'
                      },
            body: JSON.stringify(this.state.employeeLoginDetail)
        }).then(function(response) {
            return response.json();
             })
        .then(function(data) {
            console.log("=======>>>",data);
        });
	 }
	getValue(e,param){
        this.state.employeeLoginDetail[param] = e.target.value;
         this.forceUpdate();
     }

    render(){
		return (
			<div className="container padding-top-50 " >
				<div className="card-panel lighten-2 panel-size  z-depth-5" style={{"height" : "500px"}}>
					<div className="header">
							<div className="row valign-wrapper">
								<a href="http://www.google.com" target="_blank" rel="noopener noreferrer">
									<img src={memberLogo} alt="no-img-Found" className="circle imgsize hoverable"/>
								</a>
					  		</div>
							<div className ="title center-align login-form-text">
								<p className="flow-text">Employee Login Portal</p>
							</div>
					</div>
					<div className="body">
                        <div className="mt0 input-field">
                            <i className="material-icons right prefix userImg">person_outline</i>
                            <input id="icon_prefix3" type="email" className="validate" onChange ={(e) => this.getValue(e,'employeeLoginId')}/>
                            <label htmlFor="icon_prefix3" className="">Email-id</label>
                        </div>
                        <div className="mt0 input-field">
                            <i className="material-icons right prefix userImg">lock_open</i>
                            <input id="password" type="password" className="validate" onChange ={(e) => this.getValue(e,'password')} />
                            <label htmlFor="password" className="">Password</label>
                        </div>
                        <div className="mt0 ml10 ">
                            <input type="checkbox" id="check-box" />
                                <label htmlFor="check-box">Remember me</label>
                        </div>
						{/*<label htmlFor="dropdown"> Login as  </label>
						<input type="text" id="abcd" className="select-dropdown roleButton" data-activates="dropdown" defaultValue="Choose your option"/>
						<ul id="dropdown" className="dropdown-content select-dropdown">
							<li><span>Employee</span></li>
							<li><a>Manager</a></li>
							<li><a>Admin</a></li>
						</ul>*/}
						{/*<a className="btn dropdown-button roleButton" data-activates="dropdown">	Choose role	</a>*/}
					</div>
                        {/*<div className="input-field row">
                            <div className ="col s3">
                                <i className="material-icons left user ">person_outline</i>
                            </div>
                            <div className ="col s9">
                                <input id="username" type="text"/>
                                <label htmlFor="username" className="center-align ">Username</label>
                            </div>
                        </div>*/}
				    <div className="footer">
                      <a onClick={this.login} id="testid" className="waves-effect waves-light btn w100 blue darken-2">LOG IN</a>
                    </div>

                    <div className="fixed-action-btn">
                        <a id = "tap-target" className="btn-floating btn-large red pulse">
                           <i className="large material-icons" key='testid' >add</i>
                        </a>
                        <ul>
                            <li>
                                <a className="btn-floating green tooltipped" data-position="left" data-delay="50" data-tooltip="It's in progress">
                                    <i className="large material-icons">android</i>
                                </a>
                            </li>
                            <li>
                                <a className="btn-floating yellow darken-1 tooltipped" data-position="left" data-delay="50" data-tooltip="Sorry, No Offers :(">
                                    <i className="large material-icons">local_offer</i>
                                </a>
                            </li>
                            <li>
                                <a className="btn-floating red tooltipped" data-position="left" data-delay="50" data-tooltip="Made by Rik, with love <3">
                                    <i className="large material-icons">info_outline</i>
                                </a>
                            </li>
                            <li>
                                <a className="btn-floating blue tooltipped" data-position="left" data-delay="50" data-tooltip="ankit.sharma@yash.com">
                                    <i className="large material-icons">chat</i>
                                </a>
                            </li>
                        </ul>
                    </div>
				</div>
			</div>
		);
	}
}
