import React from 'react'

const Search = () => {
  return (
    <div className="search">
    <div className="searchForm">
      <input
        type="text"
        placeholder="Find a user"
        // onKeyDown={handleKey}
        // onChange={(e) => setUsername(e.target.value)}
        // value={username}
      />
    </div>
    {/* {err && <span>User not found!</span>} */}
    
      <div className="userChat" >
        <img src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
        <div className="userChatInfo">
          <span>julli</span>
        </div>
      </div>
      
  </div>
  )
}

export default Search