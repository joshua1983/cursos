<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require_once 'vendor/autoload.php';
use \Firebase\JWT\JWT;
class Niveles extends CI_Controller {

  private static $secret_key = 'Sdw1s9x8@';
  private static $encrypt = ['HS256'];
  private static $aud = null;


	public function __construct($config = 'rest'){
		header('Access-Control-Allow-Origin: *');
		header("Access-Control-Allow-Methods: GET,PUT,POST,DELETE,PATCH,OPTIONS");
		header("Access-Control-Allow-Headers: Content-Type, Content-Length, Accept-Encoding, Authorization");
		header("Access-Control-Allow-Credentials: true");
		header('Content-Type: application/json');
		parent::__construct();
	}

  public function getNiveles(){
    $query = $this->db->get('nivel');
    echo json_encode($query->result_array());
  }

  public function newNivel(){
    
  }


}
