'use client';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'primary.main' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{
              fontWeight: 700,
              letterSpacing: 2,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LUXETIME
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography
              component={Link}
              href="/"
              sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { opacity: 0.8 } }}
            >
              Home
            </Typography>
            <Typography
              component={Link}
              href="/cart"
              sx={{ color: 'inherit', textDecoration: 'none', '&:hover': { opacity: 0.8 } }}
            >
              Cart
            </Typography>
            <IconButton component={Link} href="/cart" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
