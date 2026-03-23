<?php
function bakundo_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('editor-styles');
}
add_action('after_setup_theme', 'bakundo_setup');