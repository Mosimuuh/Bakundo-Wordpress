import { useBlockProps, RichText, MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
import { Button, PanelBody, TextControl } from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
    const { eyebrow, heading, subheading, body, buttonText, buttonUrl, priceText, badgeQuote, badgeName, image } = attributes;

    return (
        <>
        <InspectorControls>
            <PanelBody title="Links">
                <TextControl
                    label="Knap URL"
                    value={ buttonUrl }
                    onChange={ ( value ) => setAttributes( { buttonUrl: value } ) }
                />
            </PanelBody>
        </InspectorControls>
        <section { ...useBlockProps( { className: 'lioness-hero' } ) }>
            <div className="lioness-hero__left">
                <RichText
                    tagName="div"
                    className="lioness-hero__eyebrow"
                    value={ eyebrow }
                    onChange={ ( value ) => setAttributes( { eyebrow: value } ) }
                    placeholder="Eyebrow tekst..."
                />
                <RichText
                    tagName="h1"
                    className="lioness-hero__heading"
                    value={ heading }
                    onChange={ ( value ) => setAttributes( { heading: value } ) }
                    placeholder="Overskrift..."
                />
                <RichText
                    tagName="p"
                    className="lioness-hero__subheading"
                    value={ subheading }
                    onChange={ ( value ) => setAttributes( { subheading: value } ) }
                    placeholder="Underoverskrift..."
                />
                <RichText
                    tagName="p"
                    className="lioness-hero__body"
                    value={ body }
                    onChange={ ( value ) => setAttributes( { body: value } ) }
                    placeholder="Brødtekst..."
                />
                <div className="lioness-hero__cta">
                    <RichText
                        tagName="span"
                        className="lioness-hero__button"
                        value={ buttonText }
                        onChange={ ( value ) => setAttributes( { buttonText: value } ) }
                        placeholder="Knap tekst..."
                    />
                    <RichText
                        tagName="span"
                        className="lioness-hero__price"
                        value={ priceText }
                        onChange={ ( value ) => setAttributes( { priceText: value } ) }
                        placeholder="Pris tekst..."
                    />
                </div>
            </div>
            <div className="lioness-hero__right">
                <MediaUploadCheck>
                    <MediaUpload
                        onSelect={ ( media ) => setAttributes( { image: media } ) }
                        allowedTypes={ [ 'image' ] }
                        value={ image?.id }
                        render={ ( { open } ) => (
                            image?.url
                                ? <img src={ image.url } alt={ image.alt } className="lioness-hero__image" onClick={ open } />
                                : <Button onClick={ open } className="lioness-hero__image-placeholder">+ Vælg billede</Button>
                        ) }
                    />
                </MediaUploadCheck>
                <div className="lioness-hero__badge">
                    <div className="lioness-hero__badge-stars">★★★★★</div>
                    <RichText
                        tagName="p"
                        value={ badgeQuote }
                        onChange={ ( value ) => setAttributes( { badgeQuote: value } ) }
                        placeholder="Citat..."
                    />
                    <RichText
                        tagName="div"
                        className="lioness-hero__badge-name"
                        value={ badgeName }
                        onChange={ ( value ) => setAttributes( { badgeName: value } ) }
                        placeholder="Navn..."
                    />
                </div>
            </div>
        </section>
        </>
    );
}