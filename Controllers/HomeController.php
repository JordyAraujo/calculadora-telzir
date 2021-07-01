<?php
namespace Controllers;

use \Core\Controller;
// use \Models\Exemplo;

class HomeController extends Controller
{
    // private $exemplo;

    // public function __construct()
    // {
    //     $this->exemplo = new Exemplo();
    // }

    public function index()
    {
        $array = array();

        // $array['exmplo'] = $this->exemplo->getAll();

        $this->loadTemplate('home', $array);
    }
}
