<?php
if($_GET['type']!='ajax'){
    include 'header.php';
    echo "<div id='main-content'>";
}
?>


	<div class = "box" id = "page1">
			<img src="./img/IMG_4114.jpg">
	</div>


<?php
if($_GET['type']!='ajax'){
    echo "</div>";
    include 'footer.php';
}?>