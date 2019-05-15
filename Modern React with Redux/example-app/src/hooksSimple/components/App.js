import React, { useState } from 'react';

import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
    
    // This sintax will assign the first two elements of the
    // array ``useState`` to ``resource`` (the first) and
    // to ``setResource`` the second one.
    // Previous knowledge of which position in the array takes
    // the needed functions is required.
    const [resource, setResource] = useState('posts')

    return (
        <div>
            <UserList />
            <div>
                <button
                    onClick={ () => setResource('posts')}
                >Posts</button>
                <button
                    onClick={ () => setResource('todos')}
                >Todos</button>
            </div>
            <ResourceList resource={ resource }/>
        </div>
    );

}

export default App;