import React, { useState, useCallback } from 'react';
import { useQuery } from 'react-query';
import LoadingSpinner from './pages/LoadingSpinner';
import Card from './pages/Card';
import Error from './pages/Error';
import SearchBar from './pages/SearchBar';
import { getAllData } from '../api/fetch';


const ProductListPage = () => {
  const { data: products, error, isLoading } = useQuery(['phones'], getAllData)
  const [search, setSearch] = useState('')

  const filteredProduct = useCallback(() => {
    return products.filter(({ model, brand }) => [model, brand].some(e => e.toLowerCase().includes(search.toLowerCase())))
  }, [products, search])

  if (error) {
    return <Error />
  }
  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <div>
      <div className="container text-center">
        <SearchBar search={search} setSearch={setSearch} />
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
          {products.length && filteredProduct()?.map(({ id, brand, imgUrl, model, price }) => {
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