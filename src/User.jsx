import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const User = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3000/api/user/fetch')
            .then((res) => {
                console.log(res.data);
                setUser(res.data.data); // Use res.data.data based on the response structure
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <Link to="/create">Createuser</Link>
            {/* <Link to="/edit">{<EditUser />}</Link> */}
            <table border={1} style={{ width: "100%" }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((users) => (
                            <tr key={users.id}>
                                <td>{users.name}</td>
                                <td>{users.email}</td>
                                <td>{users.address}</td>
                                <td>
                                    <Link to={`/update/${users.id}`}>update</Link>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>

            </table>
        </div>
    );
};

export default User;
