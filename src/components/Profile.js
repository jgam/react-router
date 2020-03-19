import React from 'react'

const data = {
    jgam:{
        name:'jimmy',
        description: 'jgam works at rakuten'
    },
    velopert:{
        name:'minjoon kim',
        description: 'god of react'
    }
};

function Profile({match}) {
    const { username } = match.params;
    const profile = data[username];

    if(!profile){
        return <div>users don't exist</div>
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    )
}

export default Profile;
