<?php
namespace Controllers;

use \Core\Controller;
use \Models\Exemplo;

class HomeController extends Controller
{
    private $exemplo;

    public function __construct()
    {
        $this->exemplo = new Exemplo();
    }

    public function index()
    {
        $array = array();

        $array['exemplo'] = $this->exemplo->getAll();

        $this->loadTemplate('exemplo', $array);
    }
}
