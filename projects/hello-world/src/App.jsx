import './App.css';
import './index.css';
import TwitterFollowCard from './TwitterFollowCard';

export function App() {
    return (
        <section className='App'>
            <TwitterFollowCard name='Diego Ortiz Gamboa' userName='diegofergamboa'/>
            <TwitterFollowCard name='Fernando Ortiz' userName='fernandoortiz'/>
        </section>
    )
}

