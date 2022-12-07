import Head from 'next/head';
import style from '../styles/Home.module.css'

export default function Loja(){
  return(
    <div className={style.home}>
      <Head>
        <title>Loja De Produtos</title>
      </Head>
      <div>
        <h1>Loja de Produtos</h1>
      </div>
      <div>
        <a href='/produtos' className={style.link}>Confira nossos Produtos</a>
      </div>
    </div>
  )
}