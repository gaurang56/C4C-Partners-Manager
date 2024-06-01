import React from 'react';
import { Typography, Box, Card, CardContent, CardActions, Button, Avatar } from '@mui/material';

export default function PartnerShow({ partner, onDelete }) {
  const handleDelete = () => {
    onDelete(partner.id);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Box display="flex" alignItems="center" mb={2}>
          <Avatar
            alt={partner.partner_name}
            src={partner.logo_url}
            sx={{ width: 56, height: 56, mr: 2 }}
          />
          <Typography variant="h5" component="div">
            {partner.partner_name}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" mb={2}>
          {partner.partner_description}
        </Typography>
        <Typography variant="subtitle1" component="div" color={partner.check_status ? 'success.main' : 'error.main'}>
          {partner.check_status ? 'Active' : 'Inactive'}
        </Typography>
      </CardContent>
      <CardActions>
      <Button 
          size="small" 
          sx={{ backgroundColor:'#d32f2f', color: 'white', '&:hover': { backgroundColor: 'darkred' } }} 
          onClick={handleDelete}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
