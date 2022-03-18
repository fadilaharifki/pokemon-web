import React from 'react';
import 'react-responsive-modal/styles.css';
import { Container } from './styled'

export default function ModalComponent({ open, setOpen, title, children, setDisable }) {
    const onCloseModal = () => {
        setOpen(false)
        setDisable(false)
    };

    return (
        <div>
            <Container open={open} onClose={onCloseModal} center>
                <h3>{title}</h3>
                {children}
            </Container>
        </div>
    );
};