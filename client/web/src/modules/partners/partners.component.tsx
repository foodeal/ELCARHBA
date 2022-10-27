import React, { useState } from "react";
import { Grid, IconButton } from "@mui/material";
import { CustomCard, MiniPagination, Pagination } from "@shared/components";
import { Filter } from "./filter.component";

import styles from "./partners.module.scss";

export const Partners: React.FC = () => {
  const [page, setPage] = useState(1);

  const handleChangePage = (value: number) => {
    setPage(value);
  };

  return (
    <Grid container direction="row" className={styles.partners_container}>
      <Grid item md={3} sm={3}>
        <Filter />
      </Grid>
      <Grid item md={8} sm={8} style={{ paddingLeft: "2rem" }}>
        <Grid
          container
          direction="column"
          className={styles.right_side_partners}
        >
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            style={{ paddingBottom: "2rem" }}
          >
            <Grid item className={styles.right_side_item}>
              <div className={styles.partners_titles}>
                Tous nos partenaires
              </div>
            </Grid>
            <Grid item>
              <MiniPagination
                count={10}
                page={page}
                handleChange={handleChangePage}
              />
            </Grid>
          </Grid>

          <Grid item className={styles.right_side_item}>
            <Grid
              container
              direction={"row"}
              rowSpacing={2}
              columnSpacing={2}
              justifyContent="space-between"
            >
              {[
                "/examples/garage1.jpg",
                "/examples/garage2.jpg",
                "/examples/garage3.jpg",
                "/examples/injector.jpg",
                "/examples/filter.jpg",
                "/examples/bougie.jpg"
              ].map(index => (
                <Grid item xs={12} sm={6} md={4} key={`card2-${index}`}>
                  <CustomCard src={index} simpleButton title="garage foulen" description="Mécanique génerale" disponibility="Disponible"/>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid
            item
            className={styles.right_side_item}
            style={{ marginBottom: "2rem" }}
            justifyContent="center"
          >
            <Pagination
              count={10}
              page={page}
              handleChange={handleChangePage}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
