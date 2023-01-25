import React from 'react';
import TableBody from './TableBody';

const Table = ({ product }) => {
    return (
        <table className="table table-bordered table-dark mt-4 white-shadow">
            <thead>
                <tr>
                    <th colSpan={2}>Description</th>
                </tr>
            </thead>
            <tbody>
                <TableBody property={'brand'} value={product?.brand} />
                <TableBody property={'model'} value={product?.model} />
                <TableBody property={'price'} value={`$${product?.price}`} />
                <TableBody property={'cpu'} value={product?.cpu} />
                <TableBody property={'ram'} value={product?.ram} />
                <TableBody property={'os'} value={product?.os} />
                <TableBody property={'brand'} value={product?.displayResolution} />
                <TableBody property={'battery'} value={product?.battery} />
                <TableBody property={'camera'} value={Array.isArray(product?.primaryCamera) && product?.primaryCamera?.length ? product?.primaryCamera?.join(' ') : product?.primaryCamera} />
                <TableBody property={'frontal camera'} value={product?.secondaryCmera} />
                <TableBody property={'dimentions'} value={product?.dimentions} />
                <TableBody property={'weight'} value={product?.weight} />
            </tbody>
        </table>
    );
};

export default Table;