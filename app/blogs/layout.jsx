import React from 'react';

const LayoutPage = ({children}) => {
    return (
        <div>
            <h1>fixed Layout porsion</h1>
             {children}

        </div>
    );
};

export default LayoutPage;