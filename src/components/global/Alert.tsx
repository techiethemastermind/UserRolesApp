import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FC } from 'react';

interface ModalProps {
    show: boolean;
    title: string;
    description?: string;
    onConfirm?: () => void;
    onClose: () => void;
}

const AlertModal: FC<ModalProps> = (props: ModalProps) => {

    return (
        <Dialog
            open={props.show}
            onClose={props.onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle sx={{ width: '475px' }}>
                {props.title}
            </DialogTitle>
            {props.description &&
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">{props.description}</DialogContentText>
                </DialogContent>}

            <DialogActions>
                {props.onConfirm && <Button variant="contained" onClick={props.onConfirm}>{'Confirm'}</Button>}
                <Button variant="contained" onClick={props.onClose}>{'Close'}</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AlertModal;
