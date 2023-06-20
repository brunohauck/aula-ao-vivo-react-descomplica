import React, { useEffect, useState } from "react";
import { getAllUsers } from '../services/api';
import Table from 'react-bootstrap/Table';
export default function ListUsers() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, [])
    const getUsers = async () => {
        const response = await getAllUsers();
        setUsers(response.data)
        console.log(users)
    }

    return (
        <>
            <h2>Listar Usuários</h2>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email </th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((data) => (
                            <tr>
                                <td>1</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.phone}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </>
    );
}