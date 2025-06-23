import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Layout from './Layout';

const LoginContainer = styled.div`
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

const Divider = styled.div`
    margin: 2rem 0;
    text-align: center;
    color: #adb5bd;
    display: flex;
    align-items: center;

    &::before, &::after {
        content: '';
        flex: 1;
        border-bottom: 1px solid #dee2e6;
    }

    span {
        padding: 0 1rem;
        font-size: 0.9rem;
    }
`;

const GoogleButton = styled.button`
    width: 100%;
    padding: 0.8rem;
    background-color: #ffffff;
    color: #495057;
    border: 1px solid #ced4da;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.95rem;
    font-weight: 500;
    transition: background-color 0.3s, border-color 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    &:hover {
        background-color: #f8f9fa;
    }
`;

const GoogleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039L38.804 9.196C34.973 5.887 29.803 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
        <path fill="#FF3D00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039L38.804 9.196C34.973 5.887 29.803 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"/>
        <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-6.627 0-12-5.373-12-12h-8c0 11.045 8.955 20 20 20z"/>
        <path fill="#1976D2" d="M43.611 20.083H24v8h11.303a12.04 12.04 0 0 1-4.087 6.462l6.19 5.238C42.012 35.245 44 30.028 44 24c0-1.341-.138-2.65-.389-3.917z"/>
    </svg>
);

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
export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Por favor, preencha todos os campos.');
            return;
        }
        setError('');
        // Mock login logic
        console.log('Logging in with:', { email, password });
        alert('Login (simulado) bem-sucedido!');
    };

    return (
        <Layout>
            <LoginContainer>
                <AuthCard>
                    <Title>Entrar</Title>
                    <Form onSubmit={handleSubmit} noValidate>
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
                        {error && <ErrorMessage>{error}</ErrorMessage>}
                        <Button type="submit">Entrar</Button>
                    </Form>
                    <Divider><span>Ou entre com</span></Divider>
                    <GoogleButton>
                        <GoogleIcon />
                        Continuar com Google
                    </GoogleButton>
                    <RedirectLink>
                        Não tem uma conta? <Link to="/register">Registre-se</Link>
                    </RedirectLink>
                </AuthCard>
            </LoginContainer>
        </Layout>
    );
}
