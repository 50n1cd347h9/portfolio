import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile.tsx'
import { Box } from '@chakra-ui/react';

function App() {
  const [count, setCount] = useState(0)

  return (
  	<>
		<Profile />
      	<div className="card">
    	</div>
	</>
  )
}

export default App
