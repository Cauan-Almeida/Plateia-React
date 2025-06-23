import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const FooterContainer = styled.footer`
    background-color: #021B33; /* --primary-dark */
    color: #F7F7F7; /* --light-color */
    padding: 4rem 2rem;
`;

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`;

const FooterTop = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
    margin-bottom: 3rem;
`;

const FooterColumn = styled.div`
    flex: 1;
    min-width: 180px;

    h3 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
        color: #A9CFE5; /* --secondary-color */
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        margin-bottom: 0.75rem;
    }

    a,
    span {
        color: #F7F7F7; /* --light-color */
        text-decoration: none;
        transition: color 0.3s ease;
        &:hover {
            color: #A9CFE5; /* --secondary-color */
        }
    }
`;

const FooterBottom = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #12577B; /* --primary-color */
    padding-top: 2rem;
    gap: 1.5rem;
`;

const SocialLinks = styled.div`
    display: flex;
    gap: 1.5rem;

    a {
        color: #F7F7F7;
        font-size: 1.5rem;
        transition: color 0.3s ease;
        &:hover {
            color: #A9CFE5; /* --secondary-color */
        }
    }
`;

const Copyright = styled.p`
    font-size: 0.9rem;
    text-align: center;
    flex-grow: 1;
`;

export default function Footer() {
    return (
        <FooterContainer>
            <Container>
                <FooterTop>
                    <FooterColumn>
                        <h3>Produto</h3>
                        <ul>
                            <li><ScrollLink to="recursos" smooth={true} duration={500} offset={-80} style={{cursor: 'pointer'}}>Recursos</ScrollLink></li>
                            <li><Link to="/">Preços</Link></li>
                        </ul>
                    </FooterColumn>
                    <FooterColumn>
                        <h3>Empresa</h3>
                        <ul>
                            <li><Link to="/">Sobre Nós</Link></li>
                            <li><Link to="/contato">Contato</Link></li>
                        </ul>
                    </FooterColumn>
                    <FooterColumn>
                        <h3>Legal</h3>
                        <ul>
                            <li><Link to="/termos-de-servico">Termos de Serviço</Link></li>
                            <li><Link to="/politica-de-privacidade">Política de Privacidade</Link></li>
                        </ul>
                    </FooterColumn>
                </FooterTop>
                <FooterBottom>
                     <SocialLinks>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
                    </SocialLinks>
                    <Copyright>Copyright 2024 Plateia - Todos os direitos reservados.</Copyright>
                </FooterBottom>
            </Container>
        </FooterContainer>
    );
}
