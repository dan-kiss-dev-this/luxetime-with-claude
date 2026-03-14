'use client';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';
import Link from 'next/link';
import { Product } from '@/types';
import { AddToCartButton, PriceTag } from '@/components/shared';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ height: 4, bgcolor: product.accentColor }} />
      <Box
        sx={{
          height: 280,
          bgcolor: grey[100],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* <Typography variant="body1" sx={{ color: grey[400], fontStyle: 'italic' }}>
          {product.name} Image
        </Typography> */}
        {/* <img src={product.imageSrc} /> */}
        <Box
          component="img" // Renders as an <img/> tag
          sx={{
            width: 1,
          }}
          alt="A descriptive alt text"
          src={product.imageSrc}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {product.tagline}
        </Typography>
        <PriceTag price={product.price} />
      </CardContent>
      <CardActions sx={{ px: 2, pb: 2, gap: 1 }}>
        <AddToCartButton product={product} />
        <Button
          component={Link}
          href={`/watch/${product.id}`}
          size="small"
          sx={{ textTransform: 'none' }}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}
