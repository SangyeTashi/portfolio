import { Background } from './../Background';
import Header from './Header';
import './App.css';
import Content from './Content';
import { motion, useScroll } from 'framer-motion';

function App() {
    return (
        <div className=" bg-slate-50 ">
            <div className="max-w-5xl mx-auto relative">
                <Background />
                <Header />

                <Content />
                <Content />

                {/* footer */}
            </div>
        </div>
    );
}

export default App;
