import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const FadeInWrapper = styled.div`
  opacity: ${props => (props.inView ? 1 : 0)};
  transform: ${props => (props.inView ? 'translateY(0)' : 'translateY(20px)')};
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  transition-delay: ${props => props.delay || '0s'};
`;

const FadeIn = ({ children, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animação acontece apenas uma vez
    threshold: 0.1,    // Dispara quando 10% do elemento está visível
  });

  return (
    <FadeInWrapper ref={ref} inView={inView} delay={delay}>
      {children}
    </FadeInWrapper>
  );
};

export default FadeIn;
