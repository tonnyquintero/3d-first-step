import React from 'react';
//three
import { Canvas } from '@react-three/fiber'

const ThreeScene = ({ children }) => {
  return (
    <Canvas>{children}</Canvas>
  )
}

export default ThreeScene