import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import ContactService from '../service/ContactService'
const ListContactComponent = () => {
  const [contactArray,setContactArray]=useState([]);
  useEffect(()=>{
    getAllContacts();
  },[]);
  
  function getAllContacts(){
    ContactService.getAllContacts()
    .then(res=>{setContactArray(res.data);console.log(res)})
    .catch(e=>console.log(e));

  }
function deleteContactById(e,id) {
  e.preventDefault();
  ContactService.deleteContactById(id).then(getAllContacts()).catch(e=>console.log(e));

}








  return (
    <div className='container'>
        <Link to={"/add-contact"} className='btn btn-primary mb-2 mt-3' href="">Add Employee</Link>
        <h2 className='text-center mb-4'>List of Contacts</h2>
        <table className='table table-bordered table striped'>
            <thead>
                <th>Contact ID</th>
                <th>Contact Name</th>
                <th>Contact Number</th>
                <th>Actions</th>
            </thead>
            <tbody>
    {contactArray.map(contact=>
      <tr id={contact.id}>
      <td>{contact.id}</td>
<td>{contact.name}</td>
<td>{contact.contactNo}</td>
<td>
  <Link to={`/add-contact/${contact.id}`} className='btn btn-info' href=''>Update</Link>
  <a onClick={(e)=>{deleteContactById(e,contact.id)}} className='btn btn-danger' href=''> Delete</a>
</td>
      </tr>
      
      
      
      )}
            </tbody>
        </table>
    </div>
  )
}

export default ListContactComponent