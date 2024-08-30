// import { Button, Container, Grid, TextField, Typography } from '@mui/material';
// import axios from 'axios';
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// function AddMoney() {

//     const[amount,setAmount]=useState();
//     const[pin,setPin]=useState();
//     const [errors, setErrors] = useState({});
//     const [submitted, setSubmitted] = useState(false); // State to track form submission
//     const [successMessage, setSuccessMessage] = useState(''); // State to store success message
//     const navigate = useNavigate();

//     const handleAmountChange = (event) => {
//         setAmount(event.target.value)
//     };

//     const handlePinChange = (event) => {
//         setPin(event.target.value)
//     };

//     const userId=sessionStorage.getItem('userId');

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         // Validate form fields
//         const errors = {};
        
        

//         setErrors(errors);
//         // If no errors, submit form
//         if (Object.keys(errors).length === 0) {
//             try {
//                 // Make API call
//                 const response = await axios.post('http://localhost:8080/addMoney', {
//                     userId:userId,
//                     amount:amount,
//                     pin:pin
//                 });


//                 setSubmitted(true); // Set submitted state to true upon successful registration
//                 setSuccessMessage("Money Transfered Succesfully"); // Set success message
//                 const delayedNavigation = () => {
//                     setTimeout(() => {
//                         navigate("/account");
//                     }, 2000);
//                 };
//                 delayedNavigation();
//             } catch (error) {
//                 console.error('API Error:', error);
//             }
//         }
//     };

//   return (
//     <Container component="main" maxWidth="xs">

            
//             <Typography component="h1" variant="h5">
//                 Add Money To Your Account
                
//             </Typography>
//             <form onSubmit={handleSubmit}>
//                 <Grid container spacing={2}>
//                     <Grid item xs={12}>
//                         <TextField
//                             fullWidth
//                             variant="outlined"
//                             label="Amount"
//                             name="amount"

//                             onChange={handleAmountChange}
//                             error={errors.amount}
//                             helperText={errors.amount}
//                         />
//                     </Grid>
//                     <Grid item xs={12}>
//                         <TextField
//                             fullWidth
//                             variant="outlined"
//                             label="PIN"
//                             name="pin"
//                             type="password"
                           
//                             onChange={handlePinChange}
//                             error={errors.pin}
//                             helperText={errors.pin}
//                         />
//                     </Grid>
//                 </Grid>
//                 <Button type="submit" fullWidth variant="contained" color="primary">
//                     Register
//                 </Button>
//             </form>

//             {submitted && (
//                 <div style={{ marginTop: '200px', textAlign: 'center', backgroundColor: '#adcae6', padding: '10px', borderRadius: '5px' }}>
//                     <Typography color="success">
//                         {successMessage}
//                     </Typography>
//                 </div>
//             )}
            
//         </Container>
//   )
// }

// export default AddMoney

import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Grid, Typography, Container, Paper, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function AddMoney() {
    const [amount, setAmount] = useState('');
    const [pin, setPin] = useState('');
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handlePinChange = (event) => {
        setPin(event.target.value);
    };

    const userId = sessionStorage.getItem('userId');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const errors = {};

        if (!amount.trim()) {
            errors.amount = 'Amount is required';
        }

        if (!pin.trim()) {
            errors.pin = 'PIN is required';
        }

        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            try {
                const response = await axios.post('http://localhost:8080/addMoney', {
                    userId: userId,
                    amount: amount,
                    pin: pin
                });

                setSubmitted(true);
                setSuccessMessage('Money transferred successfully');

                const delayedNavigation = () => {
                    setTimeout(() => {
                        navigate('/account');
                    }, 2000);
                };

                delayedNavigation();
            } catch (error) {
                console.error('API Error:', error);
            }
        }
    };

    return (

         <div>

        <Navbar/>         

        <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(to right, #ece9e6, #ffffff)' }}>
            <Paper elevation={6} sx={{ padding: '40px', borderRadius: '10px', textAlign: 'center', maxWidth: '600px', width: '100%' }}>
            <Typography component="h1" variant="h5" style={{ marginBottom: '20px', textAlign: 'center' }}>
                Add Money To Your Account
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Amount"
                            name="amount"
                            value={amount}
                            onChange={handleAmountChange}
                            error={errors.amount}
                            helperText={errors.amount}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="PIN"
                            name="pin"
                            type="password"
                            value={pin}
                            onChange={handlePinChange}
                            error={errors.pin}
                            helperText={errors.pin}
                        />
                    </Grid>
                </Grid>
                <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: '20px' }}>
                    Add Money
                </Button>
            </form>
            {submitted && (
                <div style={{ marginTop: '20px', textAlign: 'center', backgroundColor: '#adcae6', padding: '10px', borderRadius: '5px' }}>
                    <Typography color="success">{successMessage}</Typography>
                </div>
            )}
        </Paper>
        </Box>
        </div>
    );
}

export default AddMoney;
