import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useState } from 'react';
// Importacion de componentes
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Buttons from './components/buttons/buttons'

import Login from './containers/login/login'
import Logout from './containers/logout/logout'
import Home from './containers/home/home'
import Profile from './containers/profile/profile'
import Register from './containers/register/register'
import GetUserAppointment from './containers/getuserappointment/getuserappointment'
import GetAppointments from './containers/getappointments/getappointments'

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className='dentalApp'>
      <div className='container'>
        <BrowserRouter>
          <Header />
          <Buttons user={user} setUser={setUser}/>
          <Switch className='switchContainer'>
            <Route path='/' exact component={Home} />
            {/*<Route path='/login' exact component={Login} />*/}
            <Route path="/login" children={<Login user={user} setUser={setUser}/>} exact/>
            <Route path='/profile' exact component={Profile} />
            <Route path='/register' exact component={Register} />
            <Route path='/getappointments' exact component={GetAppointments}/>
            <Route path='/getmyappointments' exact component={GetUserAppointment} />
            <Route path='/logout' children={<Logout user={user} setUser={setUser}/>} exact />
          </Switch>
          <Footer className='footerContainer'/>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
