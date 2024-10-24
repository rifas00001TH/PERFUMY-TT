
import one from "../assets/img/one.jpg";
import three from "../assets/img/three.jpg";
import two from "../assets/img/two.jpg";


function Product() {
    return(
      <div className="products">
          <div className="box">
                  <img src={one} alt="one"/>
                  <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>    
              </div>
              <div className="box">
                  <img src={three} alt="villain"/>
                  <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p> 
              </div>
              <div className="box">
                  <img src={two} alt="Designs Club"/>
                  <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
              </div>
  
      </div>
    );
  }
  export default Product