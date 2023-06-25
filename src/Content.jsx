import { useRef, React } from 'react';
import TypeIt from 'typeit-react';
import { easeIn, motion } from 'framer-motion';

function Content() {
    return (
        <section className="flex relative items-center flex-col justify-center px-16 h-screen space-y-3">
            <h1 className="text-secondary text-5xl font-mid">
                <motion.div className="flex  flex-col items-center mb-6">
                    <div>Hi! I am </div>
                    <TypeIt
                        className="text-center "
                        options={{
                            speed: 180,
                            startDelay: 300,
                            loop: true,
                            loopDelay: 3000,
                        }}
                        getBeforeInit={(instance) => {
                            instance
                                .type('Sangye Tashi. ')
                                .pause(3000)
                                .delete(17)
                                .pause(300)
                                .type('a <strong>React</strong> Developer.')
                                .pause(3000);

                            return instance;
                        }}
                    ></TypeIt>
                </motion.div>
            </h1>
            <motion.p className="text-center">
                I'm a self-taught React developer currently studying at
                Bengaluru University, looking for opportunities to break into
                the industry. As a web designer and developer, I'm passionate
                about creating aesthetically pleasing and user-friendly
                websites. I am knowledgeable with a variety of other web
                development technologies such as Tailwind, Git, HTML, CSS, and
                JavaScript.
            </motion.p>
        </section>
    );
}

export default Content;
