import React from 'react';

import PatternItemNotes from './PatternItemNotes.jsx';
import PatternSection from './PatternSection.jsx';
import PatternGrid from './PatternGrid.jsx';

import getContent from './../../utility/getContent';
import getPatternEncodedUrl from './../../utility/getPatternEncodedUrl';

class PatternItem extends React.Component {
	constructor(props) {
		super(props);

		this.content = getContent('en').patterns;
	}
	isEditable = () => {
		let i;
		if (this.props.data.threading[0].length > 24) {
			return false;
		} else if (Array.isArray(this.props.data.treadling[0][0])) {
			return false;
		}

		for (i = 0; i < this.props.data.treadling.length; i += 1) {
			if (this.props.data.treadling[i].indexOf(2) > -1) {
				return false;
			}
		}
		for (i = 0; i < this.props.data.threading.length; i += 1) {
			if (this.props.data.threading[i].indexOf(2) > -1) {
				return false;
			}
		}

		return true;
	}
	render() {
		const {
			data,
			patternNumber,
			subActive,
			onUpdateSubActive,
		} = this.props;
		return (
			<div className='pattern-item'>

				{this.isEditable() ? 
					<div>
						<a className='pattern-item-edit' href={'/patterns/builder' + '#' + getPatternEncodedUrl(data) + '_pn-' + patternNumber + '-' + subActive}>
							edit
						</a>
					</div>	
					:
					null
				}
						
				<PatternItemNotes notes={data.notes || []} />
					
				{['threading', 'tie_up', 'treadling'].map(function (type) {
					return (
						<PatternSection label={this.content[type]} key={type}>
							<PatternGrid data={data[type]} 
								type={type} 
								patternNumber={patternNumber}
								subActive={subActive}
								onUpdateSubActive={onUpdateSubActive} />
						</PatternSection>
					)
				}.bind(this))}		
			</div>
		)
	}
}

export default PatternItem;