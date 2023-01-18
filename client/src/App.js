import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Header from './components/Header'; 
import Admin from './components/Admin';
import MassageStyles from './components/MassageStyles';
import Services from './components/Services';
import Home from './components/Home';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import dataContext from './components/dataContext';
import Footer from './components/Footer';
import AdminLogin from './components/AdminLogin';

function App() {
  
  const [services, setServices] = useState([])
  const [massageStyles, setMassageStyles] = useState([])
  const [businessInfo, setBusinessInfo] = useState([])


  useEffect(() => {
    axios.get('/services')
      .then(res => setServices(res.data))
      .catch(err => console.log(err))
    
    axios.get("/massagestyles")
    .then(res => setMassageStyles(res.data))
    .catch(err => console.log(err))

    axios.get("/businessinfo")
    .then(res => setBusinessInfo(res.data))
    .catch(err => console.log(err))
  }, [])

  function sendNewMassage(newMassageInputs){
    axios.post('/massagestyles', newMassageInputs)
      .then(res => setMassageStyles(prevMassages => [
        ...prevMassages,
        res.data
      ]))
      .catch(err => console.log(err))
  }

  function deleteMassage(massageId){
    axios.delete(`/massagestyles/${massageId}`)
      .then(res => setMassageStyles(prevMassages => prevMassages.filter(massage => massageId !== massage._id)))
      .catch(err => console.log(err))
  }

  function addNewService(newServiceInputs){
    axios.post('/services', newServiceInputs)
      .then(res => setServices(prevServices => [
        ...prevServices,
        res.data
      ]))
      .catch(err => console.log(err))
  }

  function deleteService(serviceId){
    axios.delete(`/services/${serviceId}`)
      .then(res => setServices(prevService => prevService.filter(service => serviceId !== service._id)))
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <Router>
        <dataContext.Provider value = {{
          services,
          massageStyles, 
          businessInfo
        }}>


          <Header />

          <Routes>
            <Route path = "/" element = {<Home />} />

            <Route path = "/services" element = {<Services />}/>

            <Route path = "/contact" element = {<Contact />}/>

            <Route path = "/massagestyles" element = {<MassageStyles />}/>

            <Route path = '/admin'  
              element={<Admin 
                saveMassage = {sendNewMassage} 
                deleteMassage = {deleteMassage}
                addService = {addNewService}
                deleteService = {deleteService}
                />}/>
              
            <Route path = '/adminlogin' element= {<AdminLogin />}/>

          </Routes>

          <Footer />

        </dataContext.Provider>
      </Router>
    </div>
  );
}

export default App;
