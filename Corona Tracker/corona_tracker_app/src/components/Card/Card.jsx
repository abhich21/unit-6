import React from 'react'
import "./Card.css"

function Card() {
  let data = [{
    title: "Confirned Cases",
    color:"blue"
  },
  {
    title: "Recovered Cases",
    color: "green"
    
    },
  {
    title: "Death Cases",
    color:"red"
  }
  ]
  return (
    <div className='container'>
      {data.map((el) => {
        return <>
        <div className='box'>
          <h2 style={{ color: `${el.color}` }} >{el.title}</h2>
        </div>
          </>
      })}
    </div>
  )
}

export default Card
