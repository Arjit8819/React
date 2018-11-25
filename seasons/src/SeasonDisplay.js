import './SeasonDisplay.css';
import React from "react";

const seasonconfig = {
    summer : {
        text : "Let's hit beach !",
        iconName : 'sun'
    },
    winter : {
        text : "It is cold !",
        iconName : 'snowflake'
    }
}

const getSeason = (lat , month) => {
        if(month>2 && month<9){
           return  lat >0 ? 'summer' : 'winter';
        }
        else{
            return lat>0 ? 'winter' : 'summer';
        }
}

const SeasonDisplay = (props) =>{
 const season = getSeason(props.lat,new Date().getMonth());
// Now to display season we can have if statements or simply write if in {}.\
// TO remove the redundant code like below create a variable on top.
    // const text = season === 'winter'? "it is cool" : "it is hot";
    // const icon = season === 'winter' ? 'snowflake' : 'sun';

    const {text, iconName} = seasonconfig[season];
    // console.log(iconName + "name")

    console.log(season);
    return (
        <div className ={`season-display ${season}`}>
        <i className = {`icon-left massive ${iconName} icon`} />
        <h1>{text}</h1>
        <i className = {`icon-right massive ${iconName} icon`} />
        </div>
    );

}

export default SeasonDisplay;