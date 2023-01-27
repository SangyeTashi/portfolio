import Header from './Header';
import './App.css';
import Content from './Content';

function App() {
    return (
        <div className=" bg-slate-50 ">
            <div className="max-w-5xl space-y-3 mx-auto">
                <Header />
                <Content />
                {/* footer */}
            </div>
        </div>
    );
}

export default App;
