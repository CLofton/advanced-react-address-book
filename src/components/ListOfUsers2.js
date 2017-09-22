import React from "react";

class ListOfUsers2 extends React.Component{
    constructor(props) {
        super(props);
        let num = 0;
        num = num + 1;
        this.state = {
            obnum : num
        }
        
      }


    render() {
        return (
            <div>
                <h1>Hello, {this.state.obnum}</h1>
            </div>
        );
    }
}

export default ListOfUsers2;