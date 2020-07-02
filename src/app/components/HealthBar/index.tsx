import React from 'react';

import { Box, Typography } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

interface Props {
  percentage: number;
}

const HealthBar = ({ percentage }: Props) => (
  <Box display="flex" alignItems="center">
    <Box width="100%" mr={1}>
      <LinearProgress variant="determinate" value={percentage * 100} />
    </Box>
    <Box minWidth={35}>
      <Typography variant="body2" color="textSecondary">
        {new Intl.NumberFormat(undefined, { style: 'percent' }).format(
          percentage,
        )}
      </Typography>
    </Box>
  </Box>
);

export default HealthBar;
