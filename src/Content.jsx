import { useRef, React } from 'react';
import TypeIt from 'typeit-react';
import { easeIn, motion } from 'framer-motion';

function Content() {
    return (
        <section className="flex relative items-center flex-col justify-center px-16 h-screen space-y-3">
            <h1 className="text-secondary text-5xl font-bold">
                <motion.div
                    className="flex flex-col items-center mb-6"
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
            <motion.p className="text-center">
                I'm a self-taught front-end web developer currently studying at
                Bengaluru University. As a web designer and developer, I'm
                passionate about creating aesthetically pleasing and
                user-friendly websites. I am knowledgeable with a variety of web
                development frameworks, HTML, CSS, and JavaScript. As a
                self-taught developer, I have finished a number of projects that
                highlight my qualifications. This website serves as a platform
                for me to highlight my work and show off my skills and
                experience in web development.
            </motion.p>
        </section>
    );
}

export default Content;
