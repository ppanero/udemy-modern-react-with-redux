import React from 'react';

import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector';
import { LanguageStore } from '../contexts/languageContext';
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
                <LanguageStore>
                    <LanguageSelector />
                    <ColorContext.Provider value={'red'}>
                        <UserCreate />
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        )
    }
}

export default App;