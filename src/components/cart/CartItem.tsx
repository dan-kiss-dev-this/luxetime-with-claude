'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { grey } from '@mui/material/colors';
import { CartItem as CartItemType } from '@/types';
import { useCart } from '@/context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { dispatch } = useCart();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, py: 2, borderBottom: `1px solid ${grey[200]}` }}>
      <Box
        sx={{
          width: 80,
          height: 80,
          bgcolor: grey[100],
          borderRadius: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <Typography variant="caption" sx={{ color: grey[400] }}>
          Image
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
          {item.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'secondary.main', fontWeight: 600 }}>
          ${item.price.toFixed(2)}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <IconButton
          size="small"
          onClick={() =>
            dispatch({
              type: 'UPDATE_QUANTITY',
              payload: { id: item.id, quantity: Math.max(1, item.quantity - 1) },
            })
          }
          disabled={item.quantity <= 1}
        >
          <RemoveIcon fontSize="small" />
        </IconButton>
        <Typography variant="body1" sx={{ minWidth: 24, textAlign: 'center' }}>
          {item.quantity}
        </Typography>
        <IconButton
          size="small"
          onClick={() =>
            dispatch({
              type: 'UPDATE_QUANTITY',
              payload: { id: item.id, quantity: item.quantity + 1 },
            })
          }
        >
          <AddIcon fontSize="small" />
        </IconButton>
      </Box>
      <Typography variant="subtitle1" sx={{ fontWeight: 700, minWidth: 80, textAlign: 'right' }}>
        ${(item.price * item.quantity).toFixed(2)}
      </Typography>
      <IconButton
        size="small"
        color="error"
        onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: { id: item.id } })}
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}
