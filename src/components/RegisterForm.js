import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Layout from './Layout';

// Styled Components (copied from LoginForm for consistency)
const RegisterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6rem 2rem;
    background-color: #fff;
    font-family: 'Poppins', sans-serif;
`;

const AuthCard = styled.div`
    background: #ffffff;
    padding: 3rem;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 420px;
    text-align: center;
`;

const Title = styled.h2`
    font-size: 2rem;
    color: #021B33;
    margin-bottom: 2.5rem;
    font-weight: 700;
`;

const Form = styled.form`
    width: 100%;
    text-align: left;
`;

const InputGroup = styled.div`
    margin-bottom: 1.5rem;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 0.5rem;
    color: #495057;
    font-weight: 500;
    font-size: 0.9rem;
`;

const Input = styled.input`
    width: 100%;
    padding: 0.8rem 1rem;
    border: 1px solid #ced4da;
    border-radius: 8px;
    box-sizing: border-box;
    transition: border-color 0.2s, box-shadow 0.2s;

    &:focus {
        border-color: #12577B;
        box-shadow: 0 0 0 3px rgba(18, 87, 123, 0.1);
        outline: none;
    }
`;

const Button = styled.button`
    width: 100%;
    padding: 0.9rem;
    background-color: #12577B;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    transition: background-color 0.3s;
    margin-top: 1rem;

    &:hover {
        background-color: #021B33;
    }
`;

const RedirectLink = styled.p`
    font-size: 0.9rem;
    color: #495057;
    margin-top: 2rem;

    a {
        color: #12577B;
        font-weight: 600;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const ErrorMessage = styled.p`
    color: #d93025;
    font-size: 0.85rem;
    text-align: left;
    margin-top: -0.5rem;
    margin-bottom: 1rem;
    min-height: 1.2rem;
`;

// Component
export default function RegisterForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !password || !confirmPassword) {
            setError('Por favor, preencha todos os campos.');
            return;
        }
        if (password !== confirmPassword) {
            setError('As senhas não coincidem.');
            return;
        }
        setError('');
        // Mock registration logic
        console.log('Registering user:', { name, email });
        alert('Registro (simulado) bem-sucedido!');
    };

    return (
        <Layout>
            <RegisterContainer>
                <AuthCard>
                <Title>Criar Conta</Title>
                <Form onSubmit={handleSubmit} noValidate>
                    <InputGroup>
                        <Label htmlFor="name">Nome</Label>
                        <Input 
                            type="text" 
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </InputGroup>
                    <InputGroup>
                        <Label htmlFor="email">E-mail</Label>
                        <Input 
                            type="email" 
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </InputGroup>
                    <InputGroup>
                        <Label htmlFor="password">Senha</Label>
                        <Input 
                            type="password" 
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </InputGroup>
                    <InputGroup>
                        <Label htmlFor="confirmPassword">Confirmar Senha</Label>
                        <Input 
                            type="password" 
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </InputGroup>
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    <Button type="submit">Criar Conta</Button>
                </Form>
                <RedirectLink>
                    Já tem uma conta? <Link to="/login">Faça login</Link>
                </RedirectLink>
            </AuthCard>
            </RegisterContainer>
        </Layout>
    );
}
