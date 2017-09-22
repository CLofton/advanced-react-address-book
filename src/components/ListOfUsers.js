import React from "react";

class ListOfUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "show",
        };
        this.toggle = this.toggle.bind(this);
    }
    
    toggle(){
        console.log("toggle is called!")
        console.log(this.state);
        if (this.state.text === "show") {
            this.setState({
                text: "hidden",
            });
        } else { 
            this.setState({
                text: "show"
            });
        }
    }

    render() {
        const userDivs = this.props.users.map((x) => {
            return <div>{x.first_name} <button onClick={() => this.props.changeUser(x)}>Show</button></div>
        });
        return (
            <div>{userDivs}</div>
        );
    }
}

export default ListOfUsers;