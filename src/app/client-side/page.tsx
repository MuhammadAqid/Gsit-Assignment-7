"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

type Product = {
    id: number;
    title: string;
    image: any;
    price: number;
    description: string;
};

const ProductsPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unknown error occurred");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <p className="flex items-center justify-center h-screen text-xl font-bold">Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl border-b-4 border-black text-black font-bold pb-1 mb-9">Client Side (CSR)</h1>
            <p className='text-xs md:text-base p-2 border-2 border-orange-500 rounded-[5px]'><strong className='text-red-500'>Note:</strong> Client-side rendering (CSR) is a web development technique in which the browser (client)
             is responsible for rendering the content of a web page. In this model, when a user requests a web page, the server sends the necessary HTML,
             JavaScript, and CSS files to the browser.</p>
            <ul className="space-y-8 p-4 w-96">
                {products.map((product: Product) => (
                    <li
                        key={product.id}
                        className="p-4 bg-white shadow-md rounded-lg text-gray-700"
                    >
                        <div className="w-full flex justify-center m-2">
                        <Image src={product.image} alt="product image" className="w-40 h-auto"/>
                        </div>
                        <h2 className="text-xl font-semibold my-2">{product.title}</h2>
                        <p>{product.description}</p>
                        <p className="text-lg font-medium my-2 text-orange-500">${product.price}</p>
                    </li>
                ))}
            </ul>
            <div className='m-4' ><Link href="/" className="bg-orange-400 text-white  p-2 rounded-[5px] text-center font-semibold hover:bg-orange-500">Back</Link></div>
        </div>
    );
};

export default ProductsPage;