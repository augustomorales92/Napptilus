import React from 'react';

const ErrorFallback = ({ resetErrorBoundary }) => (
    <div>
        There was an error!
        <button onClick={() => resetErrorBoundary()}>Try again</button>
    </div>
)

export default ErrorFallback;