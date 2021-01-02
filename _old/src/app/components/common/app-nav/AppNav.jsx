import React from 'react';
import PropTypes from 'prop-types';

import Modal from './../modal/Modal.jsx';

class Nav extends React.Component {
	constructor(props) {	
		super(props);

		const hash = window.location.hash.replace(/#/g, '');

		this.state = {
			isModalDisplay: hash === 'about'
		}

		this.toggleModal = this.toggleModal.bind(this);
	}
	toggleModal() {
		this.setState({
			isModalDisplay: !this.state.isModalDisplay
		})
	}
	render() {
		const {
			links,
			app,
			activeLink
		} = this.props;
		return (
			<span>
				<header className='app-nav'>
					<nav>
						<a className='app-nav-link app-nav-home' href='/' aria-label='Home'>
							<div className='app-nav-home-icon'></div>
						</a>
						<ul style={{height: this.state.isModalDisplay ? 0 : (links.length * 2.5) + 'rem'}}>
							{links.map(function(link, i) {
								return (
									<li key={i}>
										<a className={'app-nav-link ' + (activeLink === link.label ? ' app-nav-link-active' : '')} href={link.href} aria-label={link.label}>
											{i + 1}
										</a>
									</li>
								)
							})}
						</ul>
					</nav>
					{this.state.isModalDisplay ? 
						<button className='app-nav-link' type='button' aria-label='Close info' onMouseUp={this.toggleModal}>
							<span className='app-nav-info-close'>&times;</span>
						</button>
						:
						<button className='app-nav-link' type='button' aria-label='Open info' onMouseUp={this.toggleModal}>
							<span className='app-nav-info'>i</span>
						</button>
					} 
				</header>

				<Modal onClose={this.toggleModal}
					display={this.state.isModalDisplay}
					customClass='app-nav-modal'>
					{this.props.children}
				</Modal>
			</span>
		)
	}
}

Nav.propTypes = {
	links: PropTypes.arrayOf(PropTypes.object)
}

export default Nav;