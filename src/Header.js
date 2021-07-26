import logo from "./Images/logo.svg";
import arrow from "./Images/icon-arrow-down.svg";
import "./Header.css";

function Header(props){
	return <div className="header">
	  <nav class="navbar navbar-expand-lg">
  		<img class="navbar-brand" src={logo} href="#" />
  		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    		<span class="navbar-toggler-icon"></span>
  		</button>
		<div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
			<ul class="navbar-nav">
      			<li class="nav-item">
        			<a class="nav-link" href="#">About</a>
      			</li>
      			<li class="nav-item">
        			<a class="nav-link" href="#">Services</a>
      			</li>
      			<li class="nav-item">
        			<a class="nav-link" href="#">Projects</a>
      			</li>
                <li class="nav-item">
                    <button type="button" class="btn btn-light">Contact</button>
                </li>
    		</ul>
  			</div>
		</nav>
		<h1 className="heading">WE ARE CREATIVES</h1>
		<img className="Arrow" src={arrow} />
	</div>;
}
	
export default Header;