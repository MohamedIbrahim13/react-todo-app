import React from 'react';

const Rainbow =(WrappedComponent)=>{
    const colors =['green','blue','grey','orange'];
    const randomColors = colors[Math.floor(Math.random()*3)];
    const className = randomColors + '-text';
    return (props)=>{
        return (
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
};

export default Rainbow