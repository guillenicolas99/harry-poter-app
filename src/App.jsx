import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [characters, setCharacters] = useState([])
  const [charactersLength, setCharactersLength] = useState(0)
  const [gryffindor, setGryffindor] = useState(null)
  const [filtering, setFiltering] = useState('')
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch("https://potterapi-fedeperin.vercel.app/es/characters")
    .then(res => res.json())
    .then(response => {
      const respuesta = response ? response : []
      setCharacters(respuesta)
      setCharactersLength(respuesta.length)
    })
    .finally(() => setLoading(false))
  }, [])

  const toggleHouse = () => {
    setGryffindor(gryffindor => !gryffindor)
    const isGryffindor = gryffindor ? 'gryffindor' : null
    setFiltering(isGryffindor)
  }

  const filteredGryffindor = filtering != null
    ? characters.filter(character => character.hogwartsHouse.toLowerCase().includes(filtering.toLowerCase()))
    : characters

    if(isLoading) return <h2 className='loading'>LOADING...</h2>

  return (
    <>
    <section className='filter-menu'>
      <button onClick={toggleHouse}>{gryffindor ? 'No filtrar por Gryffindor' : 'Filtrar por Gryffindor'}</button>
    </section>
      <h2>Total: {filteredGryffindor.length}</h2>
    <section className='row-characters'>
      {
        filteredGryffindor.map(singleCharacter => {
          return (
          <article className='characters' key={singleCharacter.index}>
            <img src={singleCharacter.image} alt={singleCharacter.fullName} />
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
