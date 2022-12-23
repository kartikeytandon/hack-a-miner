import React, { useState } from 'react'

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const postData = () => {
        console.log("First Name: "+ firstName)
        console.log("Last Name: "+ lastName)
        // alert(firstName)
      }
  return (
    <div className="signup-form">
            <form action="">
                <div className="form-field">
                    <label>First Name</label>
                    <input type='text' value={firstName} placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                    {/* <input 
          type="password" 
          name="password" 
          id="password" 
          placeholder='Password' 
          autoComplete='off' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} */}
        {/* /> */}
                </div>
                <div className="form-field">
                    <label>Last Name</label>
                    {/* <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/> */}
                    <input type='text' value={lastName} placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <button onClick={postData} type='submit'>Sign Up</button>
            </form>
        </div>
  )
}

export default Signup