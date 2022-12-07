import axios from "axios";
import style from '../../styles/Produto.module.css'

export default function Product({product = {}}){
    return(
        <div className={style.product_conteiner}>
            <p>Product: {product.title}</p>
            <p>Product ID: {product.id}</p>
            <img src={product.image} className={style.img}/>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>Category: {product.category}</p>
            <p>★: {product.rating.rate}</p>
            <p>In Stock: {product.rating.count}</p>
        </div>
    )
}

export async function getStaticProps(context){
    const response = await axios.get(
        'https://fakestoreapi.com/products/' + context.params.id);
    const product = await response.data;
    return {
        props: {product}
    }
}

export async function getStaticPaths(){
    const response = await axios.get(
        'https://fakestoreapi.com/products'
    );
    const products = await response.data;
    const paths = products.map((product)=>{
        return {params: {id: String(product.id)}};
    });
    return{
        paths,
        fallback: true,
    }
}