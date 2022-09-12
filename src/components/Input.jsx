import React from 'react'

const Input = () => {
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type something..."
        // onChange={(e) => setText(e.target.value)}
        // value={text}
      />
      <div className="send">
        <img src="https://images.unsplash.com/photo-1655874819398-c6dfbec68ac7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGF2YXRhcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          // onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="file">
          <img src="https://images.unsplash.com/photo-1655874819398-c6dfbec68ac7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGF2YXRhcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        </label>
        <button >Send</button>
      </div>
    </div>
  )
}

export default Input