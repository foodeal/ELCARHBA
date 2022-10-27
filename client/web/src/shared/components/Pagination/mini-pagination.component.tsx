import React from "react";
import { Grid, IconButton } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import styles from "./pagination.module.scss";

export interface MiniPaginationProps {
  count: number;
  page: number;
  handleChange: (value: number) => void;
}

export const MiniPagination = (props: MiniPaginationProps) => {
  return (
    <Grid
      container
      alignItems="center"
      className={styles.mini_pagination_container}
    >
      <IconButton
        className={styles.prev_button}
        disabled={props.page <= 1}
        onClick={() => props.handleChange(props.page - 1)}
      >
        <KeyboardArrowLeftIcon />
      </IconButton>
      <IconButton
        disabled={props.page === props.count}
        onClick={() => props.handleChange(props.page + 1)}
      >
        <KeyboardArrowRightIcon />
      </IconButton>
    </Grid>
  );
};
