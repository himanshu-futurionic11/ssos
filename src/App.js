import { Navigate, Route,  Routes } from 'react-router';
import ClientDetail from './components/Component/ClientDetail/ClientDetail';

import Login from './components/Form/LoginForm/Login';
import Dashboard from './components/Page/Dashboard/Dashboard';
import MainSite from './components/Page/MainSite/MainSite';




const  App=()=> {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/mainsite" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/mainsite" element={<MainSite />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/clientDetail' element={<ClientDetail/>} />
    </Routes>
  );
}

export default App;
