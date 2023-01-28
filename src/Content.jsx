import { useRef, React } from 'react';
import TypeIt from 'typeit-react';
import { motion } from 'framer-motion';

function Content() {
    return (
        <section className="flex relative flex-col justify-center px-5 min-h-screen backdrop-blur-xl snap-center perspective">
            <h1 className="text-neon-blue text-3xl font-bold">
                Hi, I am{' '}
                <TypeIt
                    options={{
                        speed: 150,
                        startDelay: 500,
                        loop: true,
                        loopDelay: 1000,
                    }}
                    getBeforeInit={(instance) => {
                        instance
                            .type('Sangye Tashi.')
                            .pause(3000)
                            .delete(16)
                            .pause(300)
                            .type('a React Developer.')
                            .pause(3000);

                        return instance;
                    }}
                ></TypeIt>
            </h1>
            <h2 className="text-neon-pink font-medium">
                A Frontend React Developer
            </h2>
            <motion.p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                suscipit numquam laborum quaerat eius quis, molestias quisquam,
                reiciendis nemo aut temporibus ipsa dolores repudiandae
                perferendis laboriosam possimus quo laudantium fugit.
            </motion.p>
        </section>
    );
}

export default Content;
