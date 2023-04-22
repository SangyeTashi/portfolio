import React from 'react';
import { motion } from 'framer-motion';
function MenuItem({ text }) {
    return (
        <motion.div
            className="cursor-pointer  rounded-md py-0.5 px-2 hover:text-neon-yellow font-medium text-lg"
            onHoverStart={{}}
        >
            {text}
        </motion.div>
    );
}

export default MenuItem;
