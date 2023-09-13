import React from 'react'

export default function Button({btnClass, title, onClick} : Button) {
  return (
    <button className={`btn ${btnClass}`} onClick={onClick}>{title}</button>
  )
}
