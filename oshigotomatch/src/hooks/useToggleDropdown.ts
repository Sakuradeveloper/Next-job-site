import { useState, useCallback, SyntheticEvent } from "react";

type AnchorEl = (EventTarget & Element) | null;

type ToggleDropdown = () => [
  AnchorEl,
  {
    open: (event: SyntheticEvent) => void;
    close: () => void;
  }
];

export const useToggleDropdown: ToggleDropdown = () => {
  const [anchorEl, setAnchorEl] = useState<AnchorEl>(null);

  const open = useCallback((event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const close = useCallback(() => setAnchorEl(null), []);

  return [
    anchorEl,
    {
      open,
      close,
    },
  ];
};
