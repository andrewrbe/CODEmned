<?php

namespace app\controllers;

use Endroid\QrCode\QrCode;
use Yii;
use yii\filters\AccessControl;
use yii\filters\VerbFilter;

class QrController extends \yii\web\Controller
{
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'rules' => [
                    [
                        'allow' => true,
                        'roles' => ['@'],
                    ],

                    // ...
                ],
            ],
        ];
    }

    public function actionIndex()
    {
        return $this->render('index');
    }

    public function actionQr()
    {
        $qrCode = new QrCode(Yii::$app->getUser()->getId());
        $qrCode->setLabel('Scan the code #' . Yii::$app->getUser()->getId());

        header('Content-Type: ' . $qrCode->getContentType());
        echo $qrCode->writeString();

    }
}
