import React from 'react'
import { Container } from 'react-bootstrap';

export default function NotFound() {
    return (
        <Container className="py-4">
            <h2 className="text-primary">404 error</h2>
            <p className="lead">Page Not Found</p>
        </Container>
    )
}
