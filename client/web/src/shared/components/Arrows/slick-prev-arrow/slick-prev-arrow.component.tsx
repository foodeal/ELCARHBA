import React from "react";
import { IconButton } from "@mui/material";
import Image from "next/image";

/**
 * SlickPrevArrow component: a component to display the prev arrow of a slider
 *
 * @returns
 */
export const SlickPrevArrow = (props: any) => {
  const { className, onClick } = props;

  return (
    <IconButton
      onClick={onClick}
      aria-label={"prev"}
      className={`slick-prev-arrow ${className}`}
    >
      <Image
        src="/svg-icons/back-arrow.svg"
        height={61}
        width={35}
        alt="slider forward"
      />
    </IconButton>
  );
};
