<?php
/**
 * Plugin Name: Bakundo Blocks
 * Description: Custom Gutenberg blocks til Bakundo-sites
 * Version: 1.0
 * Author: Mads Bakundo
 */

function bakundo_register_blocks() {
    register_block_type( __DIR__ . '/build/bakundo-hero' );
    register_block_type( __DIR__ . '/build/bakundo-header' );
    register_block_type( __DIR__ . '/build/bakundo-ydelser' );
    register_block_type( __DIR__ . '/build/lioness-hero' );

}
add_action( 'init', 'bakundo_register_blocks' );