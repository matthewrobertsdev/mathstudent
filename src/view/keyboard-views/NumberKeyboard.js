import React from 'react';
import Keyboard from 'react-simple-keyboard';
class NumberKeyboard extends React.Component{
  constructor(props) { super(props); this.state={ keyPressHandler: this.props.keyPressHandler }; };
render()
    {
      return <div className='keyboard-container'>
        <Keyboard className='Keyboard' layout={{ default: [ ' 1 2 3 4 5', ' 6 7 8 9 0',  
        '. - / {bksp}', '{enter}', '{space}' ]}}
          onKeyPress={key => this.state.keyPressHandler(key)} display={{'{bksp}': 'delete', '{enter}':'done', '{space}': 'space', }}/>
      </div>
   }

}
export default NumberKeyboard
