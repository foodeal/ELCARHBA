import { IconButton } from "@mui/material";
import React from "react";
import Image from "next/image";

/**
 * SlickNextArrow component: a component to display the next arrow of a slider
 *
 * @returns
 */
export const SlickNextArrow = (props: any) => {
  const { className, onClick } = props;

  return (
    <IconButton
      onClick={onClick}
      aria-label={"next"}
      className={`slick-next-arrow ${className}`}
    >
      <Image src="/svg-icons/arrow-forward.svg" height={61} width={35} alt="slider forward"/>
    </IconButton>
  );
};
