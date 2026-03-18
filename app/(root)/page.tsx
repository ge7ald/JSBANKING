import HeaderBox from "@/components/ui/HeaderBox"
import TotalBalanceBox from "@/components/TotalBalanceBox"
import MobileSidebar from "./MobileSidebar"

const Home = () => {
    const loggedIn = { firstName: 'Gerald'}
    return (
        <section className="home">
            <div className="home-content ">
                <header className="home-header">
                    <HeaderBox 
                    type="greeting"
                    title="Welcome,"
                    user={loggedIn?.firstName || 'Guest'}
                    subtext="Access and manage your account and transactions efficiently."
                    />

                    <TotalBalanceBox 
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.35}
                    />
                </header>
              <MobileSidebar user={loggedIn}/>
            </div>
        </section>
    )
}

export default Home