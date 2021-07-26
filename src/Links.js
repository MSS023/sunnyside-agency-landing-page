import "./Links.css";
import FB from "./Images/icon-facebook.svg";
import IG from "./Images/icon-instagram.svg";
import Pi from "./Images/icon-pinterest.svg";
import Tw from "./Images/icon-twitter.svg";

function Links(){
	return <div className="Links">
	<h3 className="linklogo">sunnyside</h3>
	<a className="link" href="#">About</a>
	<a className="link" href="#">Services</a>
	<a className="link" href="#">Projects</a>
	<br />
	<br />
	<br />
	<img className="social" src={FB} href="#" />
	<img className="social" src={IG} href="#" />
	<img className="social" src={Tw} href="#" />
	<img className="social" src={Pi} href="#" />
	</div>
}
	
export default Links;