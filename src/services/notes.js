import axios from "axios"

export const FetchNotes = async (filter) => {
    try{
        var response = await axios.get('https://localhost:7227/api/Notes', {
            params:{
                search: filter?.search,
                sortItem: filter?.sortItem,
                sortOrder: filter?.sortOrder
            }
        })
        
        return response.data.notes
    }
    catch(e){
        console.error(e)
    }

}

 export const CreateNote = async (note) => {
    try{
        var response = await axios.post('https://localhost:7227/api/Notes', note)
        
        return response.status
    }
    catch(e){
        console.error(e)
    }

}