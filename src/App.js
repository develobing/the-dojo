import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

// styles
import './App.css';

// pages and components
import Dashboard from './pages/dashboard/Dashboard';
import Create from './pages/create/Create';
import Project from './pages/project/Project';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import OnlineUsers from './components/OnlineUsers';

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}

          <div className="container">
            <Navbar />

            <Routes>
              <Route
                path="/"
                element={
                  <>
                    {!user && <Navigate to="/login" />}
                    {user && <Dashboard />}
                  </>
                }
              />
              <Route
                path="/create"
                element={
                  <>
                    {!user && <Navigate to="/login" />}
                    {user && <Create />}
                  </>
                }
              />
              <Route
                path="/projects/:id"
                element={
                  <>
                    {!user && <Navigate to="/login" />}
                    {user && <Project />}
                  </>
                }
              />
              <Route
                path="/login"
                element={
                  <>
                    {user && <Navigate to="/" />}
                    {!user && <Login />}
                  </>
                }
              />
              <Route
                path="/signup"
                element={
                  <>
                    {user && <Navigate to="/" />}
                    {!user && <Signup />}
                  </>
                }
              />
            </Routes>
          </div>

          {user && <OnlineUsers />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;

/* pages

  - dashboard (homepage)
  - login
  - signup
  - create
  - project (project details)

*/
