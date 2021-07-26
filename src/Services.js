import "./Services.css";
import Egg from "./Images/image-transform.jpg";
import StandOut from "./Images/image-stand-out.jpg";
import gd from "./Images/image-graphic-design.jpg";
import photo from "./Images/image-photography.jpg";
function Services()
{
	return <div className="Services">
	  <div class="container">
        <div class="row">
          <div class="col col-lg-6 col-md-12 col-sm-12 col-12 order-lg-first order-xl-first text">
            <h3 className="service-heading">Transform your brand</h3>
            <center>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.<br /><br /></center>
            <a href="#">LEARN MORE</a>
            </div>
          <div class="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 order-md-first order-sm-first order-first">
            <img class="ServiceImage" src={Egg}/>
          </div>
        </div>
        <div class="row">
          <div class="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
            <img class="ServiceImage" src={StandOut}/>
          </div>
          <div class="col col-lg-6 col-xl-6 col-md-12 col-sm-12 col-12 text">
            <h3 className="service-heading">Stand out to the right audience</h3>
            <center>Using a collaborative formula of designers, researchers, photographers, videographers, and coopywriters, we'll build and extend your brand in digital places.<br /><br /></center>
            <a href="#">LEARN MORE</a>
          </div>
        </div>
        <div class="row">
          <div class="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 text standOut">
            <h3 className="service-heading">Graphic design</h3>
            <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
          </div>
          <div class="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 text photo">
            <h3 className="service-heading">Photography</h3>
            <center>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</center>
          </div>
        </div>
      </div>
	</div>
}

export default Services;