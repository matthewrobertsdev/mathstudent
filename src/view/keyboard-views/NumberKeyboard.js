import React from 'react';
import Keyboard from 'react-simple-keyboard';
import { connect } from 'react-redux';
const mapStateToProps = (state) => { return { displayKeyboard: state.input.displayKeyboard} };
class UnconnectedNumberKeyboard extends React.Component{
    constructor(props) { super(props); this.state={ keyPressHandler: this.props.keyPressHandler }; };
render()
    {
      return <div className={this.props.displayKeyboard ? 
        'keyboard-container display-keyboard' : 'keyboard-container hide-keyboard'}>
        <Keyboard className={this.props.displayKeyboard ? 
        'keyboard display-keyboard' : 'keyboard hide-keyboard'} layout={{ default: [ ' 1 2 3 4 5', ' 6 7 8 9 0',  
        '. - / {bksp}', '{space} {enter}' ]}}
          onKeyPress={key => this.state.keyPressHandler(key)} display={{'{bksp}': 'delete', '{enter}':'done', '{space}': 'space', }}/>
      </div>
   }
}
const NumberKeyboard=connect(mapStateToProps, null)(UnconnectedNumberKeyboard);
export default NumberKeyboard;