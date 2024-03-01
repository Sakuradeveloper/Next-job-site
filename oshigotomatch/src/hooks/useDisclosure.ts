import { useCallback, useState } from "react";

type UseDisclosure = (initialState: boolean) => {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
};

export const useDisclosure: UseDisclosure = (initialState = false) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  const onToggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const onOpen = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => setIsOpen(false), []);

  return { isOpen, onToggle, onOpen, onClose };
};
