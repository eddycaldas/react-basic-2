import React from 'react';

import './UserOutput.css'

const UserOutput = (props) => {
    return (
        <div className="outPutComponent">
            <p>this is a paragraph for { props.name }</p>
            <p>Another one here</p>
        </div>
    )
}

export default UserOutput;