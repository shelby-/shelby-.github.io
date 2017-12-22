import React from 'react';
import moment from 'moment';

class NewsfeedFocusedArticle extends React.Component {
	constructor(props) {
		super(props);

		this.toggleFocusedArticle = this.toggleFocusedArticle.bind(this);
	}
	toggleFocusedArticle(e) {
		this._stopPropagation(e);

		this.props.onToggleFocusedArticle(false);
	}
	_stopPropagation(e) {
		e.stopPropagation(e)
	}
	render() {
		const article = this.props.article;
		if (this.props.article) {
			return (
				<div className='newsfeed-focused-article' onMouseUp={this.toggleFocusedArticle}>
					<div className='newsfeed-focused-article-content' onMouseUp={this._stopPropagation} >
						<h2>
							{article.title}
						</h2>
						<h3>
							{this.props.source.name}
						</h3>
						<h3>
							{moment(article.publishedAt).fromNow()}
						</h3>
						<div className="newsfeed-focused-article-description">
							{article.description ?
								<p>
									{article.urlToImage &&
										<img src={article.urlToImage} alt='' />
									}
									{article.description}
								</p>
								:
								<img src={article.urlToImage} className='full-size' alt='' />
							}
						</div>
					</div>
				</div>
			)
		}
		return null;
	}
}

export default NewsfeedFocusedArticle;