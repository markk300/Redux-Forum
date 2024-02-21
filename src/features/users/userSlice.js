import { createSlice } from "@reduxjs/toolkit"
const initialState = [
    {id: '0',name:''},
    {id: '1',name:'Suparman'},
    {id: '2',name:'Batman'},
]

export const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{

    }
})

export const selectAllUsers = (state)=>state.users
export default userSlice.reducer;