import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useSpring, animated } from "react-spring";

export default function NotFound() {
  // React Spring animation for the "404" text
  const springProps = useSpring({
    from: { opacity: 0, transform: "translateY(-50px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 120, friction: 14 },
    delay: 200,
  });

  // React Spring animation for the button
  const buttonProps = useSpring({
    from: { opacity: 0, transform: "scale(0.8)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 120, friction: 14 },
    delay: 500,
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        background: "linear-gradient(to bottom,rgba(203, 17, 17, 0.53),rgba(238, 252, 37, 0.3))",
        color: "white",
        padding: 2,
      }}
    >
      {/* Animated "404" */}
      <animated.div style={springProps} >
        <Typography variant="h1" sx={{ fontWeight: "bold", fontSize: "8rem" }}>
          404
        </Typography>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Oops! The page you're looking for doesn't exist.
        </Typography>
      </animated.div>

      {/* Animated Button */}
      <animated.div style={buttonProps}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            mt: 2,
            px: 4,
            py: 1.5,
            fontSize: "1.2rem",
            textTransform: "none",
          }}
          onClick={() => window.location.href = "/"} // Redirect to the homepage
        >
          Go Back Home
        </Button>
      </animated.div>
    </Box>
  );
}
