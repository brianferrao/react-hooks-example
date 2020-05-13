import React from 'react';
import useResource from '../useResource';

const ResourceList = ({resource}) => {    

    const resources = useResource(resource);

    return (
        <div>
            <ul>{resources.map(item => <li key={item.id}>{item.title}</li>)}</ul>
        </div>
        );
}

export default ResourceList;