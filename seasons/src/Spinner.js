import React from "react";
import ReactDom from "react-dom";


const Spinner = (props) =>{
 
     return (
         <div class = "ui active dimmer">
            <div class = "ui text loader">{props.text}</div>
            </div>
     );

};

// If you donot pass message in props then show defalutprops.
Spinner.defaultProps = {
    message : 'Loding...'
};

export default Spinner;