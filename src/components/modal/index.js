import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Container } from './styled'

export default function ModalComponent({ open, setOpen, title, children }) {
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <div>
            <button onClick={onOpenModal}>Open modal</button>
            <Container open={open} onClose={onCloseModal} center>
                <h3>{title}</h3>
                {children}
            </Container>
        </div>
    );
};