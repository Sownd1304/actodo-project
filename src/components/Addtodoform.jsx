import { useState } from "react"

function Addtodoform(props){
     const activity=props.activity
    const setactivity=props.setactivity
    const [inp,setinp]=useState("")
    function handleChange(e){
        setinp(e.target.value)
    }
    function handleAdd(){
        setactivity([...activity,{id:activity.length+1,activity:inp}])
        setinp("")
    }
    return(
         <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Manage Activities</h1>
            <div>
            <input onChange={handleChange} value={inp} type="text" placeholder="Next Activity?" className="p-1 outline-none border border-black rounded"/>
            <button onClick={handleAdd} className="bg-black  border border-black p-1 text-white">Add</button>
            </div>
        </div>
    )
}
export default Addtodoform