<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require_once 'vendor/autoload.php';
use \Firebase\JWT\JWT;
class Paginas extends CI_Controller {

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

  public function getPaginas(){
    $query = $this->db->get('paginas');
    echo json_encode($query->result_array());
  }

  public function nuevaPagina(){
    $stream_clean = $this->security->xss_clean($this->input->raw_input_stream);
    $request = json_decode($stream_clean);
    $titulo = $request->titulo;
    $contenido = $request->contenido;
    $data = array(
        'titulo' => $titulo,
        'contenido' => $contenido
    );

    $this->db->insert('paginas', $data);
    echo '{ "titulo": "'.$titulo.'", "contenido": "'.$contenido.'" }';
  }


}
