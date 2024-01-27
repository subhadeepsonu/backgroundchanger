
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  return (
    <div className=' w-full h-screen flex justify-center' style={{ backgroundColor: color }} >
      <div className='fixed bottom-12 p-5 border-2 rounded-3xl  border-black flex justify-between  bg-white'>
        <button onClick={() => {
          setColor('red')
        }} className='w-16 h-8 rounded border-2 border-black bg-red-500 text-white mx-3'>red</button>
        <button onClick={() => {
          setColor('yellow')
        }} className='w-16 h-8 rounded border-2 border-black bg-yellow-500 text-white mx-3'>yellow</button>
        <button onClick={() => {
          setColor('blue')
        }} className='w-16 h-8 rounded border-2 border-black bg-blue-500 text-white mx-3'>blue</button>
        <button onClick={() => {
          setColor('green')
        }} className='w-16 h-8 rounded border-2 border-black bg-green-500 text-white mx-3'>green</button>
        <button onClick={() => {
          setColor('black')
        }} className='w-16 h-8 rounded border-2 border-black bg-black text-white mx-3'>black</button>
        <button onClick={() => {
          setColor('purple')
        }} className='w-16 h-8 rounded border-2 border-black bg-purple-500 text-white mx-3'>purple</button>
        <button onClick={() => {
          setColor('orange')
        }} className='w-16 h-8 rounded border-2 border-black bg-orange-500 text-white mx-3'>orange</button>
        <button onClick={() => {
          setColor('cyan')
        }} className='w-16 h-8 rounded border-2 border-black bg-cyan-500 text-white mx-3'>cyan</button>


      </div>
    </div>

  )
}

export default App
