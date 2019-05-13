import React from 'react';

import UserCreate from './UserCreate';
import LanguageContext from '../contexts/languageContext';
import ColorContext from '../contexts/colorContext';

class App extends React.Component {

    state = { language: 'english' }

    onLanguageChange = language => {
        // Abbreviated since the key and value are the same
        this.setState({ language })
    }

    render() {
        return (
            <div className="ui container">
                <div>
                    Select a language:
                    <i 
                        className="flag us" 
                        onClick={ () => this.onLanguageChange('english')}
                    />
                    <i 
                        className="flag es" 
                        onClick={ () => this.onLanguageChange('spanish')}
                    />
                </div>
                <LanguageContext.Provider value={ this.state }>
                    <ColorContext.Provider value={'red'}>
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageContext.Provider>
            </div>
        )
    }
}

export default App;