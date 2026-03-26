import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
import { Button, PanelBody, TextControl } from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { badge, heading, headingGradient, subheading, buttonText, secondButtonText, image } = attributes;

	return (
		<>
		<InspectorControls>
			<PanelBody title="Knapper">
				<TextControl
					label="Primær knap URL"
					value={ attributes.buttonUrl }
					onChange={ ( value ) => setAttributes( { buttonUrl: value } ) }
				/>
				<TextControl
					label="Sekundær knap URL"
					value={ attributes.secondButtonUrl }
					onChange={ ( value ) => setAttributes( { secondButtonUrl: value } ) }
				/>
			</PanelBody>
		</InspectorControls>
		<section { ...useBlockProps( { className: 'bakundo-hero' } ) }>
			<div className="bakundo-hero__content">
				<RichText
					tagName="span"
					className="bakundo-hero__badge"
					value={ badge }
					onChange={ ( value ) => setAttributes( { badge: value } ) }
					placeholder="Badge tekst..."
				/>
				<RichText
					tagName="h1"
					className="bakundo-hero__heading"
					value={ heading }
					onChange={ ( value ) => setAttributes( { heading: value } ) }
					placeholder="Overskrift..."
				/>
				<RichText
					tagName="span"
					className="bakundo-hero__heading-gradient"
					value={ headingGradient }
					onChange={ ( value ) => setAttributes( { headingGradient: value } ) }
					placeholder="Gradient tekst..."
				/>
				<RichText
					tagName="p"
					className="bakundo-hero__subheading"
					value={ subheading }
					onChange={ ( value ) => setAttributes( { subheading: value } ) }
					placeholder="Underoverskrift..."
				/>
				<div className="bakundo-hero__buttons">
					<RichText
						tagName="span"
						className="bakundo-hero__button bakundo-hero__button--primary"
						value={ buttonText }
						onChange={ ( value ) => setAttributes( { buttonText: value } ) }
						placeholder="Knap tekst..."
					/>
					<RichText
						tagName="span"
						className="bakundo-hero__button bakundo-hero__button--secondary"
						value={ secondButtonText }
						onChange={ ( value ) => setAttributes( { secondButtonText: value } ) }
						placeholder="Sekundær knap..."
					/>
				</div>
			</div>
			<div className="bakundo-hero__image-wrap">
				<MediaUploadCheck>
					<MediaUpload
						onSelect={ ( media ) => setAttributes( { image: media } ) }
						allowedTypes={ [ 'image' ] }
						value={ image?.id }
						render={ ( { open } ) => (
							image?.url
								? <img src={ image.url } alt={ image.alt } className="bakundo-hero__image" onClick={ open } />
								: <Button onClick={ open } className="bakundo-hero__image-placeholder">+ Vælg billede</Button>
						) }
					/>
				</MediaUploadCheck>
			</div>
		</section>
		</>
	);
}