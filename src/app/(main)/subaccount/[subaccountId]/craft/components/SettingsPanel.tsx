// components/SettingsPanel.js
import React from "react";
import {
  Box,
  Chip,
  Stack,
  Typography,
  Button as MaterialButton,
  FormControl,
  FormLabel,
  Slider,
} from "@mui/material";

export const SettingsPanel = () => {
  return (
    <Box bgcolor="rgba(0, 0, 0, 0.06)" mt={2} px={2} py={2}>
      <Stack spacing={2}>
        {/* Selected Section */}
        <Box>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="subtitle1">Selected</Typography>
            <Chip size="small" color="primary" label="Selected" />
          </Stack>
        </Box>

        {/* Slider Control */}
        <FormControl size="small" component="fieldset">
          <FormLabel component="legend">Prop</FormLabel>
          <Slider
            defaultValue={0}
            step={1}
            min={7}
            max={50}
            valueLabelDisplay="auto"
          />
        </FormControl>

        {/* Delete Button */}
        <MaterialButton variant="contained">Delete</MaterialButton>
      </Stack>
    </Box>
  );
};
