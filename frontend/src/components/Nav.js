import { useNavigate } from 'react-router-dom';
import { logout } from '../services/authService';

export default function Nav() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/dashboard">My Dashboard</a>
        <button className="btn btn-outline-light" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}
