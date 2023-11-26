import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
 
function CreateUser() {
 
    const [firstName, setfirstName] = useState()
    const [lastName, setlastName] = useState()
    const [gender, setgender] = useState()
    const [dateOfBirth, setdateOfBirth] = useState()
    const [nationality, setnationality] = useState()
    const [address, setaddress] = useState()
    const [email, setemail] = useState()
    const [phone, setphone] = useState()
    const [admissionDate, setadmissionDate] = useState()
    const [courses, setcourses] = useState()
 
    const navigate = useNavigate()
 
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/create', {firstName,lastName,gender,dateOfBirth,nationality,phone,address, email,admissionDate,courses})
        .then(res => {
            console.log(res.data);
            navigate('/')
        })
        .catch(err => console.log(err))
    }
 
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Add User</h2>
          <div className="mb-2">
            <label htmlFor="">First Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => setfirstName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">lastName</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => setlastName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">gender</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => setgender(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">date Of Birth</label>
            <input
              type="text"
              placeholder="Enter Email"
              className="form-control"
              onChange={(e) => setdateOfBirth(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">nationality</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => setnationality(e.target.value)}setaddress
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">address</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => setaddress(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">email</label>
            <input
              type="email"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">phone</label>
            <input
              type="number"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => setphone(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">admission Date</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => setadmissionDate(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">courses</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => setcourses(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}
 
export default CreateUser;