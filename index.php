<?php include('template/template_precontent.inc.php'); ?>
<h1>UI Boilerplate</h1>

<h2>Colour palette</h2>
<div class="palette">

	<div class="primary-100">
		<p>#bcd530<br />(Primary 100%)</p>
	</div>
	<div class="primary-66">
		<p>#d3e377<br />(Primary 66%)</p>
	</div>
	<div class="primary-33">
		<p>#e9f1bb<br />(Primary 33%)</p>
	</div>

	<div class="secondary-100">
		<p>#27aae1<br />(Secondary 100%)</p>
	</div>
	<div class="secondary-66">
		<p>#71c7eb<br />(Secondary 66%)</p>
	</div>
	<div class="secondary-33">
		<p>#b8e3f5<br />(Secondary 33%)</p>
	</div>
</div>

<br />
<hr />
<br />

<h2>Tooltip</h2>
<p>Here is a <a class="tooltip" href="#" title="This is a title attribute which we can pretty up to look a bit nicer."> link with a tooltip</a> and here is <a class="tooltip" href="#" title="This is another tooltip">another one</a>.</p>

<br />
<hr />
<br />

<h2>Concertina</h2>
<div class="concertina-wrap">
	<h3 class="concertina-toggle">Click me</h3>
	<div class="concertina-content">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis metus porttitor, facilisis sem in, tincidunt purus. Aliquam ac commodo magna. Integer vel ullamcorper sem. Mauris vehicula sapien et sem tempus, sit amet laoreet enim congue. Nam bibendum, eros vitae eleifend porttitor, augue turpis bibendum nulla, ac consequat augue erat elementum quam. Nam fringilla lorem vel lorem commodo, ut mollis magna accumsan. Nam urna enim, euismod vitae lobortis ac, vestibulum id est. Suspendisse condimentum orci quis lobortis ultricies. Nulla fringilla dictum nisi, vel vulputate risus rhoncus a. Pellentesque condimentum eros vel lectus tincidunt molestie. Aenean vestibulum, lectus sit amet consectetur tristique, dolor orci feugiat erat, ut rhoncus nibh sapien non dolor. Morbi ultrices eros dolor, ac suscipit ipsum placerat eu.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis metus porttitor, facilisis sem in, tincidunt purus. Aliquam ac commodo magna. Integer vel ullamcorper sem. Mauris vehicula sapien et sem tempus, sit amet laoreet enim congue. Nam bibendum, eros vitae eleifend porttitor, augue turpis bibendum nulla, ac consequat augue erat elementum quam. Nam fringilla lorem vel lorem commodo, ut mollis magna accumsan. Nam urna enim, euismod vitae lobortis ac, vestibulum id est. Suspendisse condimentum orci quis lobortis ultricies. Nulla fringilla dictum nisi, vel vulputate risus rhoncus a. Pellentesque condimentum eros vel lectus tincidunt molestie. Aenean vestibulum, lectus sit amet consectetur tristique, dolor orci feugiat erat, ut rhoncus nibh sapien non dolor. Morbi ultrices eros dolor, ac suscipit ipsum placerat eu.</p>
	</div><!--/concertina-content-->
</div><!--/concertina-wrap-->

<br />
<hr />
<br />

<h2>Box messages</h2>
<div class="feedback-msg success">
	<span class="sprite"></span>
	<p class="feedback-msg-title">Congratulations!</p>
	<p>You have successfully signed up.</p>
</div><!--/success-->
<div class="feedback-msg info">
	<span class="sprite"></span>
	<p class="feedback-msg-title">Information</p>
	<p>You are now using version 2.3 of the software. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis metus porttitor, facilisis sem in, tincidunt purus. Aliquam ac commodo magna. Integer vel ullamcorper sem. Mauris vehicula sapien et sem tempus, sit amet laoreet enim congue. Nam bibendum, eros vitae eleifend porttitor, augue turpis bibendum nulla, ac consequat augue erat elementum quam. Nam fringilla lorem vel lorem commodo, ut mollis magna accumsan. Nam urna enim, euismod vitae lobortis ac, vestibulum id est. Suspendisse condimentum orci quis lobortis ultricies. Nulla fringilla dictum nisi, vel vulputate risus rhoncus a. Pellentesque condimentum eros vel lectus tincidunt molestie. Aenean vestibulum, lectus sit amet consectetur tristique, dolor orci feugiat erat, ut rhoncus nibh sapien non dolor. Morbi ultrices eros dolor, ac suscipit ipsum placerat eu. </p>
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis metus porttitor, facilisis sem in, tincidunt purus. Aliquam ac commodo magna. Integer vel ullamcorper sem. Mauris vehicula sapien et sem tempus, sit amet laoreet enim congue. Nam bibendum, eros vitae eleifend porttitor, augue turpis bibendum nulla, ac consequat augue erat elementum quam. Nam fringilla lorem vel lorem commodo, ut mollis magna accumsan. Nam urna enim, euismod vitae lobortis ac, vestibulum id est. Suspendisse condimentum orci quis lobortis ultricies. Nulla fringilla dictum nisi, vel vulputate risus rhoncus a. Pellentesque condimentum eros vel lectus tincidunt molestie. Aenean vestibulum, lectus sit amet consectetur tristique, dolor orci feugiat erat, ut rhoncus nibh sapien non dolor. Morbi ultrices eros dolor, ac suscipit ipsum placerat eu.</p>
</div><!--/success-->
<div class="feedback-msg warning">
	<span class="sprite"></span>
	<p class="feedback-msg-title">Are you sure you want to delete this file?</p>
	<p>Once the file is deleted there is no way to retrieve it.</p>
</div><!--/success-->
<div class="feedback-msg error">
	<span class="sprite"></span>
	<p class="feedback-msg-title">Your file was not successfully deleted. Please try again.</p>
</div><!--/success-->

<br />
<hr />
<br />

<h2>Modal window</h2>
<p><a class="modal-trig" href="test-page.php">Open modal window</a></p>

<br />
<hr />
<br />

<h2>Tabbed content</h2>
<div class="tabbed-content-wrap">
	<div class="tab-item">
        <h3 class="tab-title">Content 1</h3>
        <div class="tab-content">
        	<p>This is content 1</p>
        </div>
    </div><!--/tab-item-->
	<div class="tab-item">
        <h3 class="tab-title">Content 2</h3>
        <div class="tab-content">
        	<p>This is content 2</p>
        </div>
    </div><!--/tab-item-->
</div><!--/tabbed-content-wrap-->

<br />
<hr />
<br />

<h2>Linear carousel</h2>
<div class="carousel-wrap linear-carousel">
	<div class="carousel-inner">
		<div class="carousel-item">
			<p>Item #1</p>
		</div><!--/carousel-item-->
		<div class="carousel-item">
			<p>Item #2</p>
		</div><!--/carousel-item-->
		<div class="carousel-item">
			<p>Item #3</p>
		</div><!--/carousel-item-->
		<div class="carousel-item">
			<p>Item #4</p>
		</div><!--/carousel-item-->
		<div class="carousel-item">
			<p>Item #5</p>
		</div><!--/carousel-item-->
		<div class="carousel-item">
			<p>Item #6</p>
		</div><!--/carousel-item-->
	</div><!--/carousel-inner-->
</div><!--/carousel-wrap-->
<?php include('template/template_postcontent.inc.php'); ?>
