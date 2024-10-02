import React from 'react';
import '../Pages/CSS/Account.css'; // Import the CSS file

const Account = () => {
    return (
        <div className="account-options">
            <button className="account-button">Change Email</button>
            <button className="account-button">Change Password</button>
            <button className="account-button">Change Contact Number</button>
            <button className="account-button">Add/Remove Card</button>
            <button className="account-button">View Orders</button>
            <button className="account-button">Track Orders</button>
        </div>
    );
};

export default Account;