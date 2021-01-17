import React from 'react'
import MathJax from 'react-mathjax'

// the view where the solving is displayed
const EnterSolutionView = (props) => {
  return (
    <div>
      <h2>Enter Solution in Simplest Form:</h2>
      {createChoices()}
      <button className='create-button'>Check Answer</button>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  )

  function createChoices() {
    return props.solutions.map(solution => {
      return (
        <div>
          <input type='radio' className='radio-button'/>
          <MathJax.Provider input="tex" >
              <MathJax.Node inline aria-hidden='true' className='heading' formula={`\\color{white}{${solution.function(solution.inputs)}}`} />
            </MathJax.Provider>
          <br/><br/>
        </div>
      )
    })
  }
}

export default EnterSolutionView