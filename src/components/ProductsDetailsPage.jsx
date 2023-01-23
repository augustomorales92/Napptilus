import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useParams } from "react-router-dom";
import usePersistentCart from '../hooks/UsePersistCart'
import LoadingSpinner from '../utils/LoadingSpinner';
import Error from '../utils/Error';
import TableBody from '../utils/Table';
import { setCartItemsNumber } from '../helpers/helpers';
import { getDataById } from '../api/fetch';


const ProductsDetailsPage = () => {
    const params = useParams();
    const [productCart, setProductCart] = useState({ id: '', colorCode: '', storageCode: '' })
    const [value, setValue] = usePersistentCart('cart-items');
    const { data: product, error, isLoading, status } = useQuery(['phones', params?.id], () => getDataById(params?.id))

    useEffect(() => {
        if (status === 'success') {
            const { id, options } = product

            const colorCode = String(Array.isArray(options.colors) ? options.colors[0].code : options.colors.code)
            const storageCode = String(Array.isArray(options.storages) ? options.storages[0].code : options.storages.code)

            setProductCart({
                id,
                colorCode,
                storageCode

            })
        }
    }, [status, product]);

    const changeColor = (e) => {
        const color = e.target.value
        setProductCart({ ...productCart, colorCode: color })
    }
    const changeStorage = (e) => {
        const storage = e.target.value
        setProductCart({ ...productCart, storageCode: storage })
    }

    if (error) {
        return <Error />
    }
    if (isLoading) {
        return <LoadingSpinner />
    }
    return (
        <div className="container mt-4">
            <div className="row row-cols-1">
                <div className="card text-bg-dark cardMobile">
                    <div className="col" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={product?.imgUrl} className="img-thumbnail" alt='image' style={{ height: '80%', width: 'auto' }} />
                    </div>
                    <div className="col mx-auto table-responsive m-4 table-responsive-{sm | md | lg | xl | xxl}">
                        <table className="table table-bordered table-dark">
                            <thead>
                                <tr>
                                    <th colSpan={2}>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TableBody property={'brand'} value={product?.brand} />
                                <TableBody property={'model'} value={product?.model} />
                                <TableBody property={'price'} value={product?.price} />
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
                        <div className="d-flex justify-content-around align-items-center">
                            <select className="form-select " style={{ width: '12rem' }} aria-label="Floating label select example" onChange={changeColor}>
                                {product?.options?.colors?.map((color, index) =>
                                    <option key={index} value={color.code}  >{color.name}</option>
                                )}
                            </select>
                            <select className="form-select " style={{ width: '12rem' }} aria-label="Floating label select example" onChange={changeStorage}>
                                {product?.options?.storages?.map((storage, index) =>
                                    <option key={index} value={storage.code}>{storage.name}</option>
                                )}
                            </select>
                        </div>
                        <button type="button" className="btn btn-secondary mt-4 mw-100" onClick={async () => await setCartItemsNumber(productCart, value, setValue)}>Add to cart</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductsDetailsPage;