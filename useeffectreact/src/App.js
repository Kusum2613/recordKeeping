
import Header from './components/Header'
import "./App.css"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import { useState } from 'react'


import DeleteIcon from '@mui/icons-material/Delete';





function App() {

const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [data,setData]=useState([])
const addData=()=>{
  setData([...data, {
    name,email
  }])
  //spread operator
  setName("")
  setEmail("")
}
const removeItem=(index)=>{
  let arr =data
  arr.splice(index,1)
  setData([...arr])
}

  return (
   
    <div className='App'>
      <Header/>
    <div className='form'>
    <Stack spacing={2} direction="row" alignItems="center">
   
     
    <TextField value={name}  onChange={(e)=>setName(e.target.value)} id="outlined-basic" label="Name" variant="outlined" />
    <TextField value={email} onChange={(e)=>setEmail(e.target.value)} id="outlined-basic" label="Email" variant="outlined" />
    <Button onClick={addData}  color="success" variant="contained"><AddIcon  /></Button>
    </Stack>
    </div>

    <div className='datashow'>
    <div className='dataval'>
      <h4>Name</h4>
      <h4>Email</h4>
      <h4>Remove</h4>
    </div>
    {
        data.map((element,index)=>{
            return(
              <div className='dataval'>
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <h4> <Button onClick={()=>removeItem(index)} variant="contained" color="error">
              <DeleteIcon></DeleteIcon>
              </Button></h4>
            </div>
                
            )
        })
    }
    </div>
    
    </div>
     
   

  )
}

export default App
