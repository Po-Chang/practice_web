<?php
if($_GET['type']!='ajax'){
    include 'header.php';
    echo "<div id='main-content'>";
}
?>
	<p id = "id_for_page" class = "none-scroll"></p>

	<div class = "box" id = "page1">
			
		<img src="./img/DSC_5233_Fotor.jpg">

	</div>
	
<?php
if($_GET['type']!='ajax'){
    echo "</div>";
    include 'footer.php';
}?>