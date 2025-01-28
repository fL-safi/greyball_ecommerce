
'use client'
import CartsModal from '../Products/CartsModal'
import Products from '../Products/Products'
import Footer from './Footer'
import Hero from './Hero'

export const Main = ({ products }: { products: any[] }) => {
  return (
    <div className='px-4 sm:px-6 md:px-8 lg:px-10 lg:mx-10 mx-auto'>
      <Hero />
      <Products products={products} />
      <CartsModal />
      <Footer />
    </div>
  )
}