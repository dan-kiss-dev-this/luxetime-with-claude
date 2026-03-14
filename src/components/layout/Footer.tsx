'use client';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiLink from '@mui/material/Link';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 4, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
          LUXETIME
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
          &copy; 2026 LuxeTime. All rights reserved.
        </Typography>
        <Stack direction="row" spacing={2}>
          <MuiLink href="#" color="inherit" underline="hover">Facebook</MuiLink>
          <MuiLink href="#" color="inherit" underline="hover">Instagram</MuiLink>
          <MuiLink href="#" color="inherit" underline="hover">Twitter</MuiLink>
        </Stack>
      </Container>
    </Box>
  );
}
