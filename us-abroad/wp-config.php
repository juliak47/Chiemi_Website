<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'chiemikc_WPU9B');

/** MySQL database username */
define('DB_USER', 'chiemikc_WPU9B');

/** MySQL database password */
define('DB_PASSWORD', '8IvF}xo$2=GQdJ(<V');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', '93ccc74f480b87eee90b7ae8d397557c645f866abee73f9553e0f4197c9c15dc');
define('SECURE_AUTH_KEY', '235ac9ca626723dbf3a497a0eb4643e74075738b373e97e247887857f80e9f59');
define('LOGGED_IN_KEY', '699da2681b3709a64933523bb277f2d8ee9e544f4569156b5e1614b7a9fccc7c');
define('NONCE_KEY', 'f70000ce8d0ed29e649c49abe817b106ec2c999e09c682946387af5b58686f86');
define('AUTH_SALT', 'f30fa81c61c249be03bc8d756c7c39dbf1e1363873343c940f257655a2d45a51');
define('SECURE_AUTH_SALT', 'c54ca32e5c8341ff2b6b51d5210eaa6fa81ae5d6ecfea664df2aa4dd1bcf2e7c');
define('LOGGED_IN_SALT', 'db817b744bbdea645508e90051fb9b56cfd7196a048e2bc764b1d5de0b1ac31e');
define('NONCE_SALT', '8d22407b41bce4d08fc230084e9b078d5a11fae0e12e4deb9116fd4667a521c8');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'gNl_';
define('WP_CRON_LOCK_TIMEOUT', 120);
define('AUTOSAVE_INTERVAL', 300);
define('WP_POST_REVISIONS', 5);
define('EMPTY_TRASH_DAYS', 7);
define('WP_AUTO_UPDATE_CORE', true);

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
