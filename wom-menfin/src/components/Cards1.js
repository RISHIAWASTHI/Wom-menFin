import './style.css'
function App() {
    return (
        <main>
            <section className="container">
                <section className="card__container card__orange">

                    <h2 className="card__name">Score 1-4
                    </h2>
                    <div className="card__parr">
                        <p>
                            Unlock Financial Empowerment: Explore Basic Finance Knowledge Here.
                        </p>
                    </div>
                    <div className="card__linkcont">
                        <a href='https://www.capitalone.com/learn-grow/money-management/financial-literacy/' className="link__card color__link__orange">Learn More</a>
                    </div>
                </section>

                <section className="card__container card__green">

                    <h2 className="card__name">Score 5-8
                    </h2>
                    <div className="card__parr">
                        <p>
                            Dive Deeper into Financial Mastery: Explore Intermediate Finance Knowledge Here.
                        </p>
                    </div>
                    <div className="card__linkcont">
                        <a href='https://www.investopedia.com/guide-to-financial-literacy-4800530' className="link__card color__link__green">Learn More</a>
                    </div>
                </section>

                <section className="card__container card__dark">

                    <h2 className="card__name">Score 9-10
                    </h2>
                    <div className="card__parr">
                        <p>
                            Master Advanced Finance Concepts: Explore In-Depth Financial Knowledge Here.
                        </p>
                    </div>
                    <div className="card__linkcont">
                        <a href='https://foundr.com/articles/building-a-business/finance/financial-concepts' className="link__card color__link__dark">Learn More</a>
                    </div>
                </section>

            </section>
        </main>
    );
}

export default App;