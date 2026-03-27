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
				<PanelBody title="Logo">
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ ( media ) => setAttributes( { logo: media } ) }
							allowedTypes={ [ 'image' ] }
							value={ logo?.id }
							render={ ( { open } ) => (
								<>
									{ logo?.url && (
										<img src={ logo.url } alt="Logo" style={ { display: 'block', marginBottom: '0.5rem', maxWidth: '100%' } } />
									) }
									<Button variant="secondary" onClick={ open }>
										{ logo?.url ? 'Skift logo' : '+ Upload logo' }
									</Button>
								</>
							) }
						/>
					</MediaUploadCheck>
				</PanelBody>
				<PanelBody title="Navigation">
					{ navItems.map( ( item, i ) => (
						<div key={ i } style={ { marginBottom: '1rem', borderBottom: '1px solid #ddd', paddingBottom: '1rem' } }>
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
							<Button
								isDestructive
								variant="tertiary"
								onClick={ () => setAttributes( { navItems: navItems.filter( ( _, index ) => index !== i ) } ) }
							>
								Fjern punkt
							</Button>
						</div>
					) ) }
					<Button
						variant="primary"
						onClick={ () => setAttributes( { navItems: [ ...navItems, { label: 'Nyt punkt', url: '#' } ] } ) }
						style={ { marginTop: '0.5rem' } }
					>
						+ Tilføj menupunkt
					</Button>
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
						{ logo?.url
							? <img src={ logo.url } alt="Logo" />
							: <span style={ { opacity: 0.5 } }>Logo</span>
						}
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
