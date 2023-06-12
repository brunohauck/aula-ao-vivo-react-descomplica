import React, { useEffect, useState } from "react";

import { getAllUsers } from '../services/api';
export default function ListUsers() {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        getUsers();
    },[])
    const getUsers = async () => {
        const response = await getAllUsers();
        setUsers(response.data)
        console.log(users)
    }

    return (
        <>
            <h2>Listar Usuários</h2>
            <ul>
            {
                users.map((data)=>(
                   <li>{data.name}</li> 
                ))
            }
        </ul>
        </>
    );
}