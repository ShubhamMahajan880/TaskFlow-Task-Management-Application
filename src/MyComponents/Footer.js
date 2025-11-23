import React from 'react'

export const Footer = () => {
    let footerStyle = {

        top: "100vh",
        width: "100%",

    }

    return (
        <footer className="bg-dark text-light py-3" style={footerStyle}>
            <p className='text-center'>Copyright &copy; Shubham'sTodoList.com</p>

        </footer>
    )
}

export default Footer;
