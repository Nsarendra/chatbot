// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { Link , useNavigate} from 'react-router-dom';

// function AccountPage() {

//     const[balance,setBalance]=useState(sessionStorage.getItem("balance"));

//     const navigate = useNavigate();

// // setBalance(sessionStorage.getItem("balance"));
// const id=sessionStorage.getItem("userId")

// const fetchBalance= async () => {
//     try {
//         const response = await axios.get(`http://localhost:8080/getDetails/${id}`); 
//         setBalance(response.data);
//         console.log(balance);
//     } catch (error) {
//         console.error('API Error:', error);
//     }
// };

// useEffect(() => {
//     fetchBalance();
// }, []);



//   return (
//     <div>

//        <div>
//         <h1>Welcome Mr {sessionStorage.getItem("userName")}</h1>
//        </div>
//         <div>
//             <h3>Available  balance : Rs {balance} </h3>
//         </div>
//         <div>
//             <h3>Account Number : {sessionStorage.getItem("accountNumber")}</h3>
//         </div>
        
//         <div>
//             <Link to="/Addmoney">
//             <button >Add Money to your Account</button>
//             </Link>
       
//         </div>

//         <div>
//             <Link to="/transferMoney">
//             <button >Transfer Money</button>
//             </Link>
        
//         </div>

//         <div>
//             <Link to="/transactionHistory">
//             <button >Transaction History</button>
//             </Link>
        
//         </div>


        
      
//     </div>
//   )
// }

// export default AccountPage

// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Typography, Button, Container, Grid } from '@mui/material';

// function AccountPage() {
//     const [balance, setBalance] = useState(0);
//     const navigate = useNavigate();
//     const userId = sessionStorage.getItem("userId");

//     const fetchBalance = async () => {
//         try {
//             const response = await axios.get(`http://localhost:8080/getDetails/${userId}`);
//             setBalance(response.data);
//         } catch (error) {
//             console.error('API Error:', error);
//         }
//     };

//     useEffect(() => {
//         fetchBalance();
//     }, []);

//     return (
//         <Container maxWidth="sm">
//             <Typography variant="h3" align="center" gutterBottom>
//                 Welcome, {sessionStorage.getItem("userName")}
//             </Typography>
//             <Typography variant="h5" align="center" gutterBottom>
//                 Available Balance: Rs {balance}
//             </Typography>
//             <Typography variant="body1" align="center" gutterBottom>
//                 Account Number: {sessionStorage.getItem("accountNumber")}
//             </Typography>
//             <Grid container spacing={2} justifyContent="center">
//                 <Grid item>
//                     <Button variant="contained" color="primary" component={Link} to="/Addmoney">
//                         Add Money
//                     </Button>
//                 </Grid>
//                 <Grid item>
//                     <Button variant="contained" color="primary" component={Link} to="/transferMoney">
//                         Transfer Money
//                     </Button>
//                 </Grid>
//                 <Grid item>
//                     <Button variant="contained" color="primary" component={Link} to="/transactionHistory">
//                         Transaction History
//                     </Button>
//                 </Grid>
//             </Grid>
//         </Container>
//     );
// }

// export default AccountPage;

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Typography, Button, Container, Grid, Box, Paper } from '@mui/material';
import Navbar from './Navbar';

function AccountPage() {
    const [balance, setBalance] = useState(0);
    const navigate = useNavigate();
    const userId = sessionStorage.getItem("userId");

    const fetchBalance = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/getDetails/${userId}`);
            setBalance(response.data);
        } catch (error) {
            console.error('API Error:', error);
        }
    };

    useEffect(() => {
        fetchBalance();
    }, []);

    return (

        <div>
            <Navbar /> 
        

        <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to right, #ece9e6, #ffffff)' }}>
            <Paper elevation={6} sx={{ padding: '40px', borderRadius: '10px', textAlign: 'center', maxWidth: '600px', width: '100%' }}>
                <Typography variant="h3" gutterBottom>
                    Welcome, {sessionStorage.getItem("userName")}
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Available Balance: Rs {balance}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Account Number: {sessionStorage.getItem("accountNumber")}
                </Typography>
                <Grid container spacing={3} justifyContent="center" direction="column" alignItems="center" sx={{ marginTop: '20px' }}>
                    <Grid item>
                        <Button variant="contained" color="primary" size="large" component={Link} to="/Addmoney" sx={{ padding: '10px 20px' }}>
                            Add Money
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" size="large" component={Link} to="/transferMoney" sx={{ padding: '10px 20px' }}>
                            Transfer Money
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" size="large" component={Link} to="/transactionHistory" sx={{ padding: '10px 20px' }}>
                            Transaction History
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
        </div>
    );
}

export default AccountPage;



