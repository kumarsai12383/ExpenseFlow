import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

function Loading() {
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{
        alignItems: "center",
        color: "#10B981",
        justifyContent: "center",
        height: "30px",
      }}
    >
      <CircularProgress color="success" aria-label="Loading…" />
    </Stack>
  );
}

export default Loading;
