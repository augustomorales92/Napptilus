import React from 'react';

const ErrorModal = () => {
    return (
        <div className="alert alert-danger d-flex justify-content-center flex-column" role="alert" style={{ margin: 'auto',
            position: 'absolute',
            top: 200, left: 100, bottom: 200, right: 100}}>
        <h4 className="alert-heading">Error!</h4>
        <hr />
        <p>¡Oops! Algo salió mal, por favor recargue la pagina e intente nuevamente.</p>
      </div>
        
    );
};

export default ErrorModal;