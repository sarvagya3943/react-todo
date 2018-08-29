import React from 'react'

const Link = ({ onClick , active , children }) => (
    <button className="btn"
        onClick={onClick}
        disabled={active}>
        {children}
    </button>
) ;

export default Link ;
