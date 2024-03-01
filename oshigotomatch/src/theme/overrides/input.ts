const Input = () => {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          [`&.MuiInputBase-colorPrimary .MuiOutlinedInput-notchedOutline, 
            &.MuiInputBase-colorPrimary:hover .MuiOutlinedInput-notchedOutline`]:
            {
              borderColor: "#149CD7",
            },
        },
      },
    },
  };
};

export default Input;
