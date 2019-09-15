<?php

/* @var $this yii\web\View */

use yii\helpers\Html;

$this->title = 'Butt points';
?>

<div class="row">
    <div class="col-lg-12 d-block d-sm-none">
        <h2>Your ID</h2>
        <p><?= Html::img(['qr/qr']) ?></p>
    </div>
    <div class="col-lg-12">
        <h2>The nearest butt points to you</h2>

        <p>
        <div style="height: 700px" id="map"></div>

        <script>
			var map;

			function initMap() {
				var marker = new google.maps.Marker({
					position: {lat: 52.1075441, lng: 20.8323787},
					//	map: map,
					title: 'First point'
				});




				function getLocation() {
					var def = function () {
						map = new google.maps.Map(document.getElementById('map'), {
							//	center: {lat: -34.397, lng: 150.644},
							center: {lat: 52.1060352
								, lng: 20.8224256},
							zoom: 16
						});
						marker.setMap(map)

                        new google.maps.Marker({
							position: {lat: 52.1060352
								, lng: 20.8224256},
							map: map,
							title: 'My position',
                            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADP0lEQVRYR+WXSeiPaxTHPy66JRZXlMzshLgskJViY4jILO5CSrfImCGxMJZhIWRlypjMQ1G2uHVxL1ZSZkqUKGTso/Pq+b/3fX/D/S8snN3veZ9zzvcMz/ecXxN+sDRphP/BwLzQ3whc+T+2GgNgEnAwnI4Hjv4UALoDRj4E6Au0iaifAzeAS8Ah4F6t2ai1BDpeD4wDfqli/DNwBFgC3K8GpBYAM4DtQIvE2DvgH+BJnHUA+gC/JnfeALOSPinEUg2AUaxLNK8DG4CTgCBSEeCYiLx38mEBsLksE5UAGPnuUPwILA1DpriSNAUWA6uTck0py0QZAGt+M9L+CZgAHKtWz9z3icCBAPEa6AU8yNsoA2AT+baVRYBEk5eOUfdm8QKKGm55ZELd/cC0WgAY/Z1A7tPqD6Rp1/EOYGTO2FlgNvAwObccNmtPwEx2y32nKAPLgDVhZHK868ymzq8C7UvK8RgYCDxKvk8H9sTvhcCmVLcIwEVgaHR5a+BtonC6IPI8llPA6OSwJfASaA6YpQaZywA4WDqF0tZgOCM1mjT6NL1lPfkFMFMZR3jvGvA78CwZYPbM5QyAg0SWS+U4MDY5GAGcKfOaO/fuueTMrIzK3TksrdcDwLSeqBHAcOB8PQBMtWlTpN22wF/AgMRIlxqHjCWQmp8mujKow8uzOXFuOa8WNeEFYBjwHvgt14SWwPRWknzpWgEvognVb1CKIgAp/08NNssc2qiXI8IiEEZl1tLo/wB2xeX5wJZUsQhAV+BuENG/QL8gkfQ1bItIMn3Tbn/8mXMuS2qjB+A80bZc8V3KqNhVy8VDcQi5C+RFMrKuOpcx06izuyuBVfFjL+CAayBlAGy4W4AkIoU6zZwP9Yjl2wff2PZV0HGD6DVWaRxLw04zxVmwInYBAVUS0+4QMnrtmyGnaeHSWm0hsWlS7r4dIOx0N55U7HbJzF3Amis6nwvIroVSDYBKZmInoINMPkSJsqHj63DiyfeZmPaZ1db1WgBosDOwNhrTEVtJ7HZL51T9T83zirUCyPSM1Hq6lrsntIsPvoC/Yy23Was6zgzWCyAN4Of8Z5RmYFB0uGfSq/tD3dKYEtTtrEjhKxF1qiGUPw+OAAAAAElFTkSuQmCC',
						});
                    };

					if (navigator.geolocation) {
						navigator.geolocation.getCurrentPosition(function (position) {
							map = new google.maps.Map(document.getElementById('map'), {
								//	center: {lat: -34.397, lng: 150.644},
								center: {lat: position.coords.latitude, lng: position.coords.longitude},
								zoom: 16
							});
							console.log(position.coords.latitude,  position.coords.longitude);
							marker.setMap(map);
							new google.maps.Marker({
								position: {lat: position.coords.latitude, lng: position.coords.longitude},
								map: map,
								title: 'My position',
								icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADP0lEQVRYR+WXSeiPaxTHPy66JRZXlMzshLgskJViY4jILO5CSrfImCGxMJZhIWRlypjMQ1G2uHVxL1ZSZkqUKGTso/Pq+b/3fX/D/S8snN3veZ9zzvcMz/ecXxN+sDRphP/BwLzQ3whc+T+2GgNgEnAwnI4Hjv4UALoDRj4E6Au0iaifAzeAS8Ah4F6t2ai1BDpeD4wDfqli/DNwBFgC3K8GpBYAM4DtQIvE2DvgH+BJnHUA+gC/JnfeALOSPinEUg2AUaxLNK8DG4CTgCBSEeCYiLx38mEBsLksE5UAGPnuUPwILA1DpriSNAUWA6uTck0py0QZAGt+M9L+CZgAHKtWz9z3icCBAPEa6AU8yNsoA2AT+baVRYBEk5eOUfdm8QKKGm55ZELd/cC0WgAY/Z1A7tPqD6Rp1/EOYGTO2FlgNvAwObccNmtPwEx2y32nKAPLgDVhZHK868ymzq8C7UvK8RgYCDxKvk8H9sTvhcCmVLcIwEVgaHR5a+BtonC6IPI8llPA6OSwJfASaA6YpQaZywA4WDqF0tZgOCM1mjT6NL1lPfkFMFMZR3jvGvA78CwZYPbM5QyAg0SWS+U4MDY5GAGcKfOaO/fuueTMrIzK3TksrdcDwLSeqBHAcOB8PQBMtWlTpN22wF/AgMRIlxqHjCWQmp8mujKow8uzOXFuOa8WNeEFYBjwHvgt14SWwPRWknzpWgEvognVb1CKIgAp/08NNssc2qiXI8IiEEZl1tLo/wB2xeX5wJZUsQhAV+BuENG/QL8gkfQ1bItIMn3Tbn/8mXMuS2qjB+A80bZc8V3KqNhVy8VDcQi5C+RFMrKuOpcx06izuyuBVfFjL+CAayBlAGy4W4AkIoU6zZwP9Yjl2wff2PZV0HGD6DVWaRxLw04zxVmwInYBAVUS0+4QMnrtmyGnaeHSWm0hsWlS7r4dIOx0N55U7HbJzF3Amis6nwvIroVSDYBKZmInoINMPkSJsqHj63DiyfeZmPaZ1db1WgBosDOwNhrTEVtJ7HZL51T9T83zirUCyPSM1Hq6lrsntIsPvoC/Yy23Was6zgzWCyAN4Of8Z5RmYFB0uGfSq/tD3dKYEtTtrEjhKxF1qiGUPw+OAAAAAElFTkSuQmCC',
							});

						}, function () {
							def();
						});
					} else {
						def();
					}
				}
				getLocation();


			}
        </script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDvhjHWiag5pJsLYhctwdD044pAOl5pKpE&callback=initMap"
                async defer></script>
        </p>
    </div>

</div>


</div>
</div>
<style>
    .row {
        overflow: hidden;
    }

    [class*="col-"] {
        margin-bottom: -99999px;
        padding-bottom: 99999px;
    }
</style>
