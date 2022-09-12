import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Pond Chat</span>
      <div className="user">
        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
        <span>{}</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar