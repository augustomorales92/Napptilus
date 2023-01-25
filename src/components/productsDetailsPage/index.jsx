import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import usePersistentCart from '../../hooks/UsePersistCart'
import LoadingSpinner from '../pages/LoadingSpinner';
import Error from '../pages/Error';
import { setCartItems } from '../../utils/setCartItems';
import { getDataById } from '../../api/fetch';
import { ArrowLeft, ShoppingCart } from '../pages/Icons';
import { warnToast, successToast } from '../../utils/toasts';
import Table from './Table';


const ProductsDetailsPage = () => {
    const params = useParams();
    const navigate = useNavigate()
    const [productCart, setProductCart] = useState({ id: '', colorCode: '', storageCode: '' })
    const [value, setValue] = usePersistentCart('cart-items');
    const { data: product, error, isLoading, status } = useQuery(['phones', params?.id], () => getDataById(params?.id))

    const addToCart = async () => {
        const activeCart = await setCartItems(productCart, value, setValue)
        if (activeCart === 'expired') {
            warnToast('cart expired!')
        } else {
            successToast('product added to cart!')
        }
    }

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
            <div className="row row-cols-1 table-responsive m-4 table-responsive-{sm | md | lg | xl | xxl}">
                <div className="card text-bg-dark cardMobile">
                    <div className="col" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={product?.imgUrl} className="img-thumbnail white-shadow" alt='img' style={{ height: '80%', width: 'auto' }} />
                    </div>
                    <div className="col mx-auto ">
                        <Table product={product} />
                        <div className="d-flex justify-content-around align-items-center">
                            <select className="form-select rem-12" aria-label="Floating label select example" onChange={changeColor}>
                                {product?.options?.colors?.map((color, index) =>
                                    <option key={index} value={color.code}  >{color.name}</option>
                                )}
                            </select>
                            <select className="form-select rem-12" aria-label="Floating label select example" onChange={changeStorage}>
                                {product?.options?.storages?.map((storage, index) =>
                                    <option key={index} value={storage.code}>{storage.name}</option>
                                )}
                            </select>
                        </div>
                        <div className='d-flex justify-content-around align-items-center'>
                            <button className=" d-flex justify-content-around btn btn-outline-light mt-4 mw-100 mb-4 rem-12 back-home " onClick={() => navigate('/')}>
                                <ArrowLeft /> Back to Home
                            </button>
                            <button type="button" className="d-flex justify-content-around btn btn-outline-success mt-4 mw-100 mb-4 rem-12 " onClick={addToCart}> Add to cart <ShoppingCart /> </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default ProductsDetailsPage;