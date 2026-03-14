'use client';
import { useState } from 'react';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CheckIcon from '@mui/icons-material/Check';
import { useCart } from '@/context/CartContext';
import { Product } from '@/types';

interface AddToCartButtonProps {
  product: Product;
  quantity?: number;
}

export default function AddToCartButton({ product, quantity = 1 }: AddToCartButtonProps) {
  const { dispatch } = useCart();
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity,
        imageSrc: product.imageSrc,
      },
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <Button
      variant="contained"
      color={added ? 'success' : 'secondary'}
      startIcon={added ? <CheckIcon /> : <ShoppingCartIcon />}
      onClick={handleClick}
      sx={{ textTransform: 'none', fontWeight: 600 }}
    >
      {added ? 'Added!' : 'Add to Cart'}
    </Button>
  );
}
