import { useState } from 'react';
import { register } from '../services/authService';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await register({ name, email, password });
    if (res.token) {
      localStorage.setItem('token', res.token);
      navigate('/dashboard');
    } else setError(res.message);
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-dark fade-in">
      <div
        className="card shadow-sm p-4 w-45"
        style={{ minWidth: '400px' }}
      >
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            Register
          </button>
          {error && <p className="text-danger mt-2 text-center">{error}</p>}
        </form>
        <p className="mt-3 text-center text-muted">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
}
