import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout
import { LayoutAuth } from './layouts/LayoutAuth';
import { LayoutAdmin } from './layouts/LayoutAdmin';

// Pages
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';

// Pages admin
import { Home } from './pages/admin/Home';
import { Error404 } from './pages/Error404';
import { Chat } from './pages/admin/Chat';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<LayoutAuth />}>
          <Route index element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
        <Route path='/' element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path='chat' element={<Chat />} />
        </Route>
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
