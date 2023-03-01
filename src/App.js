

import './App.css';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import AddContactComponent from './component/AddContactComponent';
import ListContactComponent from './component/ListContactComponent';

import {BrowserRouter,Routes,Route} from "react-router-dom";



function App() {
  return (
    
<BrowserRouter>
<HeaderComponent/>
<div className='container'>

<Routes>
<Route path="/" element={<ListContactComponent/>}/>
<Route path="/contact" element={<ListContactComponent/>}/>
<Route path="/add-contact" element={<AddContactComponent/>}/>
<Route path="/add-contact/:id" element={<AddContactComponent/>}/>
</Routes>
</div>
<FooterComponent/>

</BrowserRouter>
   
  );
}

export default App;
