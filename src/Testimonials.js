import "./Testimonials.css";
import Emily from "./Images/image-emily.jpg";
import Jennie from "./Images/image-jennie.jpg";
import Thomas from "./Images/image-thomas.jpg";

function Testimonials() {
	return <div className="Testimonials">
		<h6>CLIENT TESTIMONIALS</h6>
		<br />
		<div class="container">
			<div class="row">
				<div class="col col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 testimonial-col">
					<img className="testim" src={Emily} />
					<br />
					<br />
					<br />
					<p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
					<br />
					<h5>Emily R.</h5>
					<p className="designation">Marketing Director</p>
				</div>
				<div class="col col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 testimonial-col">
					<img className="testim" src={Thomas} />
					<br />
					<br />
					<br />
					<p>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
					<br />
					<h5>Thomas S.</h5>
					<p className="designation">Chief Operating Officer</p>
				</div>
				<div class="col col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 testimonial-col">
					<img className="testim" src={Jennie} />
					<br />
					<br />
					<br />
					<p>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
					<br />
					<h5>Jennie F.</h5>
					<p className="designation">Business Owner</p>
				</div>
			</div>
        </div>
	</div>
}

export default Testimonials;