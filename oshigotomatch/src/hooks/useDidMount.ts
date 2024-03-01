import { useEffect, useRef } from "react";

const useDidMount = (): boolean => {
  const mountRef = useRef(false);

  useEffect(() => {
    mountRef.current = true;
  }, []);

  return mountRef.current;
};

export default useDidMount;
