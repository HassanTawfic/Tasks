<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'kmw(6<D5UzURr.f-!&c0B*4:%cQpzYh|5oIpT0t3iU<+B5N2n[6_alsT!4c:8]N0' );
define( 'SECURE_AUTH_KEY',  'c&F`@rjeV[ww=|&9H&T4l)4DDm4L?P<y#a]ld2/7UT!zWSi-$?$hv+T44,}4J7Y&' );
define( 'LOGGED_IN_KEY',    '@n?`oi #<<I@Q@DVxREXWYMRYWqwIYTjZ5Z}kp4vPtKg5JA`(Q_zdFHy]22uh,`>' );
define( 'NONCE_KEY',        'NpYc&qWeRMxGsmbph%+zP^Q?J7T{I-d[NX?2%/ft_iT0)f(fBx`8e{;_w-cDCg1v' );
define( 'AUTH_SALT',        'c[dXCW!a)bApMO_Y8nB}_:`a}4:n_J7n6+ir1B&CnA)5<%iUi[eK0wbPr;J6@]sL' );
define( 'SECURE_AUTH_SALT', '|VeKh=( GSKA+)MP4`REmz/%2]V~q^ v;|N $>fW~vE6ixZB<DN,s 5PV$:}MkC^' );
define( 'LOGGED_IN_SALT',   '8rg9.!ItEg6*U3Z(g(xZqL4<E|,c4 /8UP8.Cr8lg) xXv:?Y>$3((yhm[~U;HeD' );
define( 'NONCE_SALT',       'Yuen~Vf(XgLk5qYR%.[amb^)`<wAn{~mULCo,D]d=;r4qJqvN`Ap}ch *B)yR5OS' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
define('FS_METHOD','direct');
