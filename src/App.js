import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Dashboard from './containers/Dashboard/Dashboard';
import Login from './containers/Login/Login';
import Signup from './containers/Signup/Signup'
import Navbar from './containers/Navbar/Navbar';
import Test from './containers/Test/Test';
import CustomerProfile from './components/CustomerProfile/CustomerProfile';
import CustomerForm from './containers/CustomerForm/CustomerForm';
import { v4 as uuid } from 'uuid';

function App() {
  const [token, setToken] = useState(localStorage.getItem('user'))

  console.log('inside app')

  return (
    <div className="App">
      <Router>
        {/* <Navbar/> */}
        <Routes>
          <Route exact path="/" element = { token !== null ? <Dashboard /> : <Signup setToken={setToken}/> } />
          <Route path="/Login" element = {<Login setToken={setToken}/>} />
          <Route path="/Signup" element = {<Signup setToken={setToken}/>} />
          <Route path='/test' element = { <Test /> } />
          <Route path='/CustomerProfile' element = { <CustomerProfile />} />
          <Route path='/CustomerForm' element = { <CustomerForm key={uuid()}/>} />
          <Route path='*' element={ <Navigate to="/" /> }/>
        </Routes>
      </Router>
    </div>
  )
}



// ReactDOM.render(<LoginContainer />, document.getElementById("root"));


// import Dashboard from './componentsv0.1/Dashboard/Dashboard'
// import Preferences from './componentsv0.1/Preferences/Preferences'
// import Login from './componentsv0.1/Login/Login'
// import useToken from './componentsv0.1/App/useToken';

// function App() {
//   const {token, setToken} = useToken()
  
//   if(!token){
//     return <Login setToken={setToken}/>
//   }

//   return (
//     <div className='wrapper'>
//       <h1>Applicaton</h1>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={null}/>
//           <Route path='/dashboard' element={<Dashboard/>}/>
//           <Route path='/preferences' exact element={<Preferences/>}/>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

export default App;
