import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import style from '../styles/Produtos.module.css'

export default function Products({products}){
    return(
        <div  className={style.products}>
            <h1>Lista de Produtos</h1>
            {products.map((product)=>(
                <div>
                    <Link href='/produto/[id]'as={`/produto/${product.id}`}>
                        <div className={style.products_conteiner}>
                            <p>Product: {product.title}</p>
                            <p>Product ID: {product.id}</p>
                            <img src={product.image} className={style.img} />
                            <p>{product.description}</p>
                            <p>${product.price}</p>
                            <p>Category: {product.category}</p>
                            <p>★: {product.rating.rate}</p>
                            <p>In Stock: {product.rating.count}</p>
                        </div>
                    </Link>
                </div>    
            ))}
        </div>
    )
}

export async function getStaticProps(context){
    const response = await axios.get(
        'https://fakestoreapi.com/products'
    );
    const data = await response.data;
    return{
        props: {products:data}
    }
}