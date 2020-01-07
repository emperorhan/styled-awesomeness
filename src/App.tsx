import React, { Component } from "react";
import styled, {
    createGlobalStyle,
    css,
    ThemeProvider,
    keyframes
} from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
    }
`;

const Button = styled.button<{ danger?: Boolean; rotationTime?: number }>`
    border-radius: 50px;
    padding: 5px;
    min-width: 120px;
    color: white;
    font-weight: 600;
    -webkit-appearance: none;
    cursor: pointer;
    &:active,
    &:focus {
        outline: none;
    }
    background-color: ${props =>
        props.danger
            ? props.theme.colors.dangerColor
            : props.theme.colors.successColor};
    ${props => {
        if (props.danger) {
            return css`
                animation: ${rotation} ${props.rotationTime}s linear infinite;
            `;
        }
    }}
`;

const Anchor = styled(Button.withComponent("a"))`
    text-decoration: none;
`;

const rotation = keyframes`
    from{
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const Card = styled.div`
    background-color: red;
`;

const awesomeCard = css`
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    background-color: white;
    border-radius: 10px;
    padding: 20px;
`;

const Input = styled.input.attrs({
    required: true
})`
    border: none;
    ${awesomeCard}
`;

const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-color: pink;
    ${Card} {
        background-color: blue;
    }
`;

const Form = () => (
    <Card>
        <Button>Hello</Button>
    </Card>
);

const TextForm = () => (
    <Card>
        <Input placeholder="hello" />
    </Card>
);

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Container>
                    <Form />
                    <Button>Regis</Button>
                    <Button danger rotationTime={10}>
                        Hello
                    </Button>
                    <Anchor href="http://google.com">Go to google</Anchor>
                    <TextForm />
                </Container>
            </ThemeProvider>
        );
    }
}

export default App;
