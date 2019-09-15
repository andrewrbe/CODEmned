<?php

use yii\widgets\ActiveForm;
$this->title = 'Profile';
?>

<div class="card card-user">
    <div class="card-image">
        <img src="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&amp;fm=jpg&amp;h=300&amp;q=75&amp;w=400"
             alt="...">
    </div>
    <div class="card-body">
        <div class="author">
            <a href="#">
                <img class="avatar border-gray"
                     src="https://scontent.fktw1-1.fna.fbcdn.net/v/t1.0-0/p370x247/33783333_226578904593842_8387330985963814912_n.jpg?_nc_cat=100&_nc_oc=AQntFOb6fsoMuZ8ZpdWFyyfAY-5K9TsH-jvEe_QaSuSnopeezBRpu0fW5SU7oTQUeXg&_nc_ht=scontent.fktw1-1.fna&oh=ca9e364c4f938371f67fb67e91d7aada&oe=5E3BEBE3"
                     alt="...">
                <h2 class="title">Mike Andrew</h2>
            </a>
            <p class="description">
                ID: 2
            </p>
        </div>
        <div class="description text-center">
            <h3>
                <?php

                $cnt = isset($_SESSION['z']) ? $_SESSION['z'] : 0;

                ?>
                Total butts packets changed: <?= $cnt ?>
                <?php
                $_SESSION['z'] = ++$cnt;

                ?>
            </h3>
            <button class="btn btn-info btn-fill" onclick="javascript:location.reload()">+1 Packet</button>
            </p>
        </div>
        <hr>

    </div>