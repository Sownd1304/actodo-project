import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
function Signup(props){
    const value=props.value
    const setvalue=props.setvalue
     const [euser,setuser]=useState("")
    const [epassword,setpassword]=useState("")
    const navigate=useNavigate()
    function check(){
        setvalue([...value,{username:euser,password:epassword}])
        navigate("/")

    }
    return(
        <div className="bg-black p-10">
            <div className="bg-white p-10">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
            <p>I help you manage your activities after you login:) :)</p>
            <div className="my-2 flex flex-col gap-3 w-60">
                <input type="text" placeholder="Username" className="p-1 border-2 border-black border-solid rounded-md"  value={euser} onChange={(e)=>{setuser(e.target.value)}} />
                <input type="text" placeholder="Password" className="p-1 border-2 border-black border-solid rounded-md" value={epassword} onChange={(e)=>{setpassword(e.target.value)}} />
                <input type="text" placeholder="Confirm Password" className="p-1 border-2 border-black border-solid rounded-md"/>
            </div>
            <button className="bg-violet-500 py-1 px-3 border rounded-md" onClick={check}>Sign Up</button>
            
                 <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>
           
            
           
            </div>
        </div>
    )
}
export default Signup