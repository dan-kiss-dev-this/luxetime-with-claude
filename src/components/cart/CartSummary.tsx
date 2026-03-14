'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CartSummary() {
  const { totalPrice, totalItems } = useCart();
  const tax = totalPrice * 0.1;
  const grandTotal = totalPrice + tax;

  return (
    <Box sx={{ p: 3, bgcolor: 'background.paper', borderRadius: 2, border: '1px solid', borderColor: 'grey.200' }}>
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
        Order Summary
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography>Subtotal ({totalItems} items)</Typography>
        <Typography sx={{ fontWeight: 600 }}>${totalPrice.toFixed(2)}</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Typography>Tax (10%)</Typography>
        <Typography sx={{ fontWeight: 600 }}>${tax.toFixed(2)}</Typography>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>Grand Total</Typography>
        <Typography variant="h6" sx={{ fontWeight: 700, color: 'secondary.main' }}>
          ${grandTotal.toFixed(2)}
        </Typography>
      </Box>
      <Button
        component={Link}
        href="/checkout/confirm"
        variant="contained"
        color="secondary"
        fullWidth
        size="large"
        disabled={totalItems === 0}
        sx={{ textTransform: 'none', fontWeight: 600 }}
      >
        Proceed to Checkout
      </Button>
    </Box>
  );
}
