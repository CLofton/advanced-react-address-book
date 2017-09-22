import React from "react";

function AllDetails(props) {
    console.log(props);
    const userDivs = props.users.map((user) => {
        return <div>
                <p>{user.first_name}</p>
                <p>{user.last_name}</p>
                <p>{user.phone}</p>
                <p>{user.address}</p>        
                <p>{user.occupation}</p>
                <img src={user.avatar}/>
            </div>
    })
    return (
        <div>
            {userDivs}
        </div>
    );
}

export default AllDetails;