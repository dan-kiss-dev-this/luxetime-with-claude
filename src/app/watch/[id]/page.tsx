'use client';
import { useParams } from 'next/navigation';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { getProductById } from '@/data/products';
import { ProductDetail } from '@/components/product';

export default function WatchDetailPage() {
  const params = useParams();
  const product = getProductById(params.id as string);

  if (!product) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Watch not found
        </Typography>
        <Button component={Link} href="/" variant="contained" color="secondary">
          Back to Home
        </Button>
      </Container>
    );
  }

  return <ProductDetail product={product} />;
}
