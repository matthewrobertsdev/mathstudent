import React, {useState} from 'react'
import MathJax from 'react-mathjax'

// the view where the solving is displayed
const EnterSolutionView = (props) => {
  let initialText = {}
  const [text, setText] = useState(initialText);
  return (
    <div>
      <h2>Enter Solution in Simplest Form.</h2>
      {createChoices()}
      <button className='link'>Check Answer</button>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  )

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

  function getInputs(inputs, solutionIndex) {
    let args=[]
    for (let index=0; index<inputs.length; index++) {
      args.push(text[solutionIndex.toString()+'-'+index.toString()])
    }
    return args
  }

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