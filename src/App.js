import React, {useState, useEffect} from 'react';
import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/searchBox.component";
import SelectMonster from "./components/select-monster/select-monster.component";
import ScrollTopArrow from './components/scroll-top-arrow/scroll-top-arrow.component'



const App = () => {
    const [monsters, setMonsters] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [monsterType, setMonsterType] = useState(1);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => setMonsters(data));
    }, []);

    const handleScrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const filteredMonsters = monsters.filter((monster) =>
        monster.title.split(' ').slice(0, 2).join(' ').toLowerCase().includes(searchField.toLowerCase())
    );
    return (
        <div>
            <header>
                <h1 className="page-title">
                    Monsters Index
                </h1>
                <div className="filters-container">
                    <SearchBox
                        placeholder="Find your monster..."
                        handleChange={(e) => setSearchField(e.target.value)}
                    />
                    <SelectMonster
                        type={monsterType}
                        handleSelect={(e) => setMonsterType(e.target.value)}
                    />
                </div>
            </header>
            <main>
                <CardList monsters={filteredMonsters}
                          monsterType={monsterType}
                />
            </main>
            <footer>
                <div className="footer-left">
                    This project was made with <a href="https://reactjs.org/" target="_blank"
                                                  rel="noreferrer nofollow">React</a>
                </div>
                <div className="footer-center">
                    Contact me
                    <ul className="social-list">
                        <li>
                            <a href="https://www.barbareshet.co.il" target="_blank" rel="noreferrer nofollow">
                                <i className="fas fa-globe"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/barbareshet" target="_blank" rel="noreferrer nofollow">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/BARBARESHET" target="_blank" rel="noreferrer nofollow">
                                <i className="fab fa-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/barbareshet/monsters" target="_blank" rel="noreferrer nofollow">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-right">
                    <h3>Other Resources</h3>
                    <ul>
                        <li>
                            <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noreferrer nofollow">
                                JSON Placeholder
                            </a>
                        </li>
                        <li>
                            <a href="https://robohash.org/" target="_blank" rel="noreferrer nofollow">
                                Robohash
                            </a>
                        </li>
                        <li>
                            <a href="react-reveal.com" target="_blank" rel="noreferrer nofollow">
                                React Reveal
                            </a>
                        </li>
                    </ul>
                </div>
                <ScrollTopArrow handleScrollUp={handleScrollUp}/>
            </footer>
        </div>
    );
};

export default App;


