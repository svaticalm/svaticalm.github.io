<?php
// Загрузка штампа и фото, для которого применяется водяной знак (называется штамп или печать)
$im = imagecreatefrompng('img/baloon.png');
imagesavealpha($im, true);

$centerX = intval(imagesx($im) / 2);
$centerY = intval(imagesy($im) / 2);

// Копирование изображения штампа на фотографию с помощью смещения края
// и ширины фотографии для расчета позиционирования штампа.
//imagecopy($im, $stamp, imagesx($im) - $sx - $marge_right, imagesy($im) - $sy - $marge_bottom, 0, 0, imagesx($stamp), imagesy($stamp));

if (isset($_REQUEST['number'])) {
    imagestring ( $im , 5 , $centerX - (strlen($_REQUEST['number']) * 4) , $centerY - 8, intval($_REQUEST['number']), 0);
}
// Вывод и освобождение памяти
header('Content-type: image/png');
imagepng($im);
imagedestroy($im);
?>