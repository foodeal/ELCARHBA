import React, { CSSProperties } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';

import { colors } from '@shared/theme/shared_theme_colors';
import { forDesktop } from '@modules/state/app-config.selectors';
import { ModalIdEnum } from '@core/enums';
import { getModalCurrentId, getModalVisibility, getSideBarWidth } from './state/modal.selectors';
import { closeModal } from './state/modal.actions';

import styles from './modal.module.scss';

export interface ModalProps {
  modalId: ModalIdEnum;
  content: React.ReactNode;
  title?: string | React.ReactNode;
  headerStyles?: CSSProperties;
  contentStyles?: CSSProperties;
  footer?: React.ReactNode;
  fullWidth?: boolean;
  height?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  style?: CSSProperties;
  onClose?(): void;
}

export function Modal(props: ModalProps): JSX.Element {

  const dispatch = useDispatch();
  const visible = useSelector(getModalVisibility);
  const currentModalId = useSelector(getModalCurrentId);
  const sideBarWidth = useSelector(getSideBarWidth);
  const md = useSelector(forDesktop);

  const handleClose = (event: string, reason: string) => {
    if (reason !== 'backdropClick') {
      dispatch(closeModal());
      if (props.onClose) {
        props.onClose();
      }
    }
  };

  if (!visible || currentModalId !== props.modalId) {
    return <></>;
  }

  return (
      <Dialog
        maxWidth={props.size ?? false}
        fullWidth={props.fullWidth}
        open={visible && currentModalId === props.modalId}
        onClose={handleClose}
        aria-labelledby={props.modalId + 'alert-dialog-title'}
        aria-describedby={props.modalId + 'alert-dialog-description'}
        style={{ marginLeft: `${md ? sideBarWidth : 0}px`,zIndex: '99999' }}
      >
        {props.title && (
          <DialogTitle id={props.modalId + 'alert-dialog-title'} style={{ backgroundColor: colors.LIGHTER_GRAY, ...props.headerStyles }}>
            <Typography  className={styles.modal_title} > {props.title} </Typography>
          </DialogTitle>
        )}
        <div className="p-rem-1 flex-1" style={{ backgroundColor: colors.LIGHTER_GRAY, overflow: 'auto', ...props.contentStyles }}>
          {props.content}
        </div>
        {props.footer && <div className="flex-0">{props.footer}</div>}
      </Dialog>
  );
}
