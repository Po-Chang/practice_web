<?php
if($_GET['type']!='ajax'){
    include 'header.php';
    echo "<div id='main-content'>";
}
?>
	
	<script src="./js/my_js.js"></script>

	<div class = "change_page">
		<button class = "goto_page1"></button>
		<button class = "goto_page2"></button>
		<button class = "goto_page3"></button>
		<button class = "goto_page4"></button>
	</div>
		
	<div class = "box" id = "page1">
		<p class = "div-title">iOS Development Team</p>
		<p class = "div-content">Learning, Coding and Challenging.</p>
	</div>
	<div class = "box" id = "page2">
		<p class = "div-title">Hello Page2</p>
	</div>
	<div class = "box" id = "page3">
		<p class = "div-title">Hello page3</p>
	</div>
	<div class = "box" id = "page4">
		<p class = "div-title">Hello page4</p>
	</div>


<?php
if($_GET['type']!='ajax'){
    echo "</div>";
    include 'footer.php';
}?>