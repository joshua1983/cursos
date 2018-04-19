<?php
class Pagina_model extends CI_Model{
  public $capitulo_id;
  public $contenido;

  public function __construct(){
    parent::__construct();
  }

  public function getPagina(){
    $query = $this->db->get('paginas');
  }
}
