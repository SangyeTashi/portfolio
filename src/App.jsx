import Header from './Header';
import './App.css';
import Content from './Content';

function App() {
    return (
        <div className="h-screen ">
            <div className="max-w-5xl mx-auto relative">
                <Header />

                <Content />
                <Content />
            </div>
        </div>
    );
}

export default App;
