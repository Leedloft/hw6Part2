import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import styles from './style.module.css'

export default function signin() {
  return (
    <Box className={styles.input_div} sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          Login
        </InputLabel>
        <Input
        className={styles.input_one}
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle style={{ color: "white" }} />
            </InputAdornment>
          }
        />
      </FormControl>
      <TextField 
        className={styles.input_two}
        id="input-with-icon-textfield"
        label = "Email address"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle style={{ color: "white" }} />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
    </Box>
  );
}