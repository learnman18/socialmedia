

//curretnly not in use anywhere

import axios from "axios";

const UserAction = (id) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    axios
        .get(url)
        .then((response)=>(response))
        .catch((error)=>{
            console.log(error)
        })
        return(
            <></>
        )
}

export default UserAction