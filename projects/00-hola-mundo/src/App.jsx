import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
    {
        userName: "Sbector",
        name: "Saúl Becerra Torres",
        isFollowing: true
    },
    {
        userName: "mrdoob",
        name: "Jacob",
        isFollowing: false
    }
]

export function App() {
  return (
    <section className="App">
        {
        users.map(( {userName, name, isFollowing} )=>(
            <TwitterFollowCard
            userName={userName}
            initialIsFollowing={isFollowing}
            key={userName}>
            {name}
            </TwitterFollowCard>
        )
    )
    }
    </section>
  );
}
