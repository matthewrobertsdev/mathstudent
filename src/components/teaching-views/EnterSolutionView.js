import React, {useState} from 'react'
import MathJax from 'react-mathjax'
import ReactModal from 'react-modal'

// the view where the solving is displayed
const EnterSolutionView = (props) => {
  let initialText = {}
  let darkBackgroundColor='rgb(34, 34, 33)'
  let lightBackgroundColor='rgb(157, 62, 157)'
  let modalBackgroundColor=lightBackgroundColor
  const [text, setText] = useState(initialText);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
  window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
  if (event.matches) {
    setIsDarkMode(true)
  } else {
    setIsDarkMode(false)
  }
})
if (isDarkMode) {
  modalBackgroundColor=darkBackgroundColor
} else {
  modalBackgroundColor=lightBackgroundColor
}
  return (
    <div>
      <h2>Enter Solution in Simplest Form.</h2>
      {createChoices()}
      <button onClick={handleAnswerSubmit} className='link'>Check Answer</button>
      <br/>
      <br/>
      <br/>
      <br/>
      <ReactModal isOpen={modalIsOpen} style={
    { overlay: {}, content: {width: '200px', height: '200px', margin: 'auto', 
    backgroundColor: modalBackgroundColor, display: 'flex', justifyContent: 'center',
    alignItems: 'center', flexDirection: 'column'}}}>
      <h2>Great Job!</h2>
      <h2>is correct.</h2>
      <button className='link' onClick={closeModal}>Got it</button></ReactModal>
    </div>
  )

  function handleAnswerSubmit() {
    setModalIsOpen(true)
  }

  function closeModal() {
    setModalIsOpen(false)
  }

  function createChoices() {
    return props.solutions.solutions.map((solution, index) => {
      for (let inputIndex = 0; index < inputIndex.length; index++) {
        text[index.toString()+'-'+inputIndex.toString()] = ""
      }
      //getInputs(solution.inputs, index)
      return (
        <div>
          <input type='radio' className='radio-button'/>
          <MathJax.Provider input="tex" >
              <MathJax.Node inline aria-hidden='true' className='heading' 
              formula={`\\color{white}{${solution.function()}}`} />
            </MathJax.Provider>
          <br/>
          {createInputs(solution.inputs, index)}
          <br/>
        </div>
      )
    })
  }

  /*
  function getInputs(inputs, solutionIndex) {
    let args=[]
    for (let index=0; index<inputs.length; index++) {
      args.push(text[solutionIndex.toString()+'-'+index.toString()])
    }
    return args
  }
  */

  function createInputs(inputs, solutionIndex) {
    return inputs.map((input, index) => {
      return (
      <span><label
      className='heading medium-line-height label small-right-margin'>
      {input} is:
    </label><input className='text-input' value={text[solutionIndex.toString()+'-'+index.toString()]} onChange={
                  (event) => {
                    console.log(event.target.value)
                    setText({
                      ...text,
                      [solutionIndex.toString()+'-'+index.toString()]: event.target.value
                    });
                  }
                } /><br/></span>
      )
    })
  }
}

export default EnterSolutionView