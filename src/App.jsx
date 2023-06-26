import Header from './Header';
import './App.css';
import Projects from './Projects';
import Content from './Content';

function App() {
    return (
        <div className="h-screen ">
            <div className="max-w-5xl mx-auto relative">
                <Header />

                <Content />
                <Projects />
            </div>
        </div>
    );
}

export default App;
