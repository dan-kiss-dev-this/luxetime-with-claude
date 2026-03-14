'use client';
import Chip from '@mui/material/Chip';

interface WatchBadgeProps {
  label: string;
  color: string;
}

export default function WatchBadge({ label, color }: WatchBadgeProps) {
  return (
    <Chip
      label={label}
      size="small"
      sx={{
        bgcolor: color,
        color: '#fff',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: 1,
      }}
    />
  );
}
