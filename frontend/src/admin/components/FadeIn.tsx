import React from 'react';
import { CSSTransition } from 'react-transition-group';


interface FadeInProps {
    in: boolean;
    children: React.ReactNode;
    timeout?: number;
}

const FadeIn: React.FC<FadeInProps> = ({ in: inProp, children, timeout = 3000 }) => {
    return (
        <CSSTransition
        in={inProp}
        timeout={timeout}
        classNames="fade"
        unmountOnExit
        >
            {children}
        </CSSTransition>
    );
};

export default FadeIn;