import { useState } from 'react'

const endPoint = 'https://rickandmortyapi.com/api/character/';

export async function getServerSideProps() {
  const res = await fetch(endPoint)
  const data = await res.json()

  return {
    props: {
      data
    },
  }
}


export default function Home({data}) {
  const { info, results: defaultResults = [] } = data;
  const [results, updateResults ] = useState(defaultResults)
  const [page, updatePages ] = useState({
    ...info,
    current: defaultResults
  })

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__container__title">
          <p>Rick and morty characters</p>
        </div>
        <div className="home__container__info">
          <p>OK</p>
        </div>
        <div className="home__container__cards">
          {results.map(result => {
            const {id, name, image} = result;
            return (
              <div key={id} className="home__container__cards__character">
                <img src={image}/>
                <div className="home__container__cards__character__name">
                  <p>{name}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
