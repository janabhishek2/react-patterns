import React, { lazy, useEffect, useState } from 'react';
import Listing from './pages/Listing';
import Details from './pages/Details/Details';
import Cart from './pages/Cart';
import { useGetNetworkCall } from './network/useNetwork';
import ErrorBoundary from './pages/ErrorBoundary';

function Tutorial() {

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCartPage, setIsCartPage] = useState(false);

  const { data, isLoading } = useGetNetworkCall();
  
  useEffect(() => {
    if(data) {
      import("./helper").then((res) => {
        const { sayHello } = res;
        sayHello();
      });
    }
  }, [data]);

  const handleProductSelect = (prd) => {
    setSelectedProduct(prd);
  }

  const handleBack = () => {
    console.log("Back click");
  }

  return (<ErrorBoundary>
    {!selectedProduct && <Listing todos={data} isLoading={isLoading} onSelect={handleProductSelect}/>}
    {/* {selectedProduct && <Details onBack={handleBack}/>}
    { isCartPage && <Cart />} */}
  </ErrorBoundary>)
};

export default Tutorial;
