"use client"; // only used to display the different behavior that happens when wrapping in Box

import Test from "./Test";
import { Box } from "@mui/system";

export default function Sidebar() {
  return (
    <>
      <div>
        <p>All jump after initial load</p>
        <Test />
        <Test />
        <Test />
      </div>

      <Box my={10}>
        <p>
          Only the first jump after the first load. Why wrapping this in Box
          changes the behavior?
        </p>
        <Test />
        <Test />
        <Test />
      </Box>
    </>
  );
}
