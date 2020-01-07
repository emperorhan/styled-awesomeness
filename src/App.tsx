import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";

// const GlobalStyle = createGlobalStyle`
//     body {
//         padding: 0;
//         margin: 0;
//     }
// `;

const Card = styled.div`
    background-color: red;
`;

const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-color: pink;
    ${Card} {
        background-color: blue;
    }
`;

const Button = styled.button`
    border-radius: 30px;
    padding: 25px 15px;
    background-color: ${props => props.theme.colors.successColor};
`;

const Form = () => (
    <Card>
        <Button>Hello</Button>
    </Card>
);

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <Container>
                    <Form />
                </Container>
            </ThemeProvider>
        );
    }
}

export default App;
