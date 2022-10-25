import { Button, CircularProgress } from "@mui/material";
import React, { MouseEventHandler, ReactNode } from "react";
import styles from "./polygon-button.module.scss";

declare type ButtonHtmlType = "submit" | "reset" | "button";

interface PolygonButtonProperties {
  content?: ReactNode;
  isMobile?: boolean;
  outlined?: boolean;
  classNames?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  htmlType?: ButtonHtmlType;
  spinning?: boolean;
  disabled?: boolean;
  ariaRef?: React.RefObject<HTMLButtonElement>;
  ariaHaspopup?: boolean;
  ariaControls?: string;
}

export const PolygonButton: React.FC<PolygonButtonProperties> = ({
  content = "",
  isMobile = false,
  outlined = false,
  htmlType = "button",
  classNames = "",
  onClick,
  spinning = false,
  ariaRef,
  disabled = false,
  ariaHaspopup,
  ariaControls
}) => {
  return (
    <Button
      ref={ariaRef}
      onClick={onClick}
      type={htmlType}
      className={`${styles.polygon_button} ${isMobile ? styles.mobile : ""} 
      ${outlined ? styles.outlined : ""} ${classNames ? classNames : ""}`}
      disabled={disabled}
      aria-haspopup={ariaHaspopup}
      aria-controls={ariaControls}
    >
      {content}
      {spinning && (
        <CircularProgress
          style={{ marginLeft: "0.5rem" }}
          size={20}
          color="inherit"
        />
      )}
    </Button>
  );
};
