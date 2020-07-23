import React, { useEffect, useState } from 'react';
import TeachingRecentView from '../components/teaching-views/TeachingRecentView'
import MethodRecentView from '../components/teaching-views/MethodRecentView'
import ProblemRecentView from '../components/teaching-views/ProblemRecentView'
import { useSelector } from 'react-redux'

//display recents if logged in if there are any
const RecentsPage = () => {

  document.title = 'Recents'
  let jwt = useSelector(state => state.auth.jwt)
  let email = useSelector(state => state.auth.email)

  let [loggedIn, setLoggedIn] = useState(false)

  const [recents, setRecents] = useState([])
  useEffect(() => {
    fetch(`http://localhost:9000/recents`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ jwt: jwt })
    }).then(
      res => res.json()
    ).then(
      data => {
        if (data.error) {
          setLoggedIn(false)
        } else {
          console.log('logged in. should see recents')
          setLoggedIn(true)
          setRecents(data.pages)
          console.log(data.pages)
        }
      }
    ).catch(
      err => console.log(err)
    )
  }, [jwt])

  return (
    <span>
      <h1 className='large-left-margin'>Recents {showEmail()}</h1>
      <hr className='text-margins' />
      {generateRecents()}
      <br />
      <br />
      <br />
      <br />
    </span>
  )

  function showEmail(){
    if (loggedIn) {
      if (email!==undefined&&email!==null&&email!=='null'){
        return `for ${email}`
      } else {
        return null
      }
    } else {
      return null
    }
  }

  function generateRecents() {
    if (loggedIn) {
      if (recents==null || recents.length===0){
        return <h1 className='heading text-margins'>Please visit some teachings or problems to save them to recents.</h1>
      }
      return recents.map((recent) => {
        if (recent.method == null && recent.teachingName !== null) {
          //teaching view is just a link to the teaching
          return <TeachingRecentView teachingName={recent.teachingName} key={recent.teachingName} />
        } else if (recent.arguments == null && recent.teachingName !== null && recent.method !== null) {
          //method view is a link to the teaching's method
          return <MethodRecentView teachingName={recent.teachingName} method={recent.method}
            key={`${recent.teachingName}-${recent.method}`} />
        } else if (recent.arguments !== null && recent.teachingName !== null && recent.method !== null) {
          //problem view is a link to a problem, with a mathjax description of the problem
          return <ProblemRecentView teachingName={recent.teachingName} method={recent.method}
            arguments={recent.arguments} key={`${recent.teachingName}-${recent.method}-${recent.arguments}`} />
        } else {
          return <span></span>
        }
      })
    } else {
      return <h1 className='heading text-margins'>You must login to see your recents.</h1>
    }
  }


}
export default RecentsPage