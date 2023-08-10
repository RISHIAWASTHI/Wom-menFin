import './style.css'
function App() {
    return (
      <main>
        <section className="container">
          <section className="card__container card__orange">
            
            <h2 className="card__name">Credit Risk
</h2>
            <div className="card__parr">
              <p>
              Credit risk is the potential loss a lender faces from borrower default on debt payments.
              </p>
            </div>
            <div className="card__linkcont">
              <a href='https://en.wikipedia.org/wiki/Credit_risk' className="link__card color__link__orange">Learn More</a>
            </div>
          </section>
  
          <section className="card__container card__green">
             
            <h2 className="card__name">Market Risk
</h2>
            <div className="card__parr">
              <p>
              Market risk is the risk of losses in positions arising from movements in market variables like prices and volatility.
              </p>
            </div>
            <div className="card__linkcont">
              <a href='https://en.wikipedia.org/wiki/Market_risk' className="link__card color__link__green">Learn More</a>
            </div>
          </section>
          
          <section className="card__container card__dark">
            
            <h2 className="card__name">Interest Risk
</h2>
            <div className="card__parr">
              <p>
              Interest rate risk is the risk that interest rates or the implied volatility will change
              </p>
            </div>
            <div className="card__linkcont">
              <a href='https://en.wikipedia.org/wiki/Interest_rate_risk' className="link__card color__link__dark">Learn More</a>
            </div>
          </section>
  
        </section>
      </main>
    );
  }
  
  export default App;