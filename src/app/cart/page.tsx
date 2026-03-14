'use client';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { CartItem } from '@/components/cart';
import { CartSummary } from '@/components/cart';

export default function CartPage() {
  const { items } = useCart();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
        Shopping Cart
      </Typography>
      {items.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h6" sx={{ color: 'text.secondary', mb: 3 }}>
            Your cart is empty
          </Typography>
          <Button component={Link} href="/" variant="contained" color="secondary" sx={{ textTransform: 'none' }}>
            Continue Shopping
          </Button>
        </Box>
      ) : (
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 8 }}>
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <CartSummary />
          </Grid>
        </Grid>
      )}
    </Container>
  );
}
