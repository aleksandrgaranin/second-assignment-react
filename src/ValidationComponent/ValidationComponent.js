import React from 'react';

const validationComponent = (props) => {    

    if (props.length < 5){
        return(
            <div className="ValidationComponent">
            
            <p>Text is too short</p>
            <p>{props.children}</p>
        </div>
        )
    }       

    return (
        <div className="ValidationComponent">
            
            <p>Text is long enouth</p>
            <p>{props.children}</p>
        </div>
    );
};

export default validationComponent;