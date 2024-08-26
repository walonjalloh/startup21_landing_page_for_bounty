import { product } from "../assets/asset"


function Products() {
  return (
    <section className="flex flex-col justify-center items-center mt-4">
        <div className="text-center text-[15px] bg-gradient-to-r from-red-400 to-blue-500 bg-clip-text text-transparent">Eductate Your Future</div>
        <h2 className="text-center mt-5 text-2xl font-bold">A better Way to learn</h2>
        <p className="text-center text-xl font-thin mt-4">Use our system to get a better education in programming, web development, blockchain technology
            and many more web3 things
        </p>
        <img src={product} alt='Products ShowCase' className="mt-4 "/>
    </section>
  )
}

export default Products