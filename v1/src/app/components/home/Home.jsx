import React from 'react';

import HomeBackground from './HomeBackground.jsx';

class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			toggleReset: false
		}

		console.log('hello')
	}
	reset = () => {
		this.setState({
			toggleReset: !this.state.toggleReset
		})
	}
	render() {
	  	return (
			<div className='home'>
				<HomeBackground toggleReset={this.state.toggleReset}/>
				<div>
					<section className='home-projects'>
						<ul className='home-links'>
							<li>
								<a href='/v1/news' aria-label='Media diet project'>
									media diet
								</a>
							</li>
							<li>
								<a href='/v1/patterns' aria-label='Weaving patterns project'>
									weaving
								</a>
							</li>
							<li>
								<a href='http://amandamodo.com' aria-label="Amanda O'Donnell portfolio" target='_blank'>
									amandamodo
								</a>
							</li>
							<li>
								<a href='https://vurvco.github.io/network-viz/' aria-label="vurv network diagram" target='_blank'>
									network viz
								</a>
							</li>
							<li>
								<a href='http://shelby.cool/sfpc' aria-label="sfpc" target='_blank'>
									sfpc
								</a>
							</li>
						</ul>
					</section>
					<section className='home-about'>
						<ul className='home-links'>
							<li>
								<a href='mailto:s.wilson024@gmail.com' aria-label='Send email to Shelby Wilson'>
									email
								</a>
							</li>
							<li>
								<a href='https://github.com/shelbywilson' aria-label='Shelby Wilson Github' target='_blank'>
									github
								</a>
							</li>
							<li>
								<a href='https://www.linkedin.com/in/shelby-wilson-26b18153' aria-label='Shelby Wilson Linkedin' target='_blank'>
									linkedin
								</a>
							</li>
							<li>
								<a href='http://www.vurv.co/' aria-label='vurv collective homepage' target='_blank'>
									vurv.co
								</a>
							</li>
							<li>
								<a style={{padding: '2vw 1.7vw'}} href='https://www.are.na/shelby-wilson' aria-label='Shelby Wilson are.na' target='_blank'>
									<span dangerouslySetInnerHTML={{ __html: '<!-- are.na logo -->' }} /> 
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150.38 88.986">
									 	<path d="M148.93 62.356l-20.847-16.384c-1.276-1-1.276-2.642 0-3.645l20.848-16.38c1.28-1.002 1.815-2.695 1.19-3.76-.626-1.062-2.374-1.44-3.88-.84l-24.79 9.874c-1.507.606-2.927-.22-3.153-1.83L114.57 2.926C114.34 1.317 113.13 0 111.877 0c-1.247 0-2.456 1.317-2.68 2.925l-3.73 26.467c-.228 1.61-1.646 2.434-3.155 1.83l-24.38-9.71c-1.512-.602-3.975-.602-5.483 0l-24.384 9.71c-1.508.604-2.928-.22-3.154-1.83L41.186 2.925C40.956 1.317 39.748 0 38.5 0c-1.252 0-2.463 1.317-2.688 2.925l-3.73 26.467c-.226 1.61-1.645 2.434-3.153 1.83L4.14 21.35c-1.507-.603-3.252-.223-3.878.838-.625 1.066-.092 2.76 1.184 3.76l20.85 16.38c1.277 1.003 1.277 2.645 0 3.646L1.446 62.356C.166 63.358-.364 65.152.26 66.34c.627 1.19 2.372 1.668 3.877 1.064l24.567-9.866c1.51-.603 2.914.218 3.125 1.828l3.544 26.696c.214 1.607 1.618 2.923 3.12 2.923 1.5 0 2.905-1.315 3.12-2.923l3.55-26.696c.21-1.61 1.62-2.43 3.122-1.828l24.164 9.698c1.506.606 3.97.606 5.477 0l24.16-9.698c1.504-.603 2.91.218 3.125 1.828l3.55 26.696c.212 1.607 1.617 2.923 3.115 2.923 1.502 0 2.907-1.315 3.12-2.923l3.55-26.696c.216-1.61 1.62-2.43 3.124-1.828l24.57 9.866c1.5.604 3.25.125 3.876-1.063.627-1.186.094-2.98-1.185-3.982zM95.89 46.18L77.53 60.315c-1.285.99-3.393.99-4.674 0L54.49 46.18c-1.284-.99-1.294-2.62-.02-3.625l18.4-14.493c1.274-1.005 3.363-1.005 4.638 0l18.4 14.493c1.277 1.004 1.267 2.634-.02 3.626z"></path>
									</svg>
								</a>
							</li>
						</ul>
					</section>
					<section className='home-info'>
						<a className='home-info-box' role="button" aria-label='Reset background' onMouseUp={this.reset}>
							<h1>
								Shelby Wilson
							</h1>
							<h3>
								front end engineer
							</h3>
							<h3>
							 	austin tx
							</h3>
						</a>
					</section>
				</div>
			</div>
		)
	}
}

export default Home;
