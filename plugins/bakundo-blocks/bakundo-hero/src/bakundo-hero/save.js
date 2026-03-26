import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { badge, heading, headingGradient, subheading, buttonText, buttonUrl, secondButtonText, secondButtonUrl, image } = attributes;

	return (
		<section { ...useBlockProps.save( { className: 'bakundo-hero' } ) }>
			<div className="bakundo-hero__content">
				<span className="bakundo-hero__badge">
					<span className="bakundo-hero__badge-dot" />
					<RichText.Content value={ badge } />
				</span>
				<h1 className="bakundo-hero__heading">
					<RichText.Content value={ heading } />
					<span className="bakundo-hero__heading-gradient">
						<RichText.Content value={ headingGradient } />
					</span>
				</h1>
				<p className="bakundo-hero__subheading">
    <span className="bakundo-hero__subheading-fixed">
        <RichText.Content value={ subheading } />
    </span>
    <span className="bakundo-hero__subheading-typing"></span>
</p>
				<div className="bakundo-hero__buttons">
					<a href={ buttonUrl } className="bakundo-hero__button bakundo-hero__button--primary">
						<RichText.Content value={ buttonText } />
						<span className="bakundo-hero__button-arrow">↓</span>
					</a>
					<a href={ secondButtonUrl } className="bakundo-hero__button bakundo-hero__button--secondary">
						<RichText.Content value={ secondButtonText } />
						<span className="bakundo-hero__button-arrow">→</span>
					</a>
				</div>
			</div>
			{ image?.url && (
				<div className="bakundo-hero__image-wrap">
					<img src={ image.url } alt={ image.alt || '' } className="bakundo-hero__image" />
				</div>
			) }
		</section>
	);
}