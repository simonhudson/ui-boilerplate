</div><!--/wrap-->

<!--libraries-->
<script type="text/javascript" src="<?php echo $sitePath['libs']; ?>jquery/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="<?php echo $sitePath['libs']; ?>jquery-ui/jquery-ui-1.10.3.custom.min.js"></script>
<!--<script type="text/javascript" src="<?php echo $sitePath['libs']; ?>kendo-ui/kendo-2013.2.918.all.min.js"></script>-->
<!--/libraries-->
<?php if ($serveMinifiedCssJs) { ?>
<script type="text/javascript" src="<?php echo $sitePath['js']; ?>production.min.js"></script>
<?php } else { ?>
<script type="text/javascript" src="<?php echo $sitePath['js']; ?>concertina.js"></script>
<script type="text/javascript" src="<?php echo $sitePath['js']; ?>close-box-message.js"></script>
<script type="text/javascript" src="<?php echo $sitePath['js']; ?>modal.js"></script>
<script type="text/javascript" src="<?php echo $sitePath['js']; ?>tabbed-content.js"></script>
<script type="text/javascript" src="<?php echo $sitePath['js']; ?>carousel.js"></script>
<script type="text/javascript" src="<?php echo $sitePath['js']; ?>tooltip.js"></script>
<?php } ?>
</body>
</html>