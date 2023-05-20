"use client";

import { Stack } from "@mui/system";
import { Typography } from "@mui/material";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function Test() {
  return (
    <Stack direction="row" spacing={4}>
      <KeyboardArrowRightIcon />
      <Typography>Test</Typography>
    </Stack>
  );
}
