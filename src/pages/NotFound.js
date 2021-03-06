import React, { Fragment } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const NotFound = () =>{

    const styleText = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
        paddingTop: "2em"
    }

    return (
        <Fragment>       
            <Header />
            <h1 style={styleText}>Página Não Encontrada</h1>
            <Footer />
        </Fragment>
    );
}
export default NotFound;