import React from 'react';
import { useMatches } from "react-router-dom";


const Breadcrumbs = () => {
    const matches = useMatches()
    const crumbs = matches
        .filter((match) => Boolean(match.handle?.crumb))
        .map((match) => match.handle.crumb(match.data))

    return (
        <ol className="breadcrumb breadcrumb-dark bg-transparent navbar-breadcrumb">
            {crumbs.map((crumb, index) =>
                <li key={index} className="breadcrumb-item active fw-bold text-decoration-none" aria-current="page">{crumb}</li>
            )}
        </ol>

    );
};


export default Breadcrumbs;