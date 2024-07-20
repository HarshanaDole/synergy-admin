import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children, animationType }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const animations = {
    slideInFromBottom: {
      transform: inView ? 'translateY(0)' : 'translateY(100px)',
      opacity: inView ? 1 : 0,
      config: { tension: 170, friction: 126 }
    },
    slideInFromTop: {
      transform: inView ? 'translateY(0)' : 'translateY(-100px)',
      opacity: inView ? 1 : 0,
      config: { tension: 170, friction: 126 }
    },  
    slideInFromLeft: {
      transform: inView ? 'translateX(0)' : 'translateX(-100px)',
      opacity: inView ? 1 : 0,
      config: { tension: 170, friction: 126 }
    },
    slideInFromRight: {
      transform: inView ? 'translateX(0)' : 'translateX(100px)',
      opacity: inView ? 1 : 0,
      config: { tension: 170, friction: 126 }
    },  
    fadeIn: {
      opacity: inView ? 1 : 0,
      config: { tension: 170, friction: 156 }
    },
    scaleUp: {
      transform: inView ? 'scale(1)' : 'scale(0.9)',
      opacity: inView ? 1 : 0,
      config: { tension: 170, friction: 156 }
    },
    popUp: {
      transform: inView ? 'scale(1)' : 'scale(0.3)',
      opacity: inView ? 1 : 0,
      config: { tension: 170, friction: 156 }
    },
    rotate: {
        transform: inView ? 'rotate(0deg)' : 'rotate(180deg)',
        opacity: inView ? 1 : 0,
        config: { tension: 170, friction: 26 }
    },
    zoomIn: {
        transform: inView ? 'scale(1)' : 'scale(0.5)',
        opacity: inView ? 1 : 0,
        config: { tension: 170, friction: 126 }
    }
  };

  const animation = useSpring(animations[animationType]);

  return (
    <animated.div ref={ref} style={animation}>
      {children}
    </animated.div>
  );
};

export default AnimatedSection;
