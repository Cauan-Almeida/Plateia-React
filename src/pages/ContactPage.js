import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import FadeIn from '../components/FadeIn';

const ContactContainer = styled.div`
    padding: 5rem 2rem;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
`;

const SectionHeader = styled.div`
    margin-bottom: 3rem;
    h2 {
        font-size: 2.5rem;
        color: #12577B; // --primary-color
        margin-bottom: 0.5rem;
    }
    p {
        font-size: 1.1rem;
        color: #555;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    text-align: left;
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #333;
`;

const Input = styled.input`
    padding: 0.8rem 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;

    &:focus {
        outline: none;
        border-color: #12577B; // --primary-color
    }
`;

const Textarea = styled.textarea`
    padding: 0.8rem 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    min-height: 150px;
    resize: vertical;
    transition: border-color 0.3s ease;

    &:focus {
        outline: none;
        border-color: #12577B; // --primary-color
    }
`;

const SubmitButton = styled.button`
    padding: 1rem 2rem;
    background-color: #12577B; // --primary-color
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s ease;
    align-self: center;

    &:hover {
        background-color: #0F4C6A;
    }
`;

export default function ContactPage() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui iria a lógica de envio do formulário
        alert('Obrigado por sua mensagem! Entraremos em contato em breve.');
    };

    return (
        <Layout>
            <ContactContainer>
                <FadeIn>
                    <SectionHeader>
                        <h2>Entre em Contato</h2>
                        <p>Tem alguma dúvida ou sugestão? Preencha o formulário abaixo e nossa equipe responderá o mais rápido possível.</p>
                    </SectionHeader>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label htmlFor="name">Nome</Label>
                            <Input type="text" id="name" required />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" id="email" required />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="message">Mensagem</Label>
                            <Textarea id="message" required></Textarea>
                        </FormGroup>
                        <SubmitButton type="submit">Enviar Mensagem</SubmitButton>
                    </Form>
                </FadeIn>
            </ContactContainer>
        </Layout>
    );
}
