import React,{useState,useEffect} from 'react'
import ContactService from '../service/ContactService';
import { Link, useNavigate ,useParams} from 'react-router-dom';

const AddContactComponent = () => {
//variables to collect and store
const[name,setName]=useState('')
const[contactNo,setContactNo]=useState('')
const navigate=useNavigate();
const contactData={name,contactNo};
const {id}=useParams();


function saveContact(e) {
    e.preventDefault();
if(contactData.name !=="" && contactData.contactNo !=="")
{
if (id) {
    ContactService.updateContact(id,contactData)
    .then(navigate("/contact"))
    .catch(e=>console.log(e)) ;

}else
{
    ContactService.saveContact(contactData)
    .then(navigate("/contact"))
    .catch(e=>console.log(e))

}
}else{
    alert("Dorababu ! Please Enter all Fields")
}
}
function tile() {
    if (id) {
        return "Update Contact";
        
    }
    else{
        return "Add Contact";
    }
}
useEffect(()=>{

    if (id) {
        ContactService.getContactById(id)
        .then(res=>{
            setName(res.data.name);
            setContactNo(res.data.contactNo);
        })
        .catch(e=>{console.log(e);alert(e)});
    }
},[]);



  return (
    <div>
        <div className='container mt-5'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3'>
                    <h2 className='text-center'>{tile()}</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <input className='form-control' 
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                                type="text" placeholder='Enter  Name' />
                            </div>
                            <div className='form-group mb-2'>
                                <input className='form-control' 
                                value={contactNo}
                                onChange={(e)=>setContactNo(e.target.value)}
                                type="text" placeholder='Enter Phone Number' />
                            </div>
                            
                            <button onClick={(e)=>saveContact(e)} className='btn btn-success'>Save</button> {" "}
                            <Link to={"/contact"} className='btn btn-danger' href="">Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddContactComponent