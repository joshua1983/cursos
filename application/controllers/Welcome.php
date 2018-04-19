<?php
defined('BASEPATH') OR exit('No direct script access allowed');
require_once 'vendor/autoload.php';
use \Firebase\JWT\JWT;
class Welcome extends CI_Controller {

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

	public function index()
	{
		$this->load->view('welcome_message');
	}

	public function test(){
		echo '[{"nombre": "test"}, {"nombre": "test2"}]';
	}

	public function login(){
		$this->load->model('usuario_model');
		$_POST = json_decode(file_get_contents("php://input"), true);

		$usuario = $this->input->post('usuario');
		$password = $this->input->post('password');

		$usuario_valido = $this->usuario_model->login($usuario, $password);
		if ($usuario_valido > 0){
				$tipo = 1; // admin
				if ($usuario == 'est'){
					$tipo = 2;
				}
				$time = time();
				$key = "kgh5bvoc";
		    	$token = array(
					'iat' => $time, // Tiempo que inició el token
			    	'exp' => $time + (60*60), // Tiempo que expirará el token (+1 hora)
			    	'data' => [ // información del usuario
			        	'id' => 'josue@algo.com',
			        	'name' => 'Josue Barrios Rodriguez',
						'tipo' => $tipo
			    	]
		    );
		    $jwt = JWT::encode($token, $key);
				$this->usuario_model->registrar_login($jwt);
				$salida["token"] = $jwt;
				$salida["tipo"] = $tipo;
		    echo json_encode($salida);
		}else{
			$salida["error"] = "Error: Usuario invalido:".$usuario;
			echo json_encode($salida);
		}
	}

	public function getPagina(){
		$this->load->model('pagina_model');
		
	}

	public function logout(){

	}

}
