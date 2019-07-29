import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = (props) => {
    return (
        <div>
            Welcome to the dashboard!
            <Link onClick={() => {
                localStorage.removeItem('token');
            }} to="/">Logout</Link>
        </div>
    )
}

export default Dashboard;