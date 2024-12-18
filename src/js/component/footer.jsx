import React from "react";

const Footer = () => {
    return (
        <footer className="bg-success-subtle text-dark text-center py-4" >
            <div className="container">
                <p> <small>Copyright &copy; adopciones.com {new Date().getFullYear()}</small></p> 
            </div>
        </footer>
    );
};

export default Footer;