import React from "react";

function UserDetail(props) {
    return (
        <div>
            <p>{props.user.first_name} {props.user.last_name}</p>
            <p>{props.user.phone}</p>
            <p>{props.user.address}</p>        
            <p>{props.user.occupation}</p>
            <img src={props.user.avatar}/>
        </div>
    );
}

export default UserDetail;
