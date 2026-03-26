import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { logo, navItems, ctaText, ctaUrl } = attributes;

	return (
		<header { ...useBlockProps.save( { className: 'bakundo-header' } ) }>
			<div className="bakundo-header__inner">
				<div className="bakundo-header__logo">
					{ logo?.url && (
						<a href="/"><img src={ logo.url } alt="Bakundo logo" /></a>
					) }
				</div>
				<nav className="bakundo-header__nav">
					{ navItems.map( ( item, i ) => (
						<a key={ i } href={ item.url } className="bakundo-header__nav-item">
							{ item.label }
						</a>
					) ) }
				</nav>
				<div className="bakundo-header__right">
					<a href={ ctaUrl } className="bakundo-header__cta">
						{ ctaText }
					</a>
					<button className="bakundo-header__hamburger" aria-label="Åbn menu">
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</div>
			<div className="bakundo-header__mobile-menu">
				<nav className="bakundo-header__mobile-nav">
					{ navItems.map( ( item, i ) => (
						<a key={ i } href={ item.url } className="bakundo-header__mobile-nav-item">
							{ item.label }
						</a>
					) ) }
				</nav>
				<a href={ ctaUrl } className="bakundo-header__mobile-cta">
					{ ctaText }
				</a>
			</div>
		</header>
	);
}
