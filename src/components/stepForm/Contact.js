import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Contact = ({ formData, setForm, navigation }) => {

  const { phone, email } = formData;

  return (
    <Container maxWidth="xs">
      <h3>Contact</h3>
      <TextField
        label="Phone"
        name="phone"
        type="number"
        value={phone}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />

      <TextField
        label="E-Mail"
        name="email"
        value={email}
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

export default Contact
