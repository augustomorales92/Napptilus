import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center spinnerPosition">
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default LoadingSpinner
