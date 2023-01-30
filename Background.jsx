import React from 'react';
import { motion } from 'framer-motion';

export function Background({}) {
    return (
        <div className="fixed flex items-center justify-center inset-0 md:scale-110 lg:scale-125">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3 }}
                className="h-64 w-64 relative"
            >
                <motion.div
                    initial={{ y: 400, x: 400 }}
                    animate={{ y: 0, x: 0 }}
                    transition={{ duration: 3 }}
                    className="h-36 w-36 rounded-full bg-neon-orange absolute  mix-blend-multiply top-0"
                ></motion.div>
                <motion.div
                    initial={{ y: -400, x: 400 }}
                    animate={{ y: 0, x: 0 }}
                    transition={{ duration: 3 }}
                    className="h-44 w-44 rounded-full bg-neon-yellow  absolute  mix-blend-multiply right-0"
                ></motion.div>
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 3 }}
                    className="h-36 w-36 rounded-full bg-neon-pink absolute  mix-blend-multiply bottom-0 right-10  "
                ></motion.div>
            </motion.div>
        </div>
    );
}
