import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const login = createAsyncThunk('user/login', async({rejectWithValue})=>{
    try{
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
    
        const { data } = await axios.post(
            'http://127.0.0.1:8000//api/user/login/',
            { 'username': email, 'password': password },
            config
        )
        localStorage.setItem(`userInfo`, JSON.stringify(data))
        return data

    }catch (error){
        return rejectWithValue(error.message)


    }
  

})

export const logout = () => async ()=>{
    localStorage.removeItem('userInfo')
    


}
