import React from 'react'

const TeachingRecentView = (props) => {
  return (
    <span>
      <h1 className='heading text-margins'>Teaching</h1>
      <a href={`../teachings/${props.teachingName}`} className='link-heading text-margins'>
        {props.teachingName} Teaching's Page
      </a>
      <br />
      <br />
      <hr className='text-margins' />
    </span>
  )
}

export default TeachingRecentView