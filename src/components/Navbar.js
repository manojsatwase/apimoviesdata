import React, { Component } from 'react';

class Navbar extends Component {
 state = {
  item: ""
 }
 handlerChange = (e) => {

  this.setState({
   item: e.target.value
  })
 }
 handlerSubmit = (e) => {
  e.preventDefault()
  this.setState({
   item: ""
  })
 }
 render() {
  return (
   <nav className="navbar navbar-light bg-light justify-content-between">
    <h4 className="navbar-brand">Fetch Movie Database (TMDb)</h4>
    

   </nav>

  );
 }
}

export default Navbar;


