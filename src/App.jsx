import Header from './Header';
import './App.css';
import Content from './Content';
import { motion, useScroll } from 'framer-motion';

function App() {
    return (
        <div className=" bg-slate-50 ">
            <div className="max-w-5xl mx-auto relative">
                <div className="fixed flex items-center justify-center inset-0 md:scale-110 lg:scale-125">
                    <div className="w-64 h-64 relative ">
                        <div className="h-36 w-36 rounded-full bg-neon-orange absolute  mix-blend-multiply top-0"></div>
                        <div className="h-44 w-44 rounded-full bg-neon-yellow  absolute  mix-blend-multiply right-0 "></div>
                        <div className="h-36 w-36 rounded-full bg-neon-pink absolute  mix-blend-multiply bottom-0 right-14  "></div>
                    </div>
                </div>
                <Header />

                <Content />
                <Content />

                {/* footer */}
            </div>
        </div>
    );
}

export default App;
