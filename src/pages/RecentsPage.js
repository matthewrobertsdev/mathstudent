import React, { useEffect } from 'react';

const RecentsPage = (props) => {
  useEffect(() => {
    fetch(`http://localhost:9000/recents`).then(
      res => res.json()
    ).then(
      data => console.log(data)
    ).catch(
      err => console.log(err)
    )
  })

  return(
    <h1 className='large-left-margin'>Recents</h1>
  )
}
export default RecentsPage