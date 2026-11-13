import { useState } from "react"
import Todoitem from "./todoitem"

function Todolist(props){
     const activity=props.activity
    const setactivity=props.setactivity
    return(
        
         <div className=" p-2 rounded-md flex flex-col flex-grow justify-between" style={{backgroundColor:"#BCB2DF"}}>
            <h1 className="text-2xl font-semibold">Today's Activity</h1>
            {
                activity.length===0 ?  <p>You have'nt added any Activity yet</p> :""
            }
           
            {
                activity.map(function(item,index){
                   return <Todoitem item={item} index={index} activity={activity} setactivity={setactivity} id={item.id}/>

                })
            }
            
            
        </div>
    )
}
export default Todolist