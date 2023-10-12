import React from 'react';
import './Pagination.css';
import { useSelector } from 'react-redux';

const Button = ({ pageno }) => {
    // Get the selected page index from Redux state
    const { index } = useSelector((state) => state.index);

    return (
        <div>
            {/* Add a class "active-button" to the button if it matches the selected page index  so we can make it look different from other buttons*/}
            <div className={`${index / 3 + 1 === pageno ? 'active-button' : ''} page-button center`}>
                {pageno}
            </div>
        </div>
    );
};

export default Button;
