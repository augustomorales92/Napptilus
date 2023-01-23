import React from 'react';
import { Link, useMatches } from "react-router-dom";


const Breadcrumbs = () => {
    const matches = useMatches()
    let crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) => match.handle.crumb(match.data))
    
    return (
                <ol className="breadcrumb breadcrumb-dark bg-transparent navbar-breadcrumb">
                    {crumbs.map((crumb, index, key) =>
                        index + 1 === crumbs.length ?
                            <li key={index} className="breadcrumb-item active" aria-current="page">{crumb}</li> :
                            <li key={key + index} className="breadcrumb-item active">
                                <Link to={crumb}>
                                    {crumb}
                                </Link>
                            </li>
                    )}
                </ol>

    );
};


export default Breadcrumbs;