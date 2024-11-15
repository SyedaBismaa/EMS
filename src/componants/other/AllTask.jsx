import React, { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () =>{

   const [userData,setUserData] = useContext(AuthContext);
   
return(
     <div className="bg-[#1C1C1C] p-5  mt-5 rounded  ">
       
       <div className="bg-red-400 py-2 px-4 mb-2   flex justify-between rounded">
        <h2 className=" text-lg font-normal w-1/5 ">Employee Name</h2>
        <h3 className=" text-lg font-normal w-1/5 ">New Task</h3>
        <h5 className=" text-lg font-normal w-1/5 ">Active Task</h5>
        <h5 className=" text-lg font-normal w-1/5 ">Complete</h5>
        <h5 className=" text-lg font-normal w-1/5 ">Failed</h5>

     </div>

     <div className="h-[80%] ">
     {userData.map(function(elem,idx){
        return   <div ke={idx} className=" border-2 border-emerald-600 py-2 px-4 mb-2   flex justify-between rounded">
        <h2 className=" text-lg font-normal w-1/5 ">{elem.firstName}</h2>
        <h3 className=" text-lg font-normal w-1/5 text-blue-400">{elem.taskCounts.newTask}</h3>
        <h5 className=" text-lg font-normal w-1/5 text-purple-400">{elem.taskCounts.active}</h5>
        <h5 className=" text-lg font-normal w-1/5 text-green-500">{elem.taskCounts.completed}</h5>
        <h5 className=" text-lg font-normal w-1/5 text-red-400">{elem.taskCounts.failed}</h5>

     </div>
      })}
     </div>
     

     </div>
)
}

export default AllTask;