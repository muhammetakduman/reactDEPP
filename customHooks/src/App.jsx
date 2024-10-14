import React from 'react'
import useCopyToClipboard from './Hooks/useCopyToClipboard'
import Toggle from './Toggle'

function App() {

  const [copied, handleCopyToClipboard] = useCopyToClipboard('Pes etme Çalış!')

  return (
    <div>
      {copied && 'SUCCESS COPY'}
      <button onClick={handleCopyToClipboard}>
        KOPYALA
      </button>
      <div>
        <Toggle />
      </div>
    </div>
  )
}

export default App