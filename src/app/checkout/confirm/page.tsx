'use client';
import { useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CheckoutConfirmPage() {
  const { dispatch } = useCart();

  useEffect(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, [dispatch]);

  return (
    <Container maxWidth="sm" sx={{ py: 8, textAlign: 'center' }}>
      <CheckCircleOutlineIcon sx={{ fontSize: 80, color: 'success.main', mb: 2 }} />
      <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
        Thank You!
      </Typography>
      <Typography variant="h6" sx={{ color: 'text.secondary', mb: 1 }}>
        Your order has been placed successfully.
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
        This is a demo — no payment was processed. In a future version, Stripe integration will handle real transactions.
      </Typography>
      <Button
        component={Link}
        href="/"
        variant="contained"
        color="secondary"
        size="large"
        sx={{ textTransform: 'none', fontWeight: 600 }}
      >
        Continue Shopping
      </Button>
    </Container>
  );
}
