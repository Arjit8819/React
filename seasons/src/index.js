import React from "react";
import ReactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay"
import Spinner from "./Spinner";



// Class Component in react.

class App extends React.Component{
    state = {lat: null , errMessage : ""}

    // Lifecycle Method:
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // To set a state we need to call setState!!
                this.setState({lat : position.coords.latitude});
            },
            (err) =>{
                this.setState({errMessage :err.message});
            }
            );

    }
// For not putting logic in render body we will create a helper function for render.
renderContent(){
    if(this.state.errMessage && !this.state.lat){
        return(
            <div>Error : {this.state.errMessage}</div>
        );
    }
    if(!this.state.errMessage && this.state.lat){
        return(
            <div><SeasonDisplay lat = {this.state.lat} /></div>
        );
    }
    return <Spinner message = "please allow location." />

} 
// React says that we have define render.
    render() {
        return (
            <div className = "border red">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDom.render(
    <App/>,
    document.querySelector('#root')
    );