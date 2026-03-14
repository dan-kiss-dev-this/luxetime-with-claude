'use client';
import { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { grey } from '@mui/material/colors';
import { Product } from '@/types';
import { WatchBadge, PriceTag, AddToCartButton } from '@/components/shared';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              height: 500,
              bgcolor: grey[100],
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h6" sx={{ color: grey[400], fontStyle: 'italic' }}>
              {product.name} Image
            </Typography>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box sx={{ mb: 2 }}>
            <WatchBadge label={product.name.split(' ')[0]} color={product.accentColor} />
          </Box>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
            {product.name}
          </Typography>
          <PriceTag price={product.price} variant="h4" />
          <Typography variant="body1" sx={{ my: 2, color: 'text.secondary' }}>
            {product.description}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            Features
          </Typography>
          <List dense>
            {product.features.map((feature) => (
              <ListItem key={feature} disablePadding>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  <CheckCircleIcon sx={{ color: product.accentColor }} fontSize="small" />
                </ListItemIcon>
                <ListItemText primary={feature} />
              </ListItem>
            ))}
          </List>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 3 }}>
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              Quantity:
            </Typography>
            <IconButton
              size="small"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              disabled={quantity <= 1}
            >
              <RemoveIcon />
            </IconButton>
            <Typography variant="h6">{quantity}</Typography>
            <IconButton size="small" onClick={() => setQuantity((q) => q + 1)}>
              <AddIcon />
            </IconButton>
          </Box>
          <AddToCartButton product={product} quantity={quantity} />
        </Grid>
      </Grid>
    </Container>
  );
}
