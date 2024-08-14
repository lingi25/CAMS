import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EditUser.css'; 
import AdminSidebar from './AdminSidebar';

const EditUser = () => {
    const location = useLocation();
    const user = location.state;
    const [formData, setFormData] = useState({ ...user });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:9001/api/users/${user.id}`, formData)
            .then(() => navigate('/user-management'))
            .catch(error => console.error('Error updating user:', error));
    };

    return (
        <div className="edit-user">
            <AdminSidebar className="edit-admin-sidebar" />
            <div className="edit-user-content">
                <h1>Edit User</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    );
};

export default EditUser;
