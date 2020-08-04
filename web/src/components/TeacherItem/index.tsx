import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css"

function TeacherItem() {
	return (
		<article className="teacher-item">
			<header>
				<img
					src="https://66.media.tumblr.com/62be01666ebbd2646eaa19f1ed093ea8/tumblr_pto8ulLgj01ynhdylo1_500.png"
					alt="Kira Yoshikage"
				/>
				<div>
					<strong>Kira Yoshikage</strong>
					<span>Medicina</span>
				</div>
			</header>
			<p>
				Médico naval que tem pessoas peladas na banheira de casa.
				<br />
				<br />
				Ele é mt pica e tem um chapéuzinho de marinheiro e uma roupinha
				de marinheiro ele é basicamente Quico's Bizarre Adventure.
			</p>

			<footer>
				<p>
					Preço/Hora: <strong>R$ 420,69</strong>
				</p>
				<button type="button">
					<img src={whatsappIcon} alt="Whatsapp" />
					Entrar em contato
				</button>
			</footer>
		</article>
	);
}

export default TeacherItem;