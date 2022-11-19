import React from 'react';
import ThreeScene from "./components/ThreeScene";
import Sphere from './components/Sphere';
import { OrbitControls, Stars } from '@react-three/drei'
import './style.css'

function App() {
  return (
    <div style={{
      height: '100vh', overflow: 'hidden' 
    }}>
      <div className='header'>
        <h1>Sean Bienvenidos a mi Página web</h1>
        <ul className='lista'>
          <li>Acerca de Nosotros</li>
          <li>Blog</li>
          <li>Servicios</li>
          <li>Contáctanos</li>
        </ul>
      </div>
      
      <ThreeScene>
        <color attach='background' args={['#161c24']} />
        
        <Sphere color='#00ff00' position={[-2, 0, 0]} />
        <Sphere color='#ff0000' position={[2, 0, 0]}  />
        <ambientLight />
        <OrbitControls />
        <Stars />
      </ThreeScene>
    </div>
  );
}

export default App;
