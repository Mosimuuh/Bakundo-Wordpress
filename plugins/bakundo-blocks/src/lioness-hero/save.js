import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
    const { eyebrow, heading, subheading, body, buttonText, buttonUrl, priceText, badgeQuote, badgeName, image } = attributes;

    return (
        <section { ...useBlockProps.save( { className: 'lioness-hero' } ) }>
            <div className="lioness-hero__left">
                <RichText.Content tagName="div" className="lioness-hero__eyebrow" value={ eyebrow } />
                <RichText.Content tagName="h1" className="lioness-hero__heading" value={ heading } />
                <RichText.Content tagName="p" className="lioness-hero__subheading" value={ subheading } />
                <RichText.Content tagName="p" className="lioness-hero__body" value={ body } />
                <div className="lioness-hero__cta">
                    <a href={ buttonUrl } className="lioness-hero__button">
                        <RichText.Content value={ buttonText } />
                    </a>
                    <RichText.Content tagName="span" className="lioness-hero__price" value={ priceText } />
                </div>
            </div>
            <div className="lioness-hero__right">
                { image?.url && (
                    <img src={ image.url } alt={ image.alt } className="lioness-hero__image" />
                ) }
                <div className="lioness-hero__badge">
                    <div className="lioness-hero__badge-stars">★★★★★</div>
                    <RichText.Content tagName="p" value={ badgeQuote } />
                    <RichText.Content tagName="div" className="lioness-hero__badge-name" value={ badgeName } />
                </div>
            </div>
        </section>
    );
}