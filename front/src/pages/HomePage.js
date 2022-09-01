import MoreInfo from '../components/MoreInfo.js'

function HomePage() {
    return (
        <>
        <header> 
        <h1>Latest News</h1>
        </header>
        <h1>Patch 3.1416 notes</h1>
      <div className="tarjeta">
        <div className="contenido">
            <div className="ladoIzq">
            <h2 className="titulo">Champion Reworks</h2>
            <div className="cuerpo">
            <p>Lorem Ipsum 1.</p>
            <MoreInfo />
            </div>
         </div>
          <div className="ladoDer">
             <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zyra_0.jpg" max-height="500px"  max-width="none"/></div>
          </div>
      </div>
      
      <div className="tarjeta">
        <div className="contenido">
            <div className="ladoIzq">
            <h2 className="titulo">Skills Balance</h2>
            <div className="cuerpo">
            <p>Lorem Ipsum 2.</p>
            <MoreInfo />
                  
            </div>
         </div>
          <div className="ladoDer">
             <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/af450780816057.5cec70851a48b.jpg" max-height="500px"  /></div>
          </div>
      </div>
      
      <div className="tarjeta">
        <div className="contenido">
            <div className="ladoIzq">
            <h2 className="titulo">Items Balance</h2>
            <div className="cuerpo">
            <p>Lorem Ipsum 3.</p>
            <MoreInfo />
                 
            </div>
         </div>
          <div className="ladoDer">
             <img src="https://gameriv.com/wp-content/uploads/2020/11/new-icons.jpg" max-height="500px" /></div>
          </div>
      </div>
      </>
    )
  }  

  export default HomePage;

