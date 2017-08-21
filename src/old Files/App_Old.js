import React from 'react';
// import * as util from './js/common.js';
/*one way to create a component*/

// class App extends React.Component{
//   render(){
//      //return <h1>Hello</h1><b>Ankit</b>;
//      // return React.createElement('h1',null,'hello');
//   }
// };

//second way to create Component
// const App = ()=> <h1>Hello Ankit</h1> ;

// App.propTypes={
// 	txtValue : React.PropTypes.string,
// 	numValueRequired : React.PropTypes.number.isRequired
// }

// class App extends React.Component{
	// constructor(){
	// 	super();
	// 	// util.a1b1();																																										 <div className=""></div>
	// }

// 	constructor() {
// 		super();
// 		this.state ={
// 			txt : "Ankit"
// 		}
// 	}
// 	render(){
// 		return <h1>Hello, {this.state.txt}</h1>;
// 	}
// }


/*class App extends React.Component{
	constructor() {
		super();
		this.state ={
			txt : "Ankit"
		}
	}
	update(e){
		this.setState({txt : e.target.value})
	}
	render(){
		return (
				<div>
				    <input type ="textarea" onChange = {this.update.bind(this)} />
					<h1>Hello, {this.state.txt}</h1>
				</div>
			);
	}
}*/




//-------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------
class App extends React.Component{

	render(){
		return <Button> &heart; How to access text written between component opening and closing?</Button>
		}
}

class Button extends React.Component{
	constructor(){
		super();

		this.state ={
        			val :''
        		}
    
	}

	render(){
console.log('dsbfjsabd');

		return <div>{this.state.val}</div>;
	}
}
//-------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------
export default App;
