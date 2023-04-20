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
                I'm a self-taught front-end web developer. I am currently
                attending Bengaluru University to get my bachelor's in computer
                applications. As a web designer and developer, I'm passionate
                about creating aesthetically pleasing and user-friendly
                websites. I am knowledgeable with a variety of web development
                frameworks, HTML, CSS, and JavaScript. As a self-taught
                developer, I have finished a number of projects that highlight
                my qualifications. This website serves as a platform for me to
                highlight my work and show off my skills and experience in web
                development.
            </motion.p>
        </section>
    );
}

export default Content;
