import {Component} from 'react'
import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/searchBox.component";
import SelectMonster from "./components/select-monster/select-monster.component";
import ScrollTopArrow from './components/scroll-top-arrow/scroll-top-arrow.component'

class App extends Component{
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField:'',
            monsterType: 1
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(users => this.setState({monsters:users}));
    }
    handleChange = (e) => {
        this.setState({searchField: e.target.value})
    }
    handleSelect = (e) => {
        this.setState({
            monsterType:e.target.value
        })
    }
    handleScrollUp(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
    render() {
        const { monsters, searchField, monsterType } = this.state

        const filterdMonsters = monsters.filter ( monster=>
            monster.title.split(' ').slice(0,2).join(' ').toLowerCase().includes(searchField.toLowerCase())
        )
        return(
            <div>
                <header>
                    <h1 className="page-title">Mosters Index</h1>
                    <div className="filters-container">
                        <SearchBox
                            placeholder="Find your monster..."
                            handleChange={this.handleChange}
                        />
                        <SelectMonster
                            type={this.state.monsterType}
                            handleSelect={this.handleSelect}
                        />
                    </div>
                </header>
                <main>
                    <CardList monsters={filterdMonsters} monsterType={monsterType}/>
                </main>
                <footer>
                    <div className="footer-left">
                        This project was made with <a href="https://reactjs.org/" target="_blank" rel="noreferrer nofollow">React</a>
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
                    <ScrollTopArrow handleScrollUp={this.handleScrollUp}/>
                </footer>
            </div>
        )
    }

}

export default App
