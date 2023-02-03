import { useRef, React } from 'react';
import TypeIt from 'typeit-react';
import { easeIn, motion } from 'framer-motion';

function Content() {
    return (
        <section className="flex relative flex-col justify-center px-5 min-h-screen backdrop-blur-xl snap-center perspective space-y-3">
            <h1 className="text-neon-blue text-5xl font-bold">
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ ease: 'easeIn', duration: 1 }}
                >
                    <div>Hi, I am </div>
                    <TypeIt
                        options={{
                            speed: 100,
                            startDelay: 300,
                            loop: true,
                            loopDelay: 1000,
                        }}
                        getBeforeInit={(instance) => {
                            instance
                                .type('Sangye Tashi. ')
                                .pause(3000)
                                .delete(17)
                                .pause(300)
                                .type('a React Developer. ')
                                .pause(3000);

                            return instance;
                        }}
                    ></TypeIt>
                </motion.div>
            </h1>
            <h2 className="text-neon-pink font-medium">
                A Frontend React Developer
            </h2>
            <motion.p
                className="max-w-xl"
                initial={{ y: 400, opacity: 0 }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    ease: 'easeOut',
                    duration: 1,
                }}
                exit={{ opacity: 0 }}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                suscipit numquam laborum quaerat eius quis, molestias quisquam,
                reiciendis nemo aut temporibus ipsa dolores repudiandae
                perferendis laboriosam possimus quo laudantium fugit.
            </motion.p>
        </section>
    );
}

export default Content;
