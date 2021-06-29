<div class="row">
  <div class="col-lg-5 col-md-6 offset-lg-0 offset-md-3">
    <div id="square7" class="square square-7"></div>
    <div id="square8" class="square square-8"></div>
    <div class="card card-register">
      <div class="card-header">
        <img class="card-img" src="<?= BASE_URL ?>assets/img/square-purple-1.png" alt="Card image">
        <h4 class="card-title ml-4">telzir</h4>
      </div>
      <div class="card-body">
        <form class="form">
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <i class="tim-icons icon-single-02"></i>
              </div>
            </div>
            <select id="origem" name="origem" class="form-control">
              <option value="0" selected disabled>DDD de origem</option>
              <option value="11">011</option>
              <option value="16">016</option>
              <option value="17">017</option>
              <option value="18">018</option>
            </select>
          </div>
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <i class="tim-icons icon-email-85"></i>
              </div>
            </div>
            <select id="destino" name="destino" class="form-control">
              <option value="0" selected disabled>DDD de destino</option>
              <option value="11">011</option>
              <option value="16">016</option>
              <option value="17">017</option>
              <option value="18">018</option>
            </select>
          </div>
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <i class="tim-icons icon-lock-circle"></i>
              </div>
            </div>
            <select id="plano" name="plano" class="form-control">
              <option value="0" selected disabled>Plano FaleMais</option>
              <option value="30">FaleMais 30</option>
              <option value="60">FaleMais 60</option>
              <option value="120">FaleMais 120</option>
            </select>
          </div>
          <div class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <i class="tim-icons icon-lock-circle"></i>
              </div>
            </div>
            <input id="tempo" name="tempo" class="form-control" placeholder="Duração da chamada">
          </div>
        </form>
      </div>
      <div class="card-footer">
        <button id="teste-btn" class="btn btn-primary btn-round btn-lg" data-toggle="modal" data-target="#myModal1">
          Calcular Tarifa
        </button>
      </div>
    </div>
  </div>
</div>
<!-- Mini Modal -->
<div class="modal fade modal-mini modal-primary modal-mini" id="myModal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header justify-content-center">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
          <i class="tim-icons icon-simple-remove text-white"></i>
        </button>
        <div class="modal-profile">
          <i class="tim-icons icon-single-02"></i>
        </div>
      </div>
      <div class="modal-body">
        <p id="teste">Always have an access to your profile</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-link btn-neutral">Back</button>
        <button type="button" class="btn btn-link btn-neutral" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>