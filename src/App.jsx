import { useEffect, useState } from 'react'
import './App.css'
import MainMenu from './components/MainMenu'
import DangerAlert from './components/DangerAlert'
import { Button } from "flowbite-react";


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

  console.log(characters)

  const filteredGryffindor = filtering
    ? characters.filter(character => character.hogwartsHouse.toLowerCase().includes('gryffindor'))
    : characters

    if(isLoading) return <div className='loader'></div>

    if(filteredGryffindor.length == 0) {
      return <DangerAlert>
        Cant Load Characters
        <a color='failure' className='text-3xl' href='/'>Reload</a>
      </DangerAlert>
    }

  return (
    <>
      <MainMenu />
      <main>
        <section>
          <div className='filter-menu'>
            <Button onClick={() => setFiltering(!filtering)}>{filtering ? 'No filtrar por Gryffindor' : 'Filtrar por Gryffindor'}</Button>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            {
              filteredGryffindor.map(singleCharacter => {
                return (
                <article className='characters shadow-md bg-slate-950 hover:bg-slate-800 transition-all rounded-md' key={singleCharacter.index}>
                  <figure className='rounded-md overflow-hidden'>
                    <img src={singleCharacter.image} alt={singleCharacter.fullName} loading='lazy' />
                  </figure>
                  <p className='amatic-sc-regular text-3xl'>{singleCharacter.fullName} - <small>({singleCharacter.nickname})</small></p>
                  <small className='text-xl'>{singleCharacter.hogwartsHouse}</small>
                </article>)
              })
            }
          </div>
        </section>
      </main>
    </>
  )
}

export default App
