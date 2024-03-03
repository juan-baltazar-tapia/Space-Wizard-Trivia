import React from "react";

const Card = (props) => {
    const isFrontFacing = props.isFrontFacing;
    if (isFrontFacing) {
        return (
        <>
            <div className="container" >
                <h2>{props.front}</h2>
                <p></p>
            </div>
        </>
        )} 
        return (
        <>
            <div className="container" >
                <h2>{props.back}</h2>
                <p></p>
            </div>
        </>
        )
        
    }

export default Card;
