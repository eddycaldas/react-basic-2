import React from 'react';

const UserInput = (props) => {

    const style = {
        border: "1px solid black",
        textAlign: "center",
        width: "30%",
        height: "30px",
        backgroundColor: 'yellow'
    }

    return (
        <div>
           <input 
           onChange = { props.changed }
           value = { props.oldName }
           style = { style }
           />
        </div>
    )
}

export default UserInput;


