import React from 'react';

const ErrorFallback = ({ resetErrorBoundary }) => (
    <div>
        {/* TODO: improve this view */}
        There was an error!
        <button onClick={() => resetErrorBoundary()}>Try again</button>
    </div>
)

export default ErrorFallback;