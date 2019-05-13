import React from 'react';

import LanguageContext from '../contexts/languageContext';
import ColorContext from '../contexts/colorContext';

class Button extends React.Component {

    renderSubmit(value) {
        return value.language === 'english'? 'Submit' : 'Enviar'
    }

    renderButton(color) {
        console.log(color)
        return(
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {(value) => this.renderSubmit(value) }
                </LanguageContext.Consumer>
            </button>
        )
    }

    render() {
        return (
            <ColorContext.Consumer>
                {color => this.renderButton(color)}
            </ColorContext.Consumer>
        );
    }
}

export default Button;