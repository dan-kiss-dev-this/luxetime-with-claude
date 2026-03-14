'use client';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function HeroBanner() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: 400,
        background: 'linear-gradient(135deg, #1A1A2E 0%, #16213E 50%, #0F3460 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        py: 8,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" sx={{ color: 'white', fontWeight: 700, mb: 2 }}>
          Luxury Timepieces
        </Typography>
        <Typography variant="h5" sx={{ color: 'rgba(255,255,255,0.8)', mb: 4 }}>
          Discover our curated collection of premium watches
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          href="#products"
          sx={{ textTransform: 'none', fontWeight: 600, px: 4, py: 1.5 }}
        >
          Shop Now
        </Button>
      </Container>
    </Box>
  );
}
