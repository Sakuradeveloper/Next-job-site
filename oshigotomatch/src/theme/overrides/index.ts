import MuiInput from "./input";
import MuiButton from "./button";

const Overrides = () => {
  const button = MuiButton();
  const input = MuiInput();

  return Object.assign(button, input);
};

export default Overrides;
