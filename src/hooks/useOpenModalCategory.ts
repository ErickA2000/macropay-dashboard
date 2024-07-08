import { useState } from "react";

export function useOpenModalCategory() {
  const [state, setState] = useState(false);

  const open = () => {
    setState(true);
  };

  const close = () => {
    setState(false);
  };

  return {
    state,
    open,
    close,
  };
}
