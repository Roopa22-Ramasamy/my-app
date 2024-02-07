import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Login from './Login';
import Signup from './Signup';
import Chat from './Chat';


export default function Router() {
    return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Login/>}>Login</Route>
            <Route path='signup' element={<Signup/>}>Signup</Route>
            <Route path = 'chat' element = {<Chat/>}>Chat</Route>
            
            
        </Routes> 
      </BrowserRouter>
    )
}
