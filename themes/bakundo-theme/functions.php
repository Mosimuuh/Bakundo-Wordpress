<?php
function bakundo_enqueue_fonts() {
    wp_enqueue_style(
        'bakundo-google-fonts',
        'https://fonts.googleapis.com/css2?family=Staatliches&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,400&display=swap',
        [],
        null
    );
}
add_action( 'wp_enqueue_scripts', 'bakundo_enqueue_fonts' );
