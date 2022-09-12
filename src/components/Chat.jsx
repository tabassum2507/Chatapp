import React from 'react'
import Input from './Input'
import Messages from './Messages'

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span></span>
        <div className="chatIcons">
          <img src="https://images.unsplash.com/photo-1568822617270-2c1579f8dfe2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
          <img src="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
          <img src="https://images.unsplash.com/photo-1655874819398-c6dfbec68ac7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGF2YXRhcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat