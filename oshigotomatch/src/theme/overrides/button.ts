const Button = () => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: 100,
          fontWeight: 600,
          fontSize: "1.125rem",
          boxShadow: "none",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {},
    },
  };
};

export default Button;
