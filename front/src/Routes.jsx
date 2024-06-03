import React from "react";
import { Routes, Route } from "react-router-dom";

// Importação das páginas
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const AppRoutes = () => {
    return (

        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>

    );
};

export default AppRoutes;
