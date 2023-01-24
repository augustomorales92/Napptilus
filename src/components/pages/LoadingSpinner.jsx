import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="d-flex justify-content-center" style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
            <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default LoadingSpinner