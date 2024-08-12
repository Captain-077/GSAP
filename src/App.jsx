import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'

const App = () => {

  const [circle, setCircle] = useState(0)

  const random = gsap.utils.random(-500, 500, 100)

  // const gsapRef = useRef()

  useGSAP(() => {

    gsap.to(".circle", {
      x: circle,
      duration: 0.5,
    })

  }, [circle])


  return (
    <main id='main'>
      <button onClick={() => setCircle(random)}>Animate</button>
      <div className="circle"></div>

    </main>
  )
}


export default App