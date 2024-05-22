import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AdminPanel() {
  const [students, setStudents] = useState([]);
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch student details
    const fetchStudents = async () => {
      try {
        const response = await axios.get('https://your-backend-api.com/admin/students');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching student details:', error);
      }
    };
    fetchStudents();
  }, []);

  const handleBlock = async (studentId) => {
    try {
      await axios.post(`https://your-backend-api.com/admin/block/${studentId}`);
      setMessage('Student has been blocked.');
    } catch (error) {
      setMessage('Error blocking student.');
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://your-backend-api.com/admin/reset-password', { email, newPassword });
      setMessage('Password reset successfully.');
    } catch (error) {
      setMessage('Error resetting password.');
    }
  };

  return (
    <div className="container">
      <h2>Admin Panel</h2>
      {message && <div className="alert alert-info" role="alert">{message}</div>}
      <h3>Student List</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll Number</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.rollNumber}</td>
              <td>{student.department}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleBlock(student.id)}>Block</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Reset Student Password</h3>
      <form onSubmit={handleResetPassword}>
        <div className="form-group">
          <label htmlFor="email">Student Email</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="newPassword">New Password</label>
          <input type="password" className="form-control" id="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Reset Password</button>
      </form>
    </div>
  );
}

export default AdminPanel;
