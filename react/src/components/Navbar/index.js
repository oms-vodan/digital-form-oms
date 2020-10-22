import React from 'react';
import './styles.css';

import { Button } from '@material-ui/core';

const styles = {
    Button: {
      color: 'white'
    }
};

function Navbar({ onSubmit }) {

    return (
        <nav>
            <div className="navContent">
                <h1>Formulário OMS</h1>
                <div className="rightItems">
                    <p>Acesso como <b>Fulano da Silva</b></p>
                    <Button style={styles.Button}>SAIR</Button>
                </div>
                
            </div>
        </nav>
    );
}

export default Navbar;