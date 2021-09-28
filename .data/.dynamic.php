<?php 

	if($_POST){
		if($_POST['process'] && $_POST['year'] && $_POST['data']){
		mkdir("./.events/." . $_POST['year']);
		for ($x = 1; $x <= 12; $x++) {
		mkdir("./.events/." . $_POST['year'] . "/." . $x);
		}
		$fh = fopen("./.events/." . $_POST['year'] . "/.data" , 'w');
		fwrite($fh, $_POST['data']);
		fclose($fh);
		}
		if($_POST['y'] && $_POST['m'] && $_POST['d'] && $_POST['data']){
		$fh = fopen("./.events/." . $_POST['y'] ."/.". $_POST['m'] ."/.". $_POST['d'], 'w');
		fwrite($fh, $_POST['data']);
		fclose($fh);
		}
	}
	else{
	echo "401 Bad Request!";
	}
	
?>