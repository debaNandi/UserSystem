import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@material-ui/core';

export default function Student() {
    const paperstyle={padding:'50px 20px', width:600, margin:"20px auto"}
    const[name, setName] = React.useState('');
    const[address,setAddress] = React.useState('');
    const[users,setUsers] = React.useState([]);
    const handleClick=(e)=>{
      e.preventDefault();
      const user={name,address}
      console.log(user);

      fetch("http://localhost:8080/student/add",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body: JSON.stringify(user)
      }).then(()=>{
        console.log("New User Added");
      })
    }

    React.useEffect(()=>{
      fetch("http://localhost:8080/student/getAll")
      .then(response=>response.json())
      .then((result)=>{
        setUsers(result)
      }
      )
    },[])

  return (
    <Container>
        <Paper elevation={3} style={paperstyle}>
          <h1 style={{color:"blue"}}><u>ADD USER</u></h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Your Name" variant="outlined" fullWidth
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Your Address" variant="outlined" fullWidth
       value={address}
       onChange={(e)=>setAddress(e.target.value)}/>
       <Button variant="contained" color="secondary" onClick={handleClick}>
        Submit
       </Button>
    </Box>
    </Paper>
      <h1>Users</h1>
     <Paper elevation={3} style={paperstyle}>
     {users.map(user=>(
      <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={user.id}>
        ID: {user.id}<br/>
        Name: {user.name}<br/>
        Address: {user.address}
      </Paper>
     )    
            )}
     
     </Paper> 

    </Container>
  );
}
