import React, { useEffect, useState } from 'react';
import TeachingRecentView from '../components/teaching-views/TeachingRecentView'
import MethodRecentView from '../components/teaching-views/MethodRecentView'
import ProblemRecentView from '../components/teaching-views/ProblemRecentView'


const RecentsPage = () => {

  document.title='Recents'

  const [recents, setRecents]=useState([])
  useEffect(() => {
    fetch(`http://localhost:9000/recents`).then(
      res => res.json()
    ).then(
      data =>  {
        setRecents(data.pages)
        console.log(data.pages)
    }
    ).catch(
      err => console.log(err)
    )
  }, [])

  return(
    <span>
    <h1 className='large-left-margin'>Recents</h1>
    <hr className='text-margins'/>
    {generateRecents()}
    <br/>
    <br/>
    <br/>
    <br/>
    </span>
  )

  function generateRecents(){
    return recents.map( (recent) => {
      if (recent.method==null&&recent.teachingName!==null){
        return <TeachingRecentView teachingName={recent.teachingName} key={recent.teachingName}/>
      } else if (recent.arguments==null&&recent.teachingName!==null&&recent.method!==null){
        return <MethodRecentView teachingName={recent.teachingName} method={recent.method}
        key={`${recent.teachingName}-${recent.method}`}/>
      } else if (recent.arguments!==null&&recent.teachingName!==null&&recent.method!==null){
        return <ProblemRecentView teachingName={recent.teachingName} method={recent.method}
        arguments={recent.arguments} key={`${recent.teachingName}-${recent.method}-${recent.arguments}`}/>
      } else {
        return <span></span>
      }
    })
  }


}
export default RecentsPage