import React, { useState } from 'react'
import "../css/chat.css"

function Chat() {
  const [message, setMessage] = useState('');

  const messageOnChange = (e) => {
    setMessage(e.target.value)
  }

  const sendTheMessage = (e) => {
    e.preventDefault();
    console.log(message)
  }

  return (
    <div className='chatContainer' id="chatContainer">
        <div className='chatBox'>

        </div>

        <div className=''>
          <input onChange={messageOnChange} type='text' placeholder='Your message' className='yourmessageBox' value={message}/>
          <button onClick={sendTheMessage} className=''>Send</button>
        </div>
    </div>
  )
}

export default Chat