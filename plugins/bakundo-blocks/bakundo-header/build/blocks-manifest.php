<?php
// This file is generated. Do not modify it manually.
return array(
	'bakundo-header' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/bakundo-header',
		'version' => '0.1.0',
		'title' => 'Bakundo Header',
		'category' => 'widgets',
		'icon' => 'menu',
		'description' => 'Sticky header med logo, navigation og CTA knap.',
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'logo' => array(
				'type' => 'object',
				'default' => array(
					
				)
			),
			'navItems' => array(
				'type' => 'array',
				'default' => array(
					array(
						'label' => 'Ydelser',
						'url' => '#'
					),
					array(
						'label' => 'Cases',
						'url' => '#'
					),
					array(
						'label' => 'Om mig',
						'url' => '#'
					)
				)
			),
			'ctaText' => array(
				'type' => 'string',
				'default' => 'Book en samtale'
			),
			'ctaUrl' => array(
				'type' => 'string',
				'default' => '#'
			)
		),
		'textdomain' => 'bakundo-header',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
