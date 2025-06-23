import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import FadeIn from '../components/FadeIn';


const HeroSection = styled.section`
    position: relative;
    height: 90vh;
    min-height: 600px;
    background-image: url('/images/Hero.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    color: white;
    text-align: left;

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(2, 27, 51, 0.7);
        z-index: 1;
    }
`;

const HeroContainer = styled.div`
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
`;

const HeroContent = styled.div`
    max-width: 700px;
    h1 {
        font-size: 3.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
        line-height: 1.2;
    }
    p {
        font-size: 1.3rem;
        margin-bottom: 2rem;
        opacity: 0.9;
    }
`;

const Btn = styled(Link)`
    display: inline-block;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1rem;
    background-color: #12577B; /* --primary-color */
    color: white;
    border: 2px solid #12577B;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-decoration: none;

    &:hover {
        background-color: #021B33; /* --primary-dark */
        border-color: #021B33;
        transform: translateY(-2px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        text-decoration: none;
    }
`;

const Features = styled.section`
    padding: 5rem 0;
    background-color: #F7F7F7; /* --light-color */
`;

const SectionHeader = styled.div`
    text-align: center;
    margin-bottom: 3rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;

    h2 {
        font-size: 2.5rem;
        color: #021B33; /* --accent-color */
        margin-bottom: 1rem;
    }

    p {
        color: #64748b; /* --gray-color */
        font-size: 1.1rem;
    }
`;

const FeatureBlock = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
    margin-bottom: 5rem;
    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
`;

const FeatureContent = styled.div`
    flex: 1;
    h3 {
        font-size: 2rem;
        color: #021B33; /* --primary-dark */
        margin-bottom: 1rem;
    }
    p {
        color: #64748b; /* --gray-color */
        margin-bottom: 2rem;
    }
`;

const FeatureImage = styled.div`
    flex: 1;
    img {
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        width: 100%;
        height: 350px;
        object-fit: cover;
    }
`;

const Testimonials = styled.section`
    padding: 5rem 0;
    background-color: #A9CFE5; /* --secondary-color */
    position: relative;
    overflow: hidden;
`;

const TestimonialCarousel = styled.div`
    display: flex;
    transition: transform 0.5s ease-in-out;
    transform: ${props => `translateX(-${props.currentIndex * 100}%)`};
`;

const TestimonialSlide = styled.div`
    min-width: 100%;
    padding: 0 2rem; /* Adjust padding to show parts of other slides if desired */
    box-sizing: border-box;
`;

const TestimonialCard = styled.div`
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    text-align: center;
    max-width: 700px;
    margin: 0 auto;

    p {
        margin-bottom: 1rem;
        font-style: italic;
    }

    h4 {
        font-weight: 600;
        color: #12577B;
    }
`;

const CarouselControls = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;

    button {
        background: transparent;
        border: 2px solid white;
        color: white;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        cursor: pointer;
        margin: 0 1rem;
        transition: all 0.3s ease;
        text-decoration: none;

        &:hover {
            background: white;
            color: #12577B;
            text-decoration: none;
        }
    }
`;

const Dots = styled.div`
    display: flex;
    gap: 0.8rem;
`;

const Dot = styled.span`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${props => props.active ? 'white' : 'rgba(255,255,255,0.5)'};
    cursor: pointer;
    transition: background-color 0.3s ease;
`;

const CtaSection = styled.section`
    padding: 5rem 0;
    background-color: #F7F7F7; /* --light-color */
    text-align: center;

    h2 {
        font-size: 2.5rem;
        color: #021B33; /* --accent-color */
        margin-bottom: 1rem;
    }

    p {
        color: #64748b; /* --gray-color */
        font-size: 1.1rem;
        margin-bottom: 2rem;
    }
`;

const testimonials = [
    {
        quote: "A Plateia transformou minha forma de me comunicar em público. Agora me sinto confiante em qualquer apresentação!",
        author: "Emily Carter"
    },
    {
        quote: "O feedback detalhado me ajudou a identificar e corrigir problemas que eu nem sabia que tinha nas minhas apresentações.",
        author: "Michael Tran"
    },
    {
        quote: "Minha carreira deu um salto depois que comecei a usar a Plateia. As técnicas e o suporte da comunidade são excepcionais!",
        author: "Sophia Lee"
    }
];


