import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from '../utils/LoadingSpinner';
import Card from '../utils/Card';
import Error from '../utils/Error';
import SearchBar from '../utils/SearchBar';
import { getAllData } from '../api/fetch';
import usePersistentCart from '../hooks/UsePersistCart';


const ProductListPage = () => {
  const { data: products, error, isLoading } = useQuery(['phones'], getAllData)
  const [search, setSearch] = useState('')
  const [value] = usePersistentCart('cart-items');

  useEffect(()=> {
    if(value === null) alert('timeOff')
  },[value])

  if (error) {
    return <Error />
  }
  if (isLoading) {
    return <LoadingSpinner />
  }
  const filteredProduct = (products)=>{
    return products.filter(({model,brand}) => [model,brand].some(e => e.toLowerCase().includes(search.toLowerCase())))
  }

  return (
    <div>
      <div className="container text-center">
        <div className='mt-4'>
          <SearchBar search={search} setSearch={setSearch} />
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
          {products && filteredProduct(products)?.map(({ id, brand, imgUrl, model, price }) => {
            return (
              <Card key={id} id={id} model={model} brand={brand} price={price} imgUrl={imgUrl} />
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;