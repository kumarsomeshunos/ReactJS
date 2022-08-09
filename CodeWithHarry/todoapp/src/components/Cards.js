import React from 'react'
import CardItem from './CardItem'

const Cards = () => {
    let CardsStyle = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "Center"
    }
  return (
    <div style={CardsStyle}>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
    </div>
  )
}

export default Cards