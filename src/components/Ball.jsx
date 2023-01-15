import React, { memo } from 'react';

function Ball({ type, value, onClick }) {
    return (
        <div className={`ball-${type}`} style={{backgroundColor: value}} onClick={onClick}></div>
    );
}

// * Memoize cell as there will be alot of it in the grid
export default memo(Ball);
