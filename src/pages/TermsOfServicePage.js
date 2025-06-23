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

export default function TermsOfServicePage() {
    return (
        <Layout>
            <StaticPageContainer>
                <FadeIn>
                    <SectionHeader>
                        <h2>Termos de Serviço</h2>
                    </SectionHeader>
                    <Content>
                        <h3>1. Aceitação dos Termos</h3>
                        <p>Ao acessar e usar a plataforma Plateia, você concorda em cumprir e estar sujeito a estes Termos de Serviço. Se você não concorda com estes termos, não deve usar nossos serviços.</p>

                        <h3>2. Descrição do Serviço</h3>
                        <p>A Plateia oferece uma plataforma para prática de apresentações, feedback colaborativo e desenvolvimento de habilidades de comunicação. Os recursos estão sujeitos a alterações e melhorias contínuas.</p>

                        <h3>3. Responsabilidades do Usuário</h3>
                        <p>Você é responsável por todo o conteúdo que envia e por suas interações na plataforma. Você concorda em não usar a plataforma para fins ilegais ou não autorizados.</p>

                        <h3>4. Limitação de Responsabilidade</h3>
                        <p>A Plateia não se responsabiliza por quaisquer danos diretos ou indiretos resultantes do uso ou da incapacidade de usar o serviço. O serviço é fornecido "como está", sem garantias de qualquer tipo.</p>
                    </Content>
                </FadeIn>
            </StaticPageContainer>
        </Layout>
    );
}
