import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { heading, subheading, buttonText } = attributes;

	return (
		<section { ...useBlockProps.save( { className: 'bakundo-hero' } ) }>
			<h1 className="bakundo-hero__heading">
				<RichText.Content value={ heading } />
			</h1>
			<p className="bakundo-hero__subheading">
				<RichText.Content value={ subheading } />
			</p>
			<a className="bakundo-hero__button">
				<RichText.Content value={ buttonText } />
			</a>
		</section>
	);
}