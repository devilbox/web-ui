import React from 'react';
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardHeader,
} from '@material-ui/core';

const Default = () => (
  <Card>
    <CardHeader title="No projects here." />
    <CardContent>
      <Typography variant="body1" gutterBottom>
        Simply create a directory in <strong>./data/www</strong> on your host
        computer (or in <strong>/shared/httpd</strong> inside the php
        container).
      </Typography>
      <Box mt={3}>
        <Typography variant="body1">
          <strong>Example:</strong>
        </Typography>
      </Box>
      <Typography variant="body1" gutterBottom>
        ./data/www/my_project
      </Typography>
      <Box mt={3}>
        <Typography variant="body1">
          It will then be available via <strong>http://my_project.loc</strong>
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default Default;
