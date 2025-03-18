import React from 'react'

const Heading = ({text,className}) => {
  return (
    <h1 className={`text-5xl text-third font-bold font-open ${className}`}>{text}</h1>
  )
}

export default Heading
