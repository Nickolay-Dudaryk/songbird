import React from 'react';

import './footer.css';

const Footer = () => {
    return (
        <div className="footer mb-3">
            <button type="button" className="btn btn-secondary btn-block" disabled>Next level</button>
        </div>
    )
}

// if wrong answer - btn btn-secondary - and nothing on click
// if correct answer - btn btn-success - and go to the next level

export default Footer;
