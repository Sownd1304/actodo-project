import one from "../assets/images/dustbin.png"
function Todoitem(props){
    const activity=props.activity
    const setactivity=props.setactivity
    function handleDelete(delid){
        var temarr=activity.filter(function(item){
            if(item.id===delid){
                return false
            }
            else{
                return true
            }
        })
        setactivity(temarr)
    }
        
    return(
        <div className="flex justify-between mb-1">
             <p>{props.index+1}.{props.item.activity}</p>
             <img onClick={()=>handleDelete(props.id)} src={one} alt="" style={{width:"30px" ,height:"30px"}} className="bg-red-600 rounded-3xl cursor-pointer"/>
        </div>
        
    )
}
export default Todoitem