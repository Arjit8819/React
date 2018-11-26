import React from "react";

class ImageCard extends React.Component{
    constructor(props){
        super(props);
    

        this.imageRef = React.createRef();
    }

    componentDidMount(){
        console.log(this.imageRef.current.clientHeight);
    }

    render(){
        return (
            <div>
                <img 
                ref = {this.imageRef}
                alt={this.props.image.description}
                src={this.props.image.urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;