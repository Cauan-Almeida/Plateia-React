import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';


const HeaderContainer = styled.header`
    position: relative; /* Changed from fixed to relative for auth pages */
    width: 100%;
    background-color: #021B33; /* --primary-dark */
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    padding: 1.2rem 0;
`;

const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem; /* --spacing-sm */
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled(Link)`
    display: flex;
    align-items: center;
    img {
        width: 110px;
    }
`;

const NavMenu = styled.nav`
    display: none;
    @media (min-width: 768px) {
        display: block;
        ul {
            display: flex;
            list-style: none;
            gap: 2rem; /* --spacing-md */
        }
    }
`;

const linkStyles = `
    color: #F7F7F7; /* --light-color */
    font-weight: 500;
    padding: 0.5rem 0.8rem;
    position: relative;
    text-decoration: none;
    cursor: pointer;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #A9CFE5; /* --secondary-color */
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 0.3s ease;
    }

    &:hover::after, &.active::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }

    &.active {
        color: #A9CFE5; /* --secondary-color */
    }
`;

const StyledNavLink = styled(NavLink)`
    ${linkStyles}
`;

const AuthButtonLink = styled(Link)`
    display: inline-block;
    padding: 0.6rem 1.5rem;
    border: 1px solid #A9CFE5; /* --secondary-color */
    border-radius: 50px;
    color: #A9CFE5; /* --secondary-color */
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;

    &:hover {
        background-color: #A9CFE5;
        color: #12577B;
    }

    &.primary {
        background-color: #A9CFE5;
        color: #12577B;

        &:hover {
            background-color: #97b9cc;
        }
    }
`;

const StyledScrollLink = styled(ScrollLink)`
    ${linkStyles}
`;

const AuthButtons = styled.div`
    display: none;
    @media (min-width: 768px) {
        display: flex;
        gap: 1rem;
    }
`;

const Btn = styled(Link)`
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.9rem;
    border: 2px solid transparent;

    &.btn-outline {
        border-color: #A9CFE5; /* --secondary-color */
        color: #A9CFE5;
        &:hover {
            background-color: #A9CFE5;
            color: #021B33;
        }
    }

    &.btn-primary {
        background-color: #12577B; /* --primary-color */
        color: white;
        &:hover {
            background-color: #A9CFE5;
            border-color: #A9CFE5;
            color: #021B33;
        }
    }
`;

const MenuToggle = styled.div`
    display: block;
    font-size: 1.5rem;
    color: white;
    cursor: pointer;
    @media (min-width: 768px) {
        display: none;
    }
`;

const MobileMenu = styled.div`
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #021B33; /* --primary-dark */
    padding: 1rem 0;

    ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
    }
`;

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <HeaderContainer>
            <Container>
                <Logo to="/">
                    <img src="/images/logo2.0.png" alt="Plateia" />
                </Logo>
                <NavMenu>
                    <ul>
                        <li><StyledNavLink to="/">Início</StyledNavLink></li>
                        <li><StyledScrollLink to="recursos" smooth={true} duration={500} spy={true} activeClass="active" offset={-80}>Recursos</StyledScrollLink></li>
                        <li><StyledNavLink to="/contato">Contato</StyledNavLink></li>
                    </ul>
                </NavMenu>
                                <AuthButtons>
                    <AuthButtonLink to="/login">Entrar</AuthButtonLink>
                    <AuthButtonLink to="/register" className="primary">Inscreva-se</AuthButtonLink>
                </AuthButtons>
                <MenuToggle onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
                </MenuToggle>
            </Container>
            <MobileMenu isOpen={isMenuOpen}>
                <ul>
                    <li><StyledNavLink to="/" onClick={() => setIsMenuOpen(false)}>Início</StyledNavLink></li>
                    <li><StyledScrollLink to="recursos" smooth={true} duration={500} spy={true} activeClass="active" offset={-80} onClick={() => setIsMenuOpen(false)}>Recursos</StyledScrollLink></li>
                    <li><StyledNavLink to="/contato" onClick={() => setIsMenuOpen(false)}>Contato</StyledNavLink></li>
                                        <li><AuthButtonLink to="/login" onClick={() => setIsMenuOpen(false)}>Entrar</AuthButtonLink></li>
                    <li><AuthButtonLink to="/register" onClick={() => setIsMenuOpen(false)} className="primary">Inscreva-se</AuthButtonLink></li>
                </ul>
            </MobileMenu>
        </HeaderContainer>
    );
}
