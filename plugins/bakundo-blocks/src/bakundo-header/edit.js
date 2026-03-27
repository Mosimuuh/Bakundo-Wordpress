import { __ } from '@wordpress/i18n';
import { useBlockProps, MediaUpload, MediaUploadCheck, RichText, InspectorControls } from '@wordpress/block-editor';
import { Button, PanelBody, TextControl } from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { logo, navItems, ctaText, ctaUrl } = attributes;

	const updateNavItem = ( index, key, value ) => {
		const updated = navItems.map( ( item, i ) =>
			i === index ? { ...item, [ key ]: value } : item
		);
		setAttributes( { navItems: updated } );
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title="Navigation">
					{ navItems.map( ( item, i ) => (
						<div key={ i } style={ { marginBottom: '1rem' } }>
							<TextControl
								label={ `Link ${ i + 1 } label` }
								value={ item.label }
								onChange={ ( value ) => updateNavItem( i, 'label', value ) }
							/>
							<TextControl
								label={ `Link ${ i + 1 } URL` }
								value={ item.url }
								onChange={ ( value ) => updateNavItem( i, 'url', value ) }
							/>
						</div>
					) ) }
				</PanelBody>
				<PanelBody title="CTA knap">
					<TextControl
						label="CTA URL"
						value={ ctaUrl }
						onChange={ ( value ) => setAttributes( { ctaUrl: value } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<header { ...useBlockProps( { className: 'bakundo-header' } ) }>
				<div className="bakundo-header__inner">
					<div className="bakundo-header__logo">
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ ( media ) => setAttributes( { logo: media } ) }
								allowedTypes={ [ 'image' ] }
								value={ logo?.id }
								render={ ( { open } ) => (
									logo?.url
										? <img src={ logo.url } alt="Logo" onClick={ open } />
										: <Button onClick={ open }>+ Upload logo</Button>
								) }
							/>
						</MediaUploadCheck>
					</div>
					<nav className="bakundo-header__nav">
						{ navItems.map( ( item, i ) => (
							<span key={ i } className="bakundo-header__nav-item">{ item.label }</span>
						) ) }
					</nav>
					<RichText
						tagName="span"
						className="bakundo-header__cta"
						value={ ctaText }
						onChange={ ( value ) => setAttributes( { ctaText: value } ) }
						placeholder="CTA tekst..."
					/>
				</div>
			</header>
		</>
	);
}
