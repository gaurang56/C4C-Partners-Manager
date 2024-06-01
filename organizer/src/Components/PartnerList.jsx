import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import PartnerShow from './PartnerShow';

export default function PartnerList({ partners, onDelete }) {
  const renderPartner = partners.map((partner) => (
    <Grid item xs={12} sm={6} md={4} key={partner.id}>
      <PartnerShow partner={partner} onDelete={onDelete} />
    </Grid>
  ));

  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Partner List
      </Typography>
      <Grid container spacing={3}>
        {renderPartner}
      </Grid>
    </Container>
  );
}
