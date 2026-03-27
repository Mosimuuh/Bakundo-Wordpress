import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { sectionLabel, heading, services } = attributes;

	return (
		<section { ...useBlockProps.save( { className: 'bakundo-ydelser' } ) }>
			<div className="bakundo-ydelser__header">
				<span className="bakundo-ydelser__label">{ sectionLabel }</span>
				<h2 className="bakundo-ydelser__heading">{ heading }</h2>
			</div>
			<div className="bakundo-ydelser__grid">
				{ services.map( ( service, i ) => (
					<div key={ i } className="bakundo-ydelser__card">
						<span className="bakundo-ydelser__icon">{ service.icon }</span>
						<h3 className="bakundo-ydelser__card-title">{ service.title }</h3>
						<p className="bakundo-ydelser__card-desc">{ service.description }</p>
					</div>
				) ) }
			</div>
		</section>
	);
}
