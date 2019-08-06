import React, { PureComponent } from 'react';
import './buttons.css'
class buttons extends PureComponent {

    componentDidMount(){
        // console.log(this)
    }

    render() {
        return (

         <div className="buttonContainer">
         {this.props.buttons.map((element,index)=>{
            return (<div
            className="buttons"
            id={"button"+index}
            name={element}
            key={index+element}
            onClick={this.props.handlePress}
            >
                {element}
                </div>)
         })}
         </div>   
        );
    }
}


export default buttons;