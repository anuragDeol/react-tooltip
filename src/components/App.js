import React from 'react'
import Tooltip from './Tooltip'
import './App.css'

export default function App() {
  // 'dir' is state which will store the direction of the tooltip, default is 'left'
  const [dir, setDir] = React.useState('left')

  function handleLeftClick() {
    setDir('left')
  }
  function handleTopClick() {
    setDir('top')
  }
  function handleRightClick() {
    setDir('right')
  }
  function handleBottomClick() {
    setDir('bottom')
  }

  return (
    <div id="main">
      <div id="button-container">
        {/* giving 'id' to buttons depending upon the current what button is clicked */}
        <button id={`btn-${dir==='left' && 'left'}`} onClick={handleLeftClick}>Left</button>
        <button id={`btn-${dir==='top' && 'top'}`} onClick={handleTopClick}>Top</button>
        <button id={`btn-${dir==='right' && 'right'}`} onClick={handleRightClick}>Right</button>
        <button id={`btn-${dir==='bottom' && 'bottom'}`} onClick={handleBottomClick}>Bottom</button>
      </div>
      <div id="hover-container">
        <h1>Hover over me</h1>
      </div>
        {/* passing 'dir' as it will tell what is direction/position of tooltip */}
        <Tooltip dir={dir} />
    </div>
  )
}
