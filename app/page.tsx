import Header from '@/components/Header/Header'
import { Main } from '@/components/Main/Main'

async function getProducts() {
  const response = await fetch(
    'https://greyball-ecommerce-default-rtdb.firebaseio.com/products.json'
  )
  const products = await response.json()
  console.log(products) //To print data in console, so that its a server side data
  return products || []
}

export default async function Home() {
  const products = await getProducts()

  return (
    <div className="">
      <Header />
      <Main products={products} />
    </div>
  )
}
