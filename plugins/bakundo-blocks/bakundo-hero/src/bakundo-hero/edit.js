import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { heading, subheading, buttonText } = attributes;

	return (
		<section { ...useBlockProps( { className: 'bakundo-hero' } ) }>
			<RichText
				tagName="h1"
				className="bakundo-hero__heading"
				value={ heading }
				onChange={ ( value ) => setAttributes( { heading: value } ) }
				placeholder={ __( 'Din overskrift her...', 'bakundo-hero' ) }
			/>
			<RichText
				tagName="p"
				className="bakundo-hero__subheading"
				value={ subheading }
				onChange={ ( value ) => setAttributes( { subheading: value } ) }
				placeholder={ __( 'Din underoverskrift her...', 'bakundo-hero' ) }
			/>
			<RichText
				tagName="span"
				className="bakundo-hero__button"
				value={ buttonText }
				onChange={ ( value ) => setAttributes( { buttonText: value } ) }
				placeholder={ __( 'Knaptekst...', 'bakundo-hero' ) }
			/>
		</section>
	);
}