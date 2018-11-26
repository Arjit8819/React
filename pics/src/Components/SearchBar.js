import React from "react"

class SearchBar extends React.Component{
state =  {term : ''}
// we could use arrow function in onChange also for function below.
// like onChange = {(event) => console.log(event.target.value)}
    onInputChange(event) {
        
        console.log(event.target.value)
    };

    onFormSubmit= (event) => {
        // this stops the form to relode after clicking enter.
        event.preventDefault();
        this.props.tosubmit(this.state.term);
    }
    render(){
        return (
        <div className="ui segment">
             <form onSubmit= {this.onFormSubmit} className="ui form">
                <div className="field">
                <label>Image Search</label>
                 <input 
                  type="text" 
                  value = {this.state.term}
// we can also cahnge the value entered by user to upper case after he enters the value.
                  onChange={(e) => this.setState({term : e.target.value})} 
                  />
                 </div>
             </form>
        </div>
        );
    }
}

export default SearchBar;