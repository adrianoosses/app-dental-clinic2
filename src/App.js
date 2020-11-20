import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Importacion de componentes
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Buttons from './components/buttons/buttons'

//
import Login from './containers/login/login'
import Home from './containers/home/home'
import Profile from './containers/profile/profile'
import Register from './containers/register/register'
//import GetAppointments from './containers/getusers/getusers'
import GetUserAppointment from './containers/getuserappointment/getuserappointment'
import GetAppointments from './containers/getappointments/getappointments'

function App() {
  return (
    <div className='dentalApp'>
      <div className='container'>
        <BrowserRouter>
          <Header/>
          <Buttons/>
          <Switch className='switchContainer'>
            <Route path='/' exact component={Home} />
            <Route path='/login' exact component={Login} />
            <Route path='/profile' exact component={Profile} />
            <Route path='/register' exact component={Register} />
            <Route path='/getappointments' exact component={GetAppointments}/>
            <Route path='/getmyappointments' exact component={GetUserAppointment} />

          </Switch>
          <Footer className='footerContainer'/>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
