import { Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { FunctionComponent, ReactNode } from 'react';

import styles from './edit-card.module.scss';

interface EditCardProps {
  children?: ReactNode;
  title?: ReactNode | string;
  editAction?: () => void;
}
export const EditCard: FunctionComponent<EditCardProps> = ({
  children,
  title,
  editAction
}) => {
  return (
    <Grid
      container
      direction='column'
      className={styles.edit_card_container}
      sx={{ boxShadow: 2 }}
    >
      <Grid item className={styles.card_header}>
        {title && typeof title === 'string' ? (
          <h4 className={styles.card_title}>{title}</h4>
        ) : (
          title
        )}

        <EditIcon className={styles.edit_btn} />
      </Grid>
      <Grid item className={styles.card_content}>
        {children}
      </Grid>
    </Grid>
  );
};
