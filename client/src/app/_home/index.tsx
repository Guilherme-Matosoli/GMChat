import { Content } from '@/components/Content';
import { Container } from './styles';
import { Header } from '@/components/Header';

export const HomePage = () => {
	return(
		<Container>
			<Content>
				<Header/>
				<div className="mainContent">
					<h2>INTRODUÇÃO</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget rutrum nulla, vitae porta libero. Praesent quis leo tristique, bibendum lorem vel, porttitor mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec est ante, condimentum quis viverra id, luctus at sapien. Nulla dapibus nunc sit amet felis pellentesque, quis pulvinar nunc euismod. Cras elit purus, euismod at tellus sed, dignissim aliquam felis. Aliquam quis vulputate elit. Nulla erat orci, malesuada eu consequat in, consectetur sit amet erat. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras dolor
					</p>

					<div className="box">
						<p>
							Esta é uma aplicação completamente gratuíta sem fins lucrativos. <br/>
							Por favor, não coloque nem compartilhe dados sensíveris e pessoais com ninguém.
						</p>
						<span>
							❤️Desenvolvido com amor por: <a href="https://www.linkedin.com/in/guilherme-matos-13b6a6229/" target='_blank'> &gt;Guilherme Matos&lt;</a>❤️
						</span>
					</div>
				</div>
			</Content>
		</Container>
	)
};