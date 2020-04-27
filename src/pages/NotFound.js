import React from 'react';
import Menu from '../components/principal-content/menu/Menu';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return(
        <div style={{minHeight: '100vh'}} className="principal-content">
            <Menu />
            <div style={{
                display: 'flex',
                height: '200px',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
            }} className="not-found-text">
                <h1 style={{marginTop: '1.5rem'}}>404 PAGE NOT FOUND</h1>
                <div style={{marginTop: '1.5rem'}} className="secondary-button">
                    <Link style={{fontSize: '1.2rem'}} to="/" >Volver</Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;