import { useEffect } from "react";

import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ setMenuActive, children }) => {
  const body = document.querySelector("body");

  useEffect(() => {
    body.classList.add("no-scroll");

    return () => {
      body.classList.remove("no-scroll");
    };
  }, [body.classList]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        body.classList.remove("no-scroll");
        setMenuActive(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [body.classList]);

  return createPortal(children, modalRoot);
};
