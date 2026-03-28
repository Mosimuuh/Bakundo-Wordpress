import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit( { attributes } ) {
	const { sectionLabel, heading, bodyText, services, ctaText, ctaUrl } = attributes;
	const [ visual, ...cards ] = services;

	return (
		<section { ...useBlockProps( { className: 'bakundo-ydelser' } ) }>
			<div className="bakundo-ydelser__header">
				<span className="bakundo-ydelser__label">{ sectionLabel }</span>
				<h2 className="bakundo-ydelser__heading">{ heading }</h2>
				{ bodyText && <p className="bakundo-ydelser__body">{ bodyText }</p> }
			</div>

			<div className="bakundo-ydelser__grid">

				<div className="bakundo-ydelser__card bakundo-ydelser__card--visual">
					<div className="bakundo-ydelser__visual-glow" />
					<span className="bakundo-ydelser__icon">{ visual.icon }</span>
					<h3 className="bakundo-ydelser__card-title">{ visual.title }</h3>
					<p className="bakundo-ydelser__card-desc">{ visual.description }</p>
				</div>

				{ cards.map( ( service, i ) => (
					<div key={ i } className="bakundo-ydelser__card">
						<span className="bakundo-ydelser__icon">{ service.icon }</span>
						<h3 className="bakundo-ydelser__card-title">{ service.title }</h3>
						<p className="bakundo-ydelser__card-desc">{ service.description }</p>
					</div>
				) ) }

				<div className="bakundo-ydelser__card bakundo-ydelser__card--cta">
					<a href={ ctaUrl } className="bakundo-ydelser__cta">
						<span className="bakundo-ydelser__cta-arrow">↓</span>
						<span className="bakundo-ydelser__cta-text">{ ctaText }</span>
					</a>
				</div>

			</div>
		</section>
	);
}
