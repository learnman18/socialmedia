import React, { useEffect } from "react";
import { fetchUsers, selectUser } from "../actions/UsersAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Users = () => {

    const dispatch = useDispatch()
    // const { data, error } = useSelector((state) => state.api);
    const { data, error } = useSelector((state) =>{
        // console.log("state", state)
        // console.log("state api", state.api)
        return state.api
        });
       
    //to get the value of error and data we need to dispatch the fetchUsers() function.    

    console.log("inside users.js data", data, error);

    useEffect(()=>{
        dispatch(fetchUsers());
    },[dispatch])

    /* this is a function created for the userName click, when are clicking on the username we are passing one
        paramenter item to dispatch the details from the selectUser() function, selectUser takes all the details to
        action (variable - SELECT_USER) and reducer file and we are accessing that detail in another User.js file.
        Now we will go inside User.js file to check.
    */
    const individualUserPage = (item) => {
        console.log("item" , item)
        dispatch(selectUser(item));
    }


    return(
        <div className="flex items-center justify-center">
            <table className="table-auto border-separate border-slate-500 sm:w-full sm:py-5 sm:px-6">
                <thead className="sm:hidden">
                    <tr>
                        <th className="border border-slate-600 px-3 py-2 text-left">id</th>
                        <th className="border border-slate-600 px-3 py-2 text-left">Username</th>
                        <th className="border border-slate-600 px-3 py-2 text-left">Name</th>
                        <th className="border border-slate-600 px-3 py-2 text-left">E-mail</th>
                        <th className="border border-slate-600 px-3 py-2 text-left">Phone</th>
                    </tr>
                </thead>
                <tbody className="sm:flex sm:flex-col">
                    {
                        data && data.map((item)=>
                        <tr key={item.id} className="sm:flex sm:flex-col sm:border-b sm:border-yellow-400">
                            <td className="border border-slate-700 sm:border-0 px-3 py-2">{item.id}</td>
                            <td className="border border-slate-700 sm:border-0 px-3 py-2">
                                <Link className="text-burly underline" to={`/users/${item.id}`} 
                                onClick={()=>individualUserPage(item)}>{item.username}</Link>
                            </td>
                            <td className="border border-slate-700 sm:border-0 px-3 py-2">{item.name}</td>
                            <td className="border border-slate-700 sm:border-0 px-3 py-2">{item.email}</td>
                            <td className="border border-slate-700 sm:border-0 px-3 py-2">{item.phone}</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Users;