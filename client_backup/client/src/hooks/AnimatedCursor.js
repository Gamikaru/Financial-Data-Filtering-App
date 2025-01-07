// react-portfolio/src/hooks/AnimatedCursor.js

import React, { useEffect, useRef, useState, useCallback } from "react";

const IsDevice = (() => {
    if (typeof navigator === 'undefined') return {};

    const ua = navigator.userAgent;

    return {
        any: () =>
            /Android|BlackBerry|IEMobile|iPhone|iPad|iPod|Opera Mini/i.test(ua),
    };
})();

function useEventListener(event, handler, element = document) {
    const savedHandler = useRef();

    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(() => {
        if (!element?.addEventListener) return;
        const listener = (e) => savedHandler.current(e);
        element.addEventListener(event, listener);
        return () => element.removeEventListener(event, listener);
    }, [event, element]);
}

const CursorCore = ({
    outerStyle = {},
    innerStyle = {},
    color = '220, 220, 220',
    outerAlpha = 0.2,
    innerSize = 8,
    outerSize = 8,
    outerScale = 3,
    innerScale = 0.8,
    trailingSpeed = 12,
    clickables = ['a', 'button', 'input', 'textarea', '.link']
}) => {
    const cursorOuter = useRef(null);
    const cursorInner = useRef(null);
    const requestRef = useRef();
    const coords = useRef({ x: 0, y: 0 });
    const end = useRef({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);
    const [active, setActive] = useState(false);

    const onMouseMove = useCallback(({ clientX, clientY }) => {
        end.current = { x: clientX, y: clientY };
        cursorInner.current.style.transform = `translate(${clientX}px, ${clientY}px) scale(${active ? innerScale : 1})`;
    }, [active, innerScale]);

    const animate = useCallback((time) => {
        coords.current.x += (end.current.x - coords.current.x) / trailingSpeed;
        coords.current.y += (end.current.y - coords.current.y) / trailingSpeed;
        cursorOuter.current.style.transform = `translate(${coords.current.x}px, ${coords.current.y}px) scale(${active ? outerScale : 1})`;
        requestRef.current = requestAnimationFrame(animate);
    }, [trailingSpeed, active, outerScale]);

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, [animate]);

    useEventListener('mousemove', onMouseMove);
    useEventListener('mousedown', () => setActive(true));
    useEventListener('mouseup', () => setActive(false));
    useEventListener('mouseenter', () => setVisible(true));
    useEventListener('mouseleave', () => setVisible(false));

    useEffect(() => {
        document.body.style.cursor = 'none';
    }, []);

    useEffect(() => {
        const elems = document.querySelectorAll(clickables.join(','));
        elems.forEach(el => {
            el.style.cursor = 'none';
            el.addEventListener('mouseover', () => setActive(true));
            el.addEventListener('mouseout', () => setActive(false));
        });
        return () => {
            elems.forEach(el => {
                el.style.cursor = '';
                el.removeEventListener('mouseover', () => setActive(true));
                el.removeEventListener('mouseout', () => setActive(false));
            });
        };
    }, [clickables]);

    const styles = {
        outer: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: outerSize,
            height: outerSize,
            backgroundColor: `rgba(${color}, ${outerAlpha})`,
            borderRadius: '50%',
            pointerEvents: 'none',
            transform: 'translate(-50%, -50%)',
            transition: 'transform 0.15s ease-out',
            opacity: visible ? 1 : 0,
            zIndex: 9999,
            ...outerStyle
        },
        inner: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: innerSize,
            height: innerSize,
            backgroundColor: `rgba(${color}, 1)`,
            borderRadius: '50%',
            pointerEvents: 'none',
            transform: 'translate(-50%, -50%)',
            transition: 'transform 0.15s ease-out',
            opacity: visible ? 1 : 0,
            zIndex: 9999,
            ...innerStyle
        }
    };

    return (
        <>
            <div ref={cursorOuter} style={styles.outer} />
            <div ref={cursorInner} style={styles.inner} />
        </>
    );
};

const AnimatedCursor = (props) => {
    if (IsDevice.any()) return null;
    return <CursorCore {...props} />;
};

export default AnimatedCursor;
