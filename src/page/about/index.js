import React from "react";
import { Container, Title } from './styled'
export default function About() {
    return (
        <Container>
            <Title role="title">
                Pokemon APP
            </Title>
            <div role="desc">
                A simple web application developed with react js, javascript made by <a href="https://github.com/fadilaharifki/pokemon-web">fadil</a>
            </div>
        </Container>
    );
}