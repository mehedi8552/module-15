import axios from "axios";
import React, { useEffect, useState } from 'react'
import { Link,  useNavigate } from "react-router-dom";
 
function Users() {
    //const {id} = useParams()
     
      const [data, setData] = useState([])
      const navigate = useNavigate()
      
      useEffect(()=> {
        axios.get('http://localhost:3001/')
        .then(res => {
            console.log(res);
          setData(res.data);
        })
        .catch(err => console.log(err));
      }, [])
   
    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteuser/'+id)
        .then(res => {
            console.log(res)
            navigate('/')
        }).catch(err => console.log(err))
    }
     
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-100 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success btn-sm">
          Add +
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>first Name</th>
              <th>last Name</th>
              <th>gender</th>
              <th>date Of Birth</th>
              <th>nationality</th>
              <th>address</th>
              <th>email</th>
              <th>phone</th>
              <th>admission Date</th>
              <th>courses</th>
              
            </tr>
          </thead>
          <tbody>
            {
                data.map((user, index) => {
                    return <tr key={index}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.gender}</td>
                        <td>{user.dateOfBirth}</td>
                        <td>{user.nationality}</td>
                        <td>{user.address}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.admissionDate}</td>
                        <td>{user.courses}</td>
                        <td>
                            <Link to={`/edit/${user._id}`} className="btn btn-sm btn-success me-2">Update</Link>
                            <button onClick={() => handleDelete(user._id)} className="btn btn-sm btn-danger">Delete</button>
                        </td>
                    </tr>
                })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
 
export default Users;