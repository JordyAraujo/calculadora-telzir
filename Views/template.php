<!--
=========================================================
* BLK Design System- v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 -->
<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="robots" content="all,follow">
  <link rel="apple-touch-icon" sizes="76x76" href="<?= BASE_URL ?>assets/img/apple-icon.png">
  <link rel="icon" type="image/png" href="<?= BASE_URL ?>assets/img/favicon.png">
  <title>
    Telzir - Calculadora de Tarifas
  </title>
  <!--     Fonts and icons     -->
  <link href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800" rel="stylesheet" />
  <!-- Nucleo Icons -->
  <link href="<?= BASE_URL ?>assets/css/nucleo-icons.css" rel="stylesheet" />
  <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">
  <!-- CSS Files -->
  <link href="<?= BASE_URL ?>assets/css/blk-design-system.css?v=1.0.0" rel="stylesheet" />
</head>

<body class="register-page">
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg fixed-top navbar-transparent " color-on-scroll="100">
    <div class="container">
      <div class="navbar-translate">
        <a class="navbar-brand" href="https://demos.creative-tim.com/blk-design-system/index.html" rel="tooltip" title="Desenvolvido por Jordy Araújo" data-placement="bottom" target="_blank">
          <span>Telzir •</span> Calculadora de Tarifas
        </a>
        <button class="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse justify-content-end" id="navigation">
        <div class="navbar-collapse-header">
          <div class="row">
            <div class="col-6 collapse-brand">
              <a>
                Calculadora de Tarifas
              </a>
            </div>
            <div class="col-6 collapse-close text-right">
              <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
              <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
        <ul class="navbar-nav">
          <li class="nav-item p-0">
            <a class="nav-link" rel="tooltip" title="Visite meu portfólio" data-placement="bottom" href="https://jordyaraujo.github.io/" target="_blank">
              <i class="fas fa-globe"></i>
              <p class="d-lg-none d-xl-none">Portfólio</p>
            </a>
          </li>
          <li class="nav-item p-0">
            <a class="nav-link" rel="tooltip" title="Conheça meus projetos" data-placement="bottom" href="https://github.com/JordyAraujo" target="_blank">
              <i class="fab fa-github"></i>
              <p class="d-lg-none d-xl-none">Github</p>
            </a>
          </li>
          <li class="nav-item p-0">
            <a class="nav-link" rel="tooltip" title="Visite meu linkedin" data-placement="bottom" href="https://www.linkedin.com/in/jordyaraujo/" target="_blank">
              <i class="fab fa-linkedin-in"></i>
              <p class="d-lg-none d-xl-none">Linkedin</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->
  <div class="wrapper">
    <div class="page-header">
      <div class="page-header-image"></div>
      <div class="content">
        <div class="container">
          <?php $this->loadViewInTemplate($viewName, $viewData); ?>
          <div class="register-bg"></div>
          <div id="square1" class="square square-1"></div>
          <div id="square2" class="square square-2"></div>
          <div id="square3" class="square square-3"></div>
          <div id="square4" class="square square-4"></div>
          <div id="square5" class="square square-5"></div>
          <div id="square6" class="square square-6"></div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <h1 class="title">Telzir</h1>
          </div>
          <div class="col-md-6">            
          </div>
          
          <div class="col-md-3">
            <div class="btn-wrapper profile pt-4">
              <a target="_blank" href="https://jordyaraujo.github.io/" class="btn btn-icon btn-neutral btn-round btn-simple" data-toggle="tooltip" data-original-title="Visite meu portfólio">
                <i class="fas fa-globe"></i>
              </a>
              <a target="_blank" href="https://github.com/JordyAraujo/" class="btn btn-icon btn-neutral btn-round btn-simple" data-toggle="tooltip" data-original-title="Conheça meus projetos">
              <i class="fab fa-github"></i>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/jordyaraujo/" class="btn btn-icon btn-neutral  btn-round btn-simple" data-toggle="tooltip" data-original-title="Visite meu linkedin">
              <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
  <!--   Core JS Files   -->
  <script src="<?= BASE_URL ?>assets/js/core/jquery.min.js" type="text/javascript"></script>
  <script src="<?= BASE_URL ?>assets/js/core/popper.min.js" type="text/javascript"></script>
  <script src="<?= BASE_URL ?>assets/js/core/bootstrap.min.js" type="text/javascript"></script>
  <!-- Control Center for Black UI Kit: parallax effects, scripts for the example pages etc -->
  <script src="<?= BASE_URL ?>assets/js/blk-design-system.min.js?v=1.0.0" type="text/javascript"></script>
  <script src="<?= BASE_URL ?>assets/js/plugins/perfect-scrollbar.jquery.min.js"></script>
  <!--  Plugin for Switches, full documentation here: http://www.jque.re/plugins/version3/bootstrap.switch/ -->
  <script src="<?= BASE_URL ?>assets/js/plugins/bootstrap-switch.js"></script>
  <!--  Plugin for the Sliders, full documentation here: http://refreshless.com/nouislider/ -->
  <script src="<?= BASE_URL ?>assets/js/plugins/nouislider.min.js" type="text/javascript"></script>
  <!-- Chart JS -->
  <script src="<?= BASE_URL ?>assets/js/plugins/chartjs.min.js"></script>
  <!--  Plugin for the DatePicker, full documentation here: https://github.com/uxsolutions/bootstrap-datepicker -->
  <script src="<?= BASE_URL ?>assets/js/plugins/moment.min.js"></script>
  <script src="<?= BASE_URL ?>assets/js/plugins/bootstrap-datetimepicker.js" type="text/javascript"></script>
  <!-- Custom JS scripts -->
  <script src="<?= BASE_URL ?>assets/js/custom.js" type="text/javascript"></script>
</body>

</html>