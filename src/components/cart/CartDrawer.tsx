'use client';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import CartItem from './CartItem';

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, totalPrice } = useCart();

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 380, p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            Your Cart
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        {items.length === 0 ? (
          <Typography sx={{ color: 'text.secondary', mt: 4, textAlign: 'center' }}>
            Your cart is empty
          </Typography>
        ) : (
          <>
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6">Total:</Typography>
              <Typography variant="h6" sx={{ fontWeight: 700, color: 'secondary.main' }}>
                ${totalPrice.toFixed(2)}
              </Typography>
            </Box>
            <Button
              component={Link}
              href="/cart"
              variant="contained"
              color="secondary"
              fullWidth
              sx={{ mt: 2, textTransform: 'none', fontWeight: 600 }}
              onClick={onClose}
            >
              View Cart
            </Button>
          </>
        )}
      </Box>
    </Drawer>
  );
}
