import React from "react";
import { Switch } from "antd";
import "./switch.css";

function AddChar(props) {
    
    const handleSwitch = (checked) => {
        props.baseFunc(props.id, checked);
    }

    return(
        <div className="addChar">
            {props.text}
            <Switch defaultChecked={props.id !== '4'} onChange={handleSwitch} />
        </div>
    )
}

export default AddChar;