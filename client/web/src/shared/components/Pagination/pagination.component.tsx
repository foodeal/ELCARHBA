import React from "react";
import { Grid, PaginationItem } from "@mui/material";
import { Pagination as PaginationMui } from "@mui/material";
import styles from "./pagination.module.scss";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

export interface PaginationProps {
  count: number;
  page: number;
  handleChange: (value: number) => void;
}

export const Pagination = (props: PaginationProps) => {
  return (
    <Grid container direction="row">
      <PaginationMui
        onChange={(_event, value) => props.handleChange(value)}
        page={props.page}
        className={styles.pagination_container}
        count={props.count}
        renderItem={item => (
          <PaginationItem
            components={{
              previous: KeyboardDoubleArrowLeftIcon,
              next: KeyboardDoubleArrowRightIcon
            }}
            {...item}
          />
        )}
      />
    </Grid>
  );
};
