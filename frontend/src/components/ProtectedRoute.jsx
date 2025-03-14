// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const ProtectedRoute = ({ children }) => {
    const {  loginWithRedirect } = useAuth0();

    if (!localStorage.userStored) {
        loginWithRedirect();
        return null; // Optionally render a loading spinner
    }

    return children;
};

export default ProtectedRoute;
