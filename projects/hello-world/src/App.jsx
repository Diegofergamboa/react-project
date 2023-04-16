import './App.css';
import './index.css';
import TwitterFollowCard from './TwitterFollowCard';

export function App() {
    const formatUserName = (userName) => `@${userName}`

    return (
        <section className='App'>
            <TwitterFollowCard
                isFollowing={false}
                name='Diego Ortiz Gamboa'
                userName='diegofergamboa'
                formatUserName={formatUserName} />
            <TwitterFollowCard
                isFollowing
                name='Fernando Ortiz'
                userName='fernandoortiz'
                formatUserName={formatUserName} />
        </section>
    )
}

 