import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import FadeIn from '../components/FadeIn';

const StaticPageContainer = styled.div`
    padding: 5rem 2rem;
    max-width: 900px;
    margin: 0 auto;
`;

const SectionHeader = styled.div`
    text-align: center;
    margin-bottom: 3rem;
    h2 {
        font-size: 2.5rem;
        color: #12577B; // --primary-color
        margin-bottom: 0.5rem;
    }
`;

const Content = styled.div`
    color: #333;
    line-height: 1.8;

    h3 {
        font-size: 1.5rem;
        color: #12577B;
        margin-top: 2rem;
        margin-bottom: 1rem;
    }

    p {
        margin-bottom: 1rem;
    }

    ul {
        margin-left: 1.5rem;
        margin-bottom: 1rem;
    }
`;

export default function PrivacyPolicyPage() {
    return (
        <Layout>
            <StaticPageContainer>
                <FadeIn>
                    <SectionHeader>
                        <h2>Política de Privacidade</h2>
                    </SectionHeader>
                    <Content>
                        <h3>1. Coleta de Informações</h3>
                        <p>Coletamos informações que você nos fornece diretamente, como nome, e-mail e conteúdo de suas apresentações, para operar e melhorar nossos serviços.</p>

                        <h3>2. Uso das Informações</h3>
                        <p>Suas informações são usadas para personalizar sua experiência, fornecer suporte, e comunicar novidades sobre a plataforma. Não compartilhamos suas informações pessoais com terceiros sem seu consentimento.</p>

                        <h3>3. Segurança dos Dados</h3>
                        <p>Implementamos medidas de segurança para proteger suas informações contra acesso não autorizado. No entanto, nenhum sistema é 100% seguro, e não podemos garantir a segurança absoluta dos seus dados.</p>

                        <h3>4. Seus Direitos</h3>
                        <p>Você tem o direito de acessar, corrigir ou excluir suas informações pessoais a qualquer momento. Entre em contato conosco para exercer esses direitos.</p>
                    </Content>
                </FadeIn>
            </StaticPageContainer>
        </Layout>
    );
}
