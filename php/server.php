<?php
  header('Content-type: application/json');

  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'PHPMailer/src/Exception.php';
  require 'PHPMailer/src/PHPMailer.php';

  $mail = new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->setLanguage('ru', 'PHPMailer/language/');
  $mail->IsHTML(true);

  $mail->setFrom($_POST['email']); // from
  $mail->addAddress('smasher_fell@outlook.com'); // to (my email)
  $mail->Subject = $_POST['subject']; // mail subject

  $body.='<p>Name: '.$_POST['name'].'</p>';
  $body.='<p>Tel: '.$_POST['tel'].'</p>';
  $body.='<p>Message: '.$_POST['message'].'</p>';

  if(!empty($_FILES['file']['tmp_name'])) {
    $filePath = $_FILES['file']['name'];

    if(copy($_FILES['file']['tmp_name'], $filePath)) {
      $fileAttach = $filePath;
      $mail->addAttachment($fileAttach);
    }
  }

  $mail->Body = $body;
  $mail->send();
?>