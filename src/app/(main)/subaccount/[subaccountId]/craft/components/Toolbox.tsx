import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";

export const Toolbox = () => {
  return (
    <Box px={2} py={2}>
      <Stack spacing={2} alignItems="center">
        <Typography>Drag to add</Typography>
        <Button variant="contained">Button</Button>
        <Button variant="contained">Text</Button>
        <Button variant="contained">Container</Button>
        <Button variant="contained">Card</Button>
      </Stack>
    </Box>
  );
};