export default function HomePage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrentIndex(prevIndex => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, []);

    const prevSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        if (!isPaused) {
            const slideInterval = setInterval(nextSlide, 5000);
            return () => clearInterval(slideInterval);
        }
    }, [currentIndex, isPaused, nextSlide]);
    return (
        <Layout>
            <HeroSection>
                <div className="overlay"></div>
                <HeroContainer>
                    <HeroContent>
                        <h1>Melhore suas habilidades de falar em público</h1>
                        <p>Domine a arte da comunicação com a orientação especializada da Plateia.</p>
                        <Btn to="/register">Começar</Btn>
                    </HeroContent>
                </HeroContainer>
            </HeroSection>

                        <Features id="recursos">
                <HeroContainer>
                    <FadeIn>
                        <SectionHeader>
                            <h2>Visão Geral dos Recursos</h2>
                            <p>Explore os principais recursos da Plateia que ajudarão a aprimorar e desenvolver suas habilidades de comunicação e apresentação para impactar seu público.</p>
                        </SectionHeader>
                    </FadeIn>
                    <FadeIn delay="0.2s">
                        <FeatureBlock>
                            <FeatureContent>
                                <h3>Prática Colaborativa</h3>
                                <p>Aprimore suas habilidades de apresentação com a prática colaborativa e receba feedback construtivo dos colegas, ajudando a identificar pontos fortes e áreas de melhoria.</p>
                                <Btn to="/register">Experimente agora</Btn>
                            </FeatureContent>
                            <FeatureImage>
                                <img src="/images/praticacolaborativa.jpg" alt="Prática Colaborativa" />
                            </FeatureImage>
                        </FeatureBlock>
                    </FadeIn>
                    <FadeIn delay="0.4s">
                        <FeatureBlock reverse>
                            <FeatureContent>
                                <h3>Mecanismo de Feedback</h3>
                                <p>Receba um feedback detalhado e objetivo sobre suas apresentações, com métricas e sugestões personalizadas para aprimorar sua comunicação verbal.</p>
                                <Btn to="/register">Experimente agora</Btn>
                            </FeatureContent>
                            <FeatureImage>
                                <img src="/images/feedback.jpg" alt="Mecanismo de Feedback" />
                            </FeatureImage>
                        </FeatureBlock>
                    </FadeIn>
                </HeroContainer>
            </Features>

            <FadeIn>
                <Testimonials onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
                    <HeroContainer>
                        <SectionHeader>
                            <h2>Avaliações dos nossos usuários!</h2>
                        </SectionHeader>
                        <TestimonialCarousel currentIndex={currentIndex}>
                            {testimonials.map((testimonial, index) => (
                                <TestimonialSlide key={index}>
                                    <TestimonialCard>
                                        <p>"{testimonial.quote}"</p>
                                        <h4>- {testimonial.author}</h4>
                                    </TestimonialCard>
                                </TestimonialSlide>
                            ))}
                        </TestimonialCarousel>
                        <CarouselControls>
                            <button onClick={prevSlide}><i className="fas fa-chevron-left"></i></button>
                            <Dots>
                                {testimonials.map((_, index) => (
                                    <Dot key={index} active={index === currentIndex} onClick={() => goToSlide(index)} />
                                ))}
                            </Dots>
                            <button onClick={nextSlide}><i className="fas fa-chevron-right"></i></button>
                        </CarouselControls>
                    </HeroContainer>
                </Testimonials>
            </FadeIn>

            <FadeIn>
                <CtaSection>
                    <HeroContainer>
                        <h2>Junte-se à Família Plateia</h2>
                        <p>Comece sua jornada hoje mesmo e transforme sua comunicação em público.</p>
                        <Btn to="/register">Inscreva-se agora</Btn>
                    </HeroContainer>
                </CtaSection>
            </FadeIn>
        </Layout>
    );
}
