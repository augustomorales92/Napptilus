import React from 'react';

const TableBody = ({ property, value }) => {
    return (
        <tr>
            <th scope="row">{property}</th>
            <td> {value}</td>
        </tr>
    )
};

export default TableBody;