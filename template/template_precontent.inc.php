<?php

//Set timezone for date() function
date_default_timezone_set('Europe/London');

//Site paths
$siteRoot = '/repo/ui-boilerplate/';
$sitePath = array (
	'root' => $siteRoot,
	'css' => $siteRoot.'css/',
	'imgs' => $siteRoot.'imgs/',
	'js' => $siteRoot.'js/',
	'libs' => $siteRoot.'libs/',
	'tests' => $siteRoot.'tests/'
);

//Set whether or not to minify CSS and JS (only setting to true for production/live environments)
$serveMinifiedCssJs = false;

//Enable QUnit tests
$enableQUnitTests = true;

?>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>UI Boilerplate</title>
<?php if ($serveMinifiedCssJs) { ?>
<link href="<?php echo $sitePath['css']; ?>smartset.min.css" media="all" rel="stylesheet" type="text/css" />
<?php } else { ?>
<link href="<?php echo $sitePath['css']; ?>smartset.css" media="all" rel="stylesheet" type="text/css" />
<?php } ?>
</head>
<body>
<div id="access-links">
	<ul>
		<li><a href="#main-content">Skip to main content</a></li>
		<li><a href="#main-navigation">Skip to main navigation</a></li>
	</ul>
</div>
<noscript>
	<div class="box-msg warning no-js">
		<span class="sprite"></span>
		<p class="box-msg-title">Warning! JavaScript is not enabled.</p>
		<p>This software requires your browser to have JavaScript enabled.</p>
	</div>
</noscript>
<div class="wrap" id="main-wrap">