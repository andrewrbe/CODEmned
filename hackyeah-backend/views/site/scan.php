<?php

use yii\widgets\ActiveForm;
$this->title = 'Scanning';
?>

<?php $form = ActiveForm::begin(['options' => ['enctype' => 'multipart/form-data']]) ?>


    <div class="card" style="margin-top: 100px">
        <div class="card-body">
            <h5 class="card-title">QR Scanning</h5>
            <p class="card-text">Scan QR code to get user profile</p>
            <div>Open camera</div>
            <hr/>
            <button  type="submit" class="btn btn-info btn-fill">Send</button>
        </div>
    </div>

<?php ActiveForm::end() ?>