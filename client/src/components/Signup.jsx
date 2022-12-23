// import React, { useState } from 'react'

// const Signup = () => {
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const postData = () => {
//         console.log("First Name: "+ firstName)
//         console.log("Last Name: "+ lastName)
//         // alert(firstName)
//       }
//   return (
//     <div className="signup-form">
//             <form action="">
//                 <div className="form-field">
//                     <label>First Name</label>
//                     <input type='text' value={firstName} placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
//                     {/* <input 
//           type="password" 
//           name="password" 
//           id="password" 
//           placeholder='Password' 
//           autoComplete='off' 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} */}
//         {/* /> */}
//                 </div>
//                 <div className="form-field">
//                     <label>Last Name</label>
//                     {/* <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/> */}
//                     <input type='text' value={lastName} placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
//                 </div>
//                 <button onClick={postData} type='submit'>Sign Up</button>
//             </form>
//         </div>
//   )
// }

// export default Signup






import React, { useState } from 'react'

const   Signup = () => {
    const [localData, setLocalData] = useState([]);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const postData = (e) => {
        e.preventDefault();
        console.log("First Name: ",firstName)
        console.log("Last Name: ",lastName)
        console.log("Username: ",username)
        console.log("Mail Address: ",email)
        console.log("Password: ",password)

        let fName = firstName
        setLocalData([...localData, fName])
        localData.push(fName)
        let lName = lastName
        localData.push(lName)
        let uName = username
        localData.push(uName)
        let mail = email
        localData.push(mail)
        let key = password
        localData.push(key)

        console.log(localData);

        localStorage.setItem('userData', JSON.stringify(localData))
        console.log(localData);
        
      }
  return (
    <div className="signup-form">
            <form action="submit">
                <h1>Sign Up</h1>
                <div className="form-field">
                    <input type='text' value={firstName} placeholder='First Name' autoFocus onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div className="form-field">
                    <input type='text' value={lastName} placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div className="form-field">
                    <input type='text' value={username} placeholder='Unstoppable Username' onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="form-field">
                    <input type='email' value={email} placeholder='Mail Address' onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="form-field">
                    <input type='password' value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="btn-primary">
                    <button>Connect Wallet</button>
                    <button onClick={postData} type='submit'>Sign Up</button>
                </div>
                <p>New to App?</p>
            </form>
        </div>
  )
}

export default Signup
