import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import ProductDetails from "../components/Products/ProductDetails";
import SuggestedProduct from "../components/Products/SuggestedProduct";
import { useSelector } from "react-redux";
import { productData } from "../static/data";

const ProductDetailsPage = () => {
    const { allProducts } = useSelector((state) => state.products);
    const { allEvents } = useSelector((state) => state.events);
    // const { id } = useParams();
    const [searchParams] = useSearchParams();
    const eventData = searchParams.get("isEvent");

    const {name} = useParams()
    const [data, setData] = useState(null)
    const productName = name.replace(/-/g, " ")

    console.log(name)

    // useEffect(() => {
    //     // if (eventData !== null) {
    //     //     const data = allEvents && allEvents.find((i) => i._id === id);
    //     //     setData(data);
    //     // } else {
    //     //     const data = allProducts && allProducts.find((i) => i._id === id);
    //     //     setData(data);
    //     // }
    //     const data = productData.find((i) => i.name === productName)
    //     setData(data)
    // // }, [allProducts, allEvents]);
    // }, []);


    useEffect(() => {
        const data = allProducts && allProducts.find((i) => i.name === productName)
        setData(data)
    }, [])

    return (
        <div>
            <Header />
            <ProductDetails data={data} />
                {
                !eventData && (
                    <>
                    {data && <SuggestedProduct data={data} />}
                    </>
                )
                }
            <Footer />
        </div>
    );
};

export default ProductDetailsPage;
