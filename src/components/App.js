import React, {useState} from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
    const [resource, setResource] = useState('posts');

    const setResourceToPosts = () => setResource('posts');
    const setResourceToTodos = () => setResource('todos');

    return (
        <div>
            <UserList user={'users'}></UserList>
            <div>
                <button onClick={setResourceToPosts}>Posts</button>
                <button onClick={setResourceToTodos}>Todos</button>
            </div>
            <ResourceList resource={resource}></ResourceList>
        </div>
    );
}

export default App;