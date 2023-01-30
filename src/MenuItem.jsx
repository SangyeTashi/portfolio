import React from 'react';
import { motion } from 'framer-motion';
function MenuItem({ text }) {
    return (
        <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            className="cursor-pointer  rounded-md py-0.5 px-1"
        >
            {text}
        </motion.div>
    );
}

export default MenuItem;
