<?php
// This file is generated. Do not modify it manually.
return array(
	'bakundo-hero' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/bakundo-hero',
		'version' => '0.1.0',
		'title' => 'Bakundo Hero',
		'category' => 'widgets',
		'icon' => 'cover-image',
		'description' => 'Hero sektion med overskrift, billede og CTA.',
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'badge' => array(
				'type' => 'string',
				'default' => 'Noget cool :)'
			),
			'heading' => array(
				'type' => 'string',
				'default' => 'Overskrift'
			),
			'headingGradient' => array(
				'type' => 'string',
				'default' => 'farvet overskrift'
			),
			'subheading' => array(
				'type' => 'string',
				'default' => 'brødtekst'
			),
			'buttonText' => array(
				'type' => 'string',
				'default' => 'tekst til knap'
			),
			'buttonUrl' => array(
				'type' => 'string',
				'default' => '#'
			),
			'secondButtonText' => array(
				'type' => 'string',
				'default' => 'tekst til anden knap'
			),
			'secondButtonUrl' => array(
				'type' => 'string',
				'default' => '#'
			),
			'image' => array(
				'type' => 'object',
				'default' => array(
					
				)
			)
		),
		'textdomain' => 'bakundo-hero',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
