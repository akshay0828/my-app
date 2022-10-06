import React, { useState } from "react";
import PropTypes from 'prop-types';

const User=(props)=>{
    // const userName="Santhosh";
    const alignValue="left";

  const [users,setUsers]=  useState([
        {
            name:"User1",
            email:"User1@company.com"
        }
    ])
    const setUsersHandler=()=>{
        setUsers([{
            name:"kumar",
            email:"kumar1204@gmail.com"
        }])
    }
    return <div>
         <p align={alignValue}>{props.userName}</p>
         <p>{users.length}</p>
         <p>{users[0].name}</p>
         <p>{users[0].email}</p>
         <button name="btn1" type="button" onClick={setUsersHandler}>Set User State</button>
         {/* <p>{props.userEmail}</p>
         <p>{props.children}</p>
         <p>{props.userAge}</p> */}
    </div>
}
// User.propTypes={
//     userEmail:PropTypes.string,
//     userAge:PropTypes.number
// }
export default User;