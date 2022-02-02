import React from "react";
import './layout-auth.scss';
import { Outlet } from "react-router-dom";
import { ReactComponent as Logo } from './../../../../assets/images/logo.svg';

const LayoutAuth = () => {

    return (
        <div className="layout-auth">
            <div className="logo-container">
                <Logo className="logo" />
            </div>
            <div className="login-register-container">
                <Outlet /> {/* Renderiza la ruta hija que se encuentre activa */}
                <div className="text-credit">
                    <span>© 2020 Devs_united - <span className="text-pink">BETA</span></span>
                </div>
            </div>
        </div>
    )
}

export default LayoutAuth;