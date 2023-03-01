import axios from "axios";
const BASE_URL="http://localhost:8080/contact"
class ContactService{

    //method to get all contact api
    getAllContacts(){
    return axios.get(BASE_URL)
  }
saveContact(contactData){
  return axios.post(BASE_URL,contactData);
}
updateContact(id,contactData){
  return axios.put(`${BASE_URL}/${id}`,contactData)
}

getContactById(id){
  return axios.get(`${BASE_URL}/${id}`);
}
deleteContactById(id){
  return axios.delete(`${BASE_URL}/${id}`);
}




}
export default new ContactService();








