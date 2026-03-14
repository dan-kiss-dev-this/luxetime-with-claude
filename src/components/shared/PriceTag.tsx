'use client';
import Typography from '@mui/material/Typography';

interface PriceTagProps {
  price: number;
  variant?: 'h4' | 'h5' | 'h6';
}

export default function PriceTag({ price, variant = 'h5' }: PriceTagProps) {
  return (
    <Typography variant={variant} sx={{ color: 'secondary.main', fontWeight: 700 }}>
      ${price.toFixed(2)}
    </Typography>
  );
}
