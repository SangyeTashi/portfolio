import Header from './Header';
import './App.css';
import Content from './Content';

function App() {
    return (
        <div className=" bg-primary text-white">
            <div className="max-w-5xl mx-auto relative">
                <Header />

                <Content />
                <Content />
            </div>
        </div>
    );
}

export default App;
