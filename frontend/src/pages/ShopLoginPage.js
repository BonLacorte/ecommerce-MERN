import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ShopLogin from '../components/Shop/ShopLogin';

const ShopLoginPage = () => {
    const navigate = useNavigate();
    // const { isSeller,isLoading } = useSelector((state) => state.seller);
    const { isSeller,seller } = useSelector((state) => state.seller);

    useEffect(() => {
        if(isSeller === true){
            // navigate(`/dashboard`);
            navigate(`/shop/${seller._id}`);
        }
    // }, [isLoading,isSeller])
    }, [])

    return (
        <div className='w-full h-screen'>
            <ShopLogin />
            {/* <h1>Hello</h1> */}
        </div>
    )
}

export default ShopLoginPage