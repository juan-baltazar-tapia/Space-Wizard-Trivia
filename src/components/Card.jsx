import React from "react";

const Card = (props) => {
  
    return(<>
        <div className="container" onClick={props.onClick}>
            <div className="child">
                <p className="text">
                    {props.flipped ?  props.back : props.front}
                </p>
            </div>
            
        </div>
        </>
    )      
    }

export default Card;
