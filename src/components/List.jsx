import cardInfo from '../components/data'
import CardInfo from '../components/data'


function List() {
    const filter = cardInfo.filter((card) => card.IQ != 150)

    const data2 = filter.map((card) => 
        <li key={card.key}>{card.IQ}{card.age}</li>
    )

    const data = CardInfo.map((card) =>
        <div className='py-4' key={card.key}><h1>{card.name}</h1>
            <p>{card.course}</p>
            <p>{card.IQ}</p>
        </div>
    )
   

  return (
    <ul className='sm:items-center my-10 py-5 md:flex justify-center gap-40'>
       {data}
       {data2} 
    </ul>
  )
}

export default List