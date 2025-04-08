import './App.css'
import {ChakraProvider} from '@chakra-ui/react'
import CreateNoteForm from './components/modules/createNoteForm'
import Note from './components/modules/note'
import FiltersAndSearch from './components/modules/filtersAndSearch'
import { useEffect, useState } from 'react'
import { FetchNotes, CreateNote } from './services/notes'

function App() {
  const [notes, setNotes] = useState([])
  const [filter, setFilter] = useState({
    search: "",
    sortItem: "date",
    sortOrder: "desc"
  })

  useEffect(() => {
    const fetchNotesAsync = async () => {
      let notesLines = await FetchNotes(filter)

      setNotes(notesLines)
    }

    fetchNotesAsync()
  }, [filter])

  const createNote = async (note) => {
    await CreateNote(note)
    
    let notesLines = await FetchNotes(filter)

    setNotes(notesLines)
  }

  return (
    <ChakraProvider>
      <section className='p-8 flex flex-row justify-start items-start gap-12'>
        <div className='flex flex-col w-1/3 gap-10'>
          <CreateNoteForm create={createNote}/>
          <FiltersAndSearch filter={filter} setFilter={setFilter}/>
        </div>
          <ul className='flex flex-col gap-5 w-1/2'>
            {notes.map((n) => (
              <li key={n.id}>
                <Note title={n.title} description={n.description} createdAt={n.createdAt}/>
              </li>
            ))}
          </ul>
      </section>
    </ChakraProvider>
  )
}

export default App
