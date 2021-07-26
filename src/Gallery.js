import Cone from "./Images/image-gallery-cone.jpg";
import Bottles from "./Images/image-gallery-milkbottles.jpg";
import Orange from "./Images/image-gallery-orange.jpg";
import Sugarcubes from "./Images/image-gallery-sugarcubes.jpg";
import "./Gallery.css"
	
function Gallery() {
	return <div className="Gallery">
		<div class="container">
  			<div class="row">
    			<div class="col col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
					<img className="pics" src={Bottles}/>
    			</div>
				<div class="col col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
					<img className="pics" src={Orange}/>
    			</div>
				<div class="col col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
					<img className="pics" src={Cone}/>
    			</div>
				<div class="col col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
					<img className="pics" src={Sugarcubes}/>
    			</div>
  			</div>
		</div>
	</div>
}

export default Gallery;