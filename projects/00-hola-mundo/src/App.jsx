import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    
    return(
        <section className='App'>
        <TwitterFollowCard isFollowing userName="Sbector" name="Saúl Becerra Torres"/>
        <TwitterFollowCard isFollowing={false} userName="mrdoob" name="Jacob"/>
        </section>
        
    )
}