import { Button, Input, Textarea } from '@chakra-ui/react'
import { useState } from 'react'

const CreateNoteForm = ({create}) => {
    const [note, setNote] = useState(null)

    const SubmitCreation = (e) => {
        e.preventDefault()
        create(note)
        setNote(null)
    }

    return (
        <form onSubmit={SubmitCreation}
        className='w-full flex flex-col gap-3 items-center'>
            <h3 className='font-bold text-xl'>Создание заметки</h3>
            <Input 
                placeholder='Название' 
                onChange={(e) => {setNote({...note, title: e.target.value})}}
                value={note?.title?? ""}
            />
            <Textarea 
                placeholder='Описание' 
                onChange={(e) => {setNote({...note, description: e.target.value})}}
                value={note?.description?? ""}
            />
            <Button type='submit' colorScheme='teal' className='w-full'>Создать</Button>
        </form>
    )
}

export default CreateNoteForm