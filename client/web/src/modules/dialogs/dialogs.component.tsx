import React from 'react';

import { ModalIdEnum } from '@core/enums';
import { useDispatch } from 'react-redux';
import { closeModal, Icon, Modal } from '@shared/components';
import { Login } from './login-dialog/login.component';
import { Purchase } from './purchase-coupon-dialog/purchase.component';

interface DialogsRouterProps {
  children: React.ReactNode;
}

export default function Dialogs({ children }: DialogsRouterProps) {
  const dispatch = useDispatch();

  const handleClose = () => dispatch(closeModal());

  return (
    <>
      {children}
      <Modal fullWidth size="md" modalId={ModalIdEnum.Login}  content={<Login handleClose={handleClose} />} />
      <Modal fullWidth size="sm" modalId={ModalIdEnum.Purchase}  content={<Purchase handleClose={handleClose} />} />
    </>
  );
}
