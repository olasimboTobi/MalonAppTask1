import React from 'react'
import "./CircleLoader.css"
import {motion } from "framer-motion"

const containerStyle = {
  position: 'relative',
  width:"7rem",
  height:"7rem",
};

const circleStyle = {
  display:"block",
  width: "3rem",
  height: "3rem",
  border: "1rem solid #e9e9e9",
  borderTop: "1rem solid #3498db",
  borderRadius: "70%",
  position: "absolute",
  boxSizing: "border-box",
  top:0,
  left:0,
};


const spinTransition ={
  loop: Infinity,
  duration: 1,
  ease: "linear"
}


const CircleLoader = () => {
  return (
    <div style={containerStyle}>
      <motion.span 
        style={circleStyle} 
        animate= {{rotate:360}} 
        transition={spinTransition}
      />
    </div>
  )
}

export default CircleLoader