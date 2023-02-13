<?php                      

include('database.php');   

switch ($_SERVER['REQUEST_METHOD']){
    case 'GET'    : handle_get_request();    break;
    default: 
        http_response_code(405);   // method not allowed
        exit(0);
}

function handle_get_request(){                      
    header('Content-Type: application/json');
    header('Access-Control-Allow-Origin: *'); 

    $db = mysqli_connect(SERVERNAME,USERNAME,PASSWORD,DATABASENAME);
    if (isset($_GET["id"])) {
		if (!is_numeric($_GET['id'])){
			http_response_code(400);   // bad request
			exit(0);
		}		
        $sql = "SELECT `id`, `hoofdstuk_id`, `volgorde`, `naam`, `bestand`, `PHP-versie` FROM scripts WHERE id = ".$_GET["id"]; 
		$res = mysqli_query($db, $sql);		
		$resultaat = mysqli_fetch_assoc($res);		
		if ($resultaat == null) http_response_code(404); 
    }
    else {
		$sql = "SELECT `id`, `hoofdstuk_id`, `volgorde`, `naam`, `bestand`, `PHP-versie` FROM scripts";
		$res = mysqli_query($db, $sql);		
		$resultaat = array();
		while ($row = mysqli_fetch_assoc($res)) {$resultaat[] = $row;}
	}
    echo json_encode($resultaat);
}

