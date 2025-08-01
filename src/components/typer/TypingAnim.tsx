import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const TypingAnim = () => {
  return (
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Chat With Your OWN AI 🤖',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Crafted with MERN. Powered by AI.💡',
        2000,
        'Built to Showcase Skills 🛠️',
        1500,
      ]}
    //   wrapper="span"
      speed={50}
      style={{ fontSize: '50px', color: "white", display: "inline-block", textShadow:"1px 1px 20px #000" }}
      repeat={Infinity}
    />
  )
}

export default TypingAnim
