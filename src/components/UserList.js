import React from 'react';
import useResource from '../useResource';

const UserList = ({user}) => {    

    const resources = useResource(user);

    return (
        <div>
            <ul>{resources.map(item => <li key={item.id}>{item.name}</li>)}</ul>
        </div>
        );
}

export default UserList;