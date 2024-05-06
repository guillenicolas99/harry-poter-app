import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [characters, setCharacters] = useState([])
  const [filtering, setFiltering] = useState(false)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch("https://potterapi-fedeperin.vercel.app/es/characters")
    .then(res => res.json())
    .then(response => {
      const respuesta = response ? response : []
      setCharacters(respuesta)
    })
    .finally(() => setLoading(false))
  }, [])

  const filteredGryffindor = filtering
    ? characters.filter(character => character.hogwartsHouse.toLowerCase().includes('gryffindor'))
    : characters

    if(isLoading) return <div className="loader"></div>


    // if(filtering.length == 0) return <h2 className='loading'>Cant Load Characters...</h2>

  return (
    <>
    <section className='filter-menu'>
      <button onClick={() => setFiltering(!filtering)}>{filtering ? 'No filtrar por Gryffindor' : 'Filtrar por Gryffindor'}</button>
    </section>
      <h2>Total: {filteredGryffindor.length}</h2>
    <section className='row-characters'>
      {
        filteredGryffindor.map(singleCharacter => {
          return (
          <article className='characters' key={singleCharacter.index}>
            <img src={singleCharacter.image} alt={singleCharacter.fullName} loading='lazy' />
            <p>{singleCharacter.fullName} - <small>{singleCharacter.nickname}</small></p>
            <small>{singleCharacter.hogwartsHouse}</small>
          </article>)
        })
      }
    </section>
    </>
  )
}

export default App
