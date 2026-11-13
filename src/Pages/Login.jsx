import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
function Login(props){
    const [euser,setuser]=useState("")
    const [epassword,setpassword]=useState("")
    const [ruser,setruser]=useState(true)
    const value=props.value
   const navigate=useNavigate()
    
    function check(){
        var userfound=false
        value.forEach(function(item){
            if(item.username===euser && item.password===epassword)
            {
                console.log("success")
                navigate("/landing",{state:{name:euser}})
                userfound=true
            }
            
        })
        if(userfound===false){
            console.log("Failure")
            setruser(false)
        }
    }
    return(
        <div className="bg-black p-10">
            <div className="bg-white p-10">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
            {ruser? <p>I help you manage your activities after you login:) :)</p> : <p className="text-red-500">Please Sign up before Login</p>}
            <div className="my-2 flex flex-col gap-3 w-60">
                <input type="text" placeholder="Username" value={euser} onChange={(e)=>{setuser(e.target.value)}} 
                className="p-1 border-2 border-black border-solid rounded-md"/>
                <input type="text" placeholder="Password" value={epassword} onChange={(e)=>{setpassword(e.target.value)}} 
                className="p-1 border-2 border-black border-solid rounded-md"/>
                
            </div>
            <button className="bg-orange-500 py-1 px-3 border rounded-md" onClick={check}>Login</button>
            
                 <p>Don't have an account? <Link to={"/Signup"} className="underline">Signup</Link></p>
           
            
           
            </div>
        </div>
    )
}
export default Login