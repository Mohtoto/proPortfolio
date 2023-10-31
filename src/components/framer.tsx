import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface FramerProps {
    children: React.ReactNode;
}

export default function Framer({ children }: FramerProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const rect = ref.current?.getBoundingClientRect();

        if (rect) {
            const { height, width, left, top } = rect;
            const middleX = clientX - (left + (width !== undefined ? width : 0) / 2);
            const middleY = clientY - (top + (height !== undefined ? height : 0) / 2);
            setPosition({ x: middleX, y: middleY });
        }
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;
    return (
        <motion.div
            style={{ position: 'relative' }}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </motion.div>
    );
}
