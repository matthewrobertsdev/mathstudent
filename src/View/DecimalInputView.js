import React from "react";
import './app.css';


class DecimalUI extends React.Component{

    constructor(props) {
        super(props);
        this.state = this.props.displayName;
      }

      render() {
        return(
  
          <span><span className='small-right-margin'>{this.props.displayName+": "}</span ><input className='medium-right-margin' dangerouslySetInnerHTML={{__html: 'decimalInpiut'}}> </input></span>
  
        );
      }
}

export default DecimalUI;