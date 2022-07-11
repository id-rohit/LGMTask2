import React from 'react'

const Users=({loading,users})=>{
    return loading ? (   
          <div className='lds-dual-ring'>
          </div>
        ) : 
        (
          <div id="card">
    
          {users.map(user =>
                      <div>
                        <div className="profile">
                          <img src={user.avatar} alt={user.avatar} className="avatar"></img>
                        <div>
                          <h1>{user.first_name} {user.last_name}</h1>
                          <p>{user.email}</p>
                        </div>
                        </div>
                      </div>
            )
          }
          </div>
        )
}

export default Users;
