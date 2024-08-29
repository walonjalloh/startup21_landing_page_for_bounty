import product from '../assets/product.png'

function Products() {
  return (
    <section name='services' className="flex flex-col justify-center items-center py-24">
        <div className="text-center text-[15px] bg-gradient-to-r from-red-400 to-blue-500 bg-clip-text text-transparent border my-4 border-black/50 px-2 rounded hover:scale-125">Eductate Your Future</div>
        <h2 className="text-center mt-5 text-2xl font-bold hover:scale-125">A better Way to learn</h2>
        <p className="text-center text-xl font-thin my-6 mx-auto max-w-[540px]">Use our system to get a better education in programming, web development, blockchain technology
            and many more web3 things
        </p>
        <img src={product} alt='Products ShowCase' className="mt-10 mb-10 mx-2 "/>
    </section>
  )
}

export default Products