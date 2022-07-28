import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import HomePage from "./components/Home";
import AdminPanel from "./components/Admin/adminPanel";
import Login from "./components/Login";
import EditCodes from "./components/Admin/editCodes";
import Upn from "./components/UPN/UpnForm";
import Generator from "./components/UPN/Generator"
import Register from "./components/Register";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/admin" element={<AdminPanel/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/admin/editCodes" element={<EditCodes/>}/>
                <Route path="/generate/show" element={<Upn/>}/>
                <Route path="/generate/test" element={<Generator/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter