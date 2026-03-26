<?php
function bakundo_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('editor-styles');
}
add_action('after_setup_theme', 'bakundo_setup');

function bakundo_enqueue_fonts() {
    wp_enqueue_style(
        'bakundo-google-fonts',
        'https://fonts.googleapis.com/css2?family=Staatliches&family=DM+Sans:wght@400;500;600&display=swap',
        [],
        null
    );
}
add_action('wp_enqueue_scripts', 'bakundo_enqueue_fonts');
add_action('enqueue_block_editor_assets', 'bakundo_enqueue_fonts');

function bakundo_editor_styles() {
    add_editor_style( 'https://fonts.googleapis.com/css2?family=Staatliches&family=DM+Sans:wght@400;500;600&display=swap' );
}
add_action( 'after_setup_theme', 'bakundo_editor_styles' );
