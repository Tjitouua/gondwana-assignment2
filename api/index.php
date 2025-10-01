<?php
   
  // To run the PHP api
  // 1. Go to the api folder 
  // 2. Run: php -S localhost:8000
         
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json");
  header("Access-Control-Allow-Methods: POST");
  header("Access-Control-Allow-Headers: Content-Type");

  if($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
  }

  // Blocking any method that isn’t POST
  if($_SERVER['REQUEST_METHOD'] !== 'POST') {
     http_response_code(405);
     echo json_encode(["error" => "Method not allowed"]);
     exit;
  }

  $input = json_decode(file_get_contents('php://input'), true);

  if(!$input) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid JSON"]);
    exit;
  }

  // Mapping of unit names from frontend to Gondwana API Unit IDs
  $unitMapping = [
     "Luxury Room" => -2147483637,
     "Guest House" => -2147483456
  ];

  $unitId = $unitMapping[$input["Unit Name"]] ?? -2147483637;

  // Convert arrival and departure dates to proper format
  $arrival = DateTime::createFromFormat('Y-m-d', $input["Arrival"]);
  $departure = DateTime::createFromFormat('Y-m-d', $input["Departure"]);

  // Building the payload expected by Gondwana’s API
  $payload = [
    "Unit Type ID" => $unitId,
    "Arrival" => $arrival ? $arrival->format('Y-m-d') : $input["Arrival"],
    "Departure" => $departure ? $departure->format('Y-m-d') : $input["Departure"],
    "Guests" => []
  ];

  // Classifying guests as Adults or Children
  foreach ($input["Ages"] as $age) {
    $payload["Guests"][] = [
        "Age Group" => $age >=18 ? "Adult" : "Child"
    ];
  }

  // Setting up cURL to send our request over to Gondwana
  $ch = curl_init("https://dev.gondwana-collection.com/Web-Store/Rates/Rates.php");
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
  curl_setopt($ch, CURLOPT_POST, true);
  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));

  $response = curl_exec($ch);
  $err = curl_error($ch);
  curl_close($ch);

  // If CURL failed, return error; otherwise return Gondwana’s response
  if($err) {
    http_response_code(500);
    echo json_encode(["error" => $err]);
  } else {
    echo $response;
  }



?>




