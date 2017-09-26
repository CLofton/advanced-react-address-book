import React from "react";
import logo from "./logo.svg";
import "./App.css";
import users from "./users";
import ListOfUsers from "./components/ListOfUsers";
import UserDetail from "./components/UserDetail";
import AllDetails from "./components/AllDetails";
import ListOfUsers2 from "./components/ListOfUsers2";


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser : this.props.users[0]
    }
    this.changeUser = this.changeUser.bind(this);
  }

  changeUser(user){
    this.setState({currentUser : user})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Address Book Application</h2>
        </div>
        {console.log(users)}
        {console.log(this.props)}
        <h1>List Of Users</h1>
        <p><ListOfUsers users={this.props.users} changeUser={this.changeUser}/></p>
        <h1>User Details</h1>
        <p><UserDetail user={this.state.currentUser} /></p>
        <h1>All Details</h1>
        <p><AllDetails users={this.props.users}/></p>
        <h1>List Of Users 2</h1>
        <p><ListOfUsers2 /></p>
      </div>
    );
  }
}
export default App;
