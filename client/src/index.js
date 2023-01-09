import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Component/Login";
import Map from "./Component/Map";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>}>
            <Route index element={<Login/>}/>
            <Route path="map" element={<Map/>}/>
        </Route>
    </Routes>
</BrowserRouter>
);