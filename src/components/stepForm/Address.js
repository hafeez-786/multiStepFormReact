import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Address = ({ formData, setForm, navigation }) => {
  
  const { address, city, state, zip } = formData;
  return (
    <Container maxWidth="xs">
      <h3>Address</h3>
      <TextField
        label="Address"
        name="address"
        value={address}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />

      <TextField
        label="City"
        name="city"
        value={city}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />

      <TextField
        label="State"
        name="state"
        value={state}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />

      <TextField
        label="Zip"
        name="zip"
        value={zip}
        type="number"
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />

      <Button
        variant="contained"
        color="secondary"
        onClick={() => navigation.previous()}
        style={{ marginTop: '1rem', marginRight: '1rem' }}
        >
        Back
      </Button>

      <Button
        variant="contained"
        color="primary"
        onClick={() => navigation.next()} 
        style={{ marginTop: '1rem' }}> 
        Next
      </Button>

    </Container>
  )
}

export default Address
