import React, {useEffect, useState} from 'react'
import MathJax from 'react-mathjax'
import ReactModal from 'react-modal'

// the view where the solving is displayed
const EnterSolutionView = (props) => {
  useEffect(()=>{
    //ReactModal.setAppElement('body')
  })
  let darkPopUpColor='rgb(34, 34, 33)'
  let lightPopUpColor='rgb(146,38,256)'
  let darkOverlayColor='rgba(34, 34, 33, 0.8)'
  let lightOverlayColor='rgb(255, 255, 255, 0.6)'
  let popUpColor=lightPopUpColor
  let overlayColor=lightOverlayColor
  const [text, setText] = useState(setInitialText());
  const [isCorrect, setIsCorrect] = useState(undefined);
  const [isDarkMode, setIsDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
  const [selectedAnswer, setSelectedAnswer]=useState(0)
  window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
  if (event.matches) {
    setIsDarkMode(true)
  } else {
    setIsDarkMode(false)
  }
})
if (isDarkMode) {
  popUpColor=darkPopUpColor
  overlayColor=darkOverlayColor
} else {
  popUpColor=lightPopUpColor
  overlayColor=lightOverlayColor
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
      <ReactModal appElement={document.getElementById('root')} isOpen={isCorrect!==undefined} style={
    { overlay: {backgroundColor: overlayColor}, content: {width: '200px', height: '200px', margin: 'auto', 
    backgroundColor: popUpColor, display: 'flex', justifyContent: 'center',
    alignItems: 'center', flexDirection: 'column', borderRadius: '20px'}}}>
      <h1>{isCorrect ? 'Great Job!' : "Sorry."}</h1>
      <h2>{isCorrect ? 'You are correct.' : "You are incorrect."}</h2>
      <button className='link' onClick={closeModal}>Got it</button></ReactModal>
    </div>
  )

  function handleAnswerSubmit() {
    let answerNum=parseInt(selectedAnswer)
    let chosenSolution=props.solutions.solutions[answerNum]
    let inputTexts=[]
    for (let index=0; index<chosenSolution.inputs.length; index++) {
      inputTexts.push(text[selectedAnswer+'-'+index])
    }
    let newArgs=props.teacher.normalizeFractionPairs(inputTexts)
    const lesson=props.teacher[props.method](props.parameters.split('@'))
    const correct=chosenSolution.function(newArgs)===lesson[lesson.length-1][lesson[lesson.length-1].length-1]
    setIsCorrect(correct)
  }

  function closeModal() {
    setIsCorrect(undefined)
  }

  function setInitialText() {
    const initialText={}
      for (let index = 0; index < props.solutions.solutions.length; index++) {
        for (let inputIndex = 0; inputIndex < inputIndex.length; inputIndex++) {
          initialText[index.toString()+'-'+inputIndex.toString()]=""
        }
      }
      return initialText
    }
  function createChoices() {
    return props.solutions.solutions.map((solution, index) => {
      
      //getInputs(solution.inputs, index)
      return (
        <div key={index.toString()}>
          <input type='radio' className='radio-button' value={index} 
          checked={index===parseInt(selectedAnswer)} onChange={(changeEvent)=>{
            setSelectedAnswer(changeEvent.target.value)
          }}/>
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
      <span key={solutionIndex.toString()+'-'+index.toString()}><label
      className='heading medium-line-height label small-right-margin'>
      {input} is:
    </label><input className='text-input' value={text[solutionIndex.toString()+'-'+index.toString()]} 
     onChange={
                  (event) => {
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