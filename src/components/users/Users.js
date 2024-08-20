import React, { useEffect } from "react";
import { fetchUsers } from "../actions/UsersAction";
import { useDispatch, useSelector } from "react-redux";

const Users = () => {

    const dispatch = useDispatch()
    // const { data, error } = useSelector((state) => state.api);
    const { data, error } = useSelector((state) =>{
        console.log("state", state)
        console.log("state api", state.api)
        return state.api
        });

    console.log("data", {data, error})

    // const [users , setUsers] = useState([])

    // const fetchUsers = async() => {
    //     const url = "https://jsonplaceholder.typicode.com/users";
    //     try {
    //         const response = await fetch(url);
    //         if (!response.ok){
    //             throw new Error(`Response status : ${response.status}`);
    //         }
    //         const json = await response.json();
    //         setUsers(json)
    //         console.log("json" , json);
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // }

    useEffect(()=>{
        dispatch(fetchUsers());
    },[dispatch])

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
                            <td className="border border-slate-700 sm:border-0 px-3 py-2">{item.username}</td>
                            <td className="border border-slate-700 sm:border-0 px-3 py-2">{item.name}</td>
                            <td className="border border-slate-700 sm:border-0 px-3 py-2">{item.email}</td>
                            <td className="border border-slate-700 sm:border-0 px-3 py-2">{item.phone}</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        // <>
        //     <p>users page</p>
        // </>
    )
}

export default Users;