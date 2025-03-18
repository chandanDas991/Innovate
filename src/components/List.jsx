import React from 'react'

const List = ({text,className}) => {
  return (
    <li className={`text-primary text-lg font-semibold font-op list-none hover:text-[#1BBF00] duration-300 ${className}`}>{text}</li>
  )
}

export default List