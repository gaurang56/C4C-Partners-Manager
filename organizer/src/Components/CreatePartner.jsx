import { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Typography, Box, Container } from '@mui/material';

export default function CreatePartner({ createPartner }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [imgURL, setImgURL] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPartner(name, description, isChecked, imgURL);
    setDescription('')
    setImgURL('')
    setIsChecked(false)
    setName('')
  };

  const handleURLChange = (e) => {
    setImgURL(e.target.value);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create Partner
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              label="Partner Name"
              variant="outlined"
              value={name}
              onChange={handleNameChange}
              required
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              label="Partner Description"
              variant="outlined"
              value={description}
              onChange={handleDescriptionChange}
              required
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              label="Logo URL"
              variant="outlined"
              value={imgURL}
              onChange={handleURLChange}
              required
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <FormControlLabel
              control={<Checkbox checked={isChecked} onChange={handleCheckboxChange} />}
              label="Active?"
            />
          </Box>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}
