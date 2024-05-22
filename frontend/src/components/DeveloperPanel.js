import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DeveloperPanel() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch all user details (students, admins)
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://your-backend-api.com/developer/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://your-backend-api.com/developer/reset-password', { email, newPassword });
      setMessage('Password reset successfully.');
    } catch (error) {
      setMessage('Error resetting password.');
    }
  };

  return (
    <div className="container">
      <h2>Developer Panel</h2>
      {message && <div className="alert alert-info" role="alert">{message}</div>}
      <h3>User List</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Online Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.online ? 'Online' : 'Offline'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Reset User Password</h3>
      <form onSubmit={handleResetPassword}>
        <div className="form-group">
          <label htmlFor="email">User Email</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="newPassword">New Password</label>
          <input type="password" className="form-control" id="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Reset Password</button>
      </form>
      <a href="mailto:ungraduate1394@duck.com" className="btn btn-secondary mt-3">Contact Developer</a>
    </div>
  );
}

export default DeveloperPanel;
