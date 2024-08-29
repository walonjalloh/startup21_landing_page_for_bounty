import Button from './Button'

function Hero() {
  return (
    <section>
        <div name="home" className="bg-hero-image bg-cover bg-no-repeat bg-center w-full h-[600px] items-center justify-center">
            <div className="text-center">
                <h1 className="pt-[200px] text-blue-600 font-extrabold text-center text-6xl md:text-10xl lg:text-[150px]">Learn X</h1>
                <p className="mt-10 text-blue-600 text-center  text-3xl md:text-4xl lg:6xl font-extrabold">Experience World-Class Education from industry experts. Gain the skills you need to succed</p>
            </div>
            <div className='flex justify-center gap-5 md:gap-[50px] text-xl md:text-2xl lg:gap-[80px] lg:text-3xl mt-12 font-bold  text-white'>
                <Button name='Learn More' classname='bg-black px-2 py-2 rounded-md'/>            </div>
        </div>
    </section>
  )
}

export default Hero