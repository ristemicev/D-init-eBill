import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import {Container, Nav, Navbar} from "react-bootstrap";
import AppRouter from "./AppRouter";
import {AuthProvider} from "./components/Context/AuthContext";

function App() {
    return (
        <AuthProvider>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">eBill</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/register">Register</Nav.Link>
                        <Nav.Link href="/generate/test">Test</Nav.Link>
                        <Nav.Link href="/generate/show">Show</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <AppRouter/>
        </AuthProvider>
    );
}

export default App;
