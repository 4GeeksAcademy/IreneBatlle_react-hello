import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";



//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	
	return (
		<div>
			
			<Navbar/>
			<Jumbotron
			welcome='Encuentra a tu compañero perfecto!'
			jumbotronDescription='En adopciones.com creemos en el poder de la adopción. Ofrecemos una amplia variedad de mascotas, desde perros y gatos hasta pequeños roedores y más, esperando un hogar lleno de amor. Únete a nuestra misión de darles una segunda oportunidad. ¡Adopta, transforma vidas y encuentra tu nuevo compañero hoy!'
			>

			</Jumbotron>
			<div className="container d-flex justify-content-center" >
				<div className="row w-100" >
					<div className="col-12 col-sm-6 col-md-3 mb-3  d-flex justify-content-center">
						<Card 
						title='Gatos' 
						image='https://www.infobae.com/new-resizer/-iTGMfTXqExrhTEDTINb4HDAUeo=/arc-anglerfish-arc2-prod-infobae/public/VCVWSMNYEFDCXADXEIP7JZXIXY.jpg'
						description='Los gatos son mascotas dulces, divertidas y llenas de personalidad. Con su independencia y cariño, se convierten en excelentes compañeros para cualquier hogar.'>

						</Card>
					</div>
					<div className="col-12 col-sm-6 col-md-3 mb-3  d-flex justify-content-center">
						<Card 
						title='Perros' 
						image='https://images.ctfassets.net/550nf1gumh01/6dWe4W0fQAJNbTT2GOVoOv/15f5188d1867ea7bdcf5b610d0a699c7/iStock-1420601907.jpg?q=90&w=1240'
						description='Los perros son animales fieles, cariñosos y llenos de energía. Perfectos para brindarte amor incondicional, te acompañarán en cada aventura.'>

						</Card>
					</div>
					<div className="col-12 col-sm-6 col-md-3 mb-3  d-flex justify-content-center">
						<Card 
						title='Conejos' 
						image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMqWIZss82iI-KuoRODf3qxZnkg_-DqvKlng&s'
						description='Los conejos son animales adorables, tranquilos y muy sociables. Son perfectos para hogares con poco espacio y se adaptan bien a entornos tranquilos. Disfrutan de la compañía y pueden ser fácilmente entrenados.'>
						</Card>
					</div>
					<div className="col-12 col-sm-6 col-md-3 mb-3 d-flex justify-content-center">
						<Card 
						title='Hurones' 
						image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBs_ozOtVL9aFeMk3lutjs5FZXG8xCgGZhiA&s'
						description='Los hurones son animales curiosos, inteligentes y llenos de energía. Les encanta explorar, jugar y socializar, convirtiéndose en excelentes mascotas para personas activas.'>
						</Card>
					</div>
				</div>
			</div>
			<Footer/>


		</div>
	);
};

export default Home;
