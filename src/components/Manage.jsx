import React, { useEffect, useRef, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Manage = () => {

  const passswordRef = useRef()
  
  const [form , setform] = useState({url:"" , username:"" , password:""})
 
  const [passwordarray , setpasswordarray] = useState([])
  useEffect(()=>{
    //store in localstorage
    let Passwords = localStorage.getItem("Passwords");
   
    if(Passwords){
      setpasswordarray(JSON.parse(Passwords))
    }

  },[])

  const copytext = (text)=>{
    toast('Copied to Clipboard', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition : "Bounce"
      });
  }
  
  const showpassword = ()=>{
    passswordRef.current.type = "text"
  }
  
  
  const savepassword = ()=>{
    
    setpasswordarray([...passwordarray, form])
    localStorage.setItem("Passwords" , JSON.stringify([...passwordarray, form]))
    console.log([...passwordarray, form])
  }
  
  
  const handleChange = (e)=>{
    setform({...form, [e.target.name]: e.target.value})
  }
 
 
  return (
    <>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition="Bounce"
      />
      {/* Same as */}
    <ToastContainer />



      <div>
        <div className='< class="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]'></div>

      </div>

      <div className="py-2 mx-auto container my-container">
          <h1 className='py-2 text-yellow-500 text-4xl text font-bold text-center'>
            PassWord
          </h1>


          <p className='py-2 text-blue-400 text-lg text-center'>
            PassWord Manager
          </p>


        <div className="py-2 flex flex-col p-4 text-black gap-2 items-center">
          <input value={form.url} onChange={handleChange} placeholder='Enter URL' className="py-2 border border-yellow-600 rounded-full w-full p-4 " type="text" name="url" id=" "/>
          <div className="py-2 flex w-full justify-between gap-9">
        </div>
        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className="py-2 border border-black rounded-full  p-4 " type="text" name="username" id=" "/>
          <div className="py-2 relative">
            <input ref={passswordRef} value={form.passsword} onChange={handleChange} placeholder='Password' className="py-2 border border-black rounded-full  p-4 " type="password" name="password" id=" "/>
            <span className="py-2 absolute right-4 top-[3px] cursor-pointer" onClick={showpassword}>
              Show
            </span>
          </div>
          <button onClick={savepassword} className='py-2 flex justify-center bg-white hover:bg-gray-400 rounded-full px-4  w-fit'>
            Submit
          </button>
        </div>  
        <div className='Passwords'>
          <h2 className='font-bold text-xl py-4'>Passwords</h2>
          {passwordarray.length === 0 && <div>Please Add passsword </div>}
          {passwordarray.length !=0 &&<table className="table-auto w-full rounded-md overflow-hidden">
            <thead className='bg-blue-400 text-black'>
              <tr>
                <th className='py-2'>URL</th>
                <th className='py-2'>Username</th>
                <th className='py-2'>Password</th>
                <th className='py-2'>Delete</th>
              </tr>
            </thead>
            <tbody className='bg-gray-300'>
              {passwordarray.map((item , index)=>{
                return <tr key={index}>
                <td className='py-2 border border-white text-center w-32'><a href={item.url} target='_blank'>{item.url}</a></td>
                <td className='py-2 border border-white text-center w-32'>{item.username}</td>
                <td className='py-2 border border-white text-center w-32'>{item.password}</td>
                <td className='py-2 border border-white text-center w-32'>
                  <span className='cursor-pointer'>
                   <lord-icon
                    src="https://cdn.lordicon.com/zxvuvcnc.json"
                      trigger="hover"
                      style={{"width":"25px" , "height":"25px"}}>
                    </lord-icon>

                  </span>
                  

                </td>
              </tr>

              })}
             
   
            </tbody>
             
          </table>}
        </div>
       </div>
    </>
  )
}

export default Manage

