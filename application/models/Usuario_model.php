<?php
class Usuario_model extends CI_Model{
  public $usuario;
  public $password;
  public $token;
  public $tipo;

  public function __construct(){
    parent::__construct();
  }

  public function login($user, $pass){
    $this->db->where('usuario', $user);
    $this->db->where('password', $pass);
    $query = $this->db->get('usuarios');
    $retorno = false;

    foreach($query->result_array() as $row){
      $this->tipo = $row["tipo"];
      $this->usuario = $row["usuario"];
      $this->password = $row["password"];
      $retorno = true;
    }
    return $retorno;


  }

  public function registrar_login($tk){
    $this->token = $tk;
    $this->db->set('token', $tk);
    $this->db->where('usuario',$this->usuario);
    $this->db->update('usuarios');
  }
}
