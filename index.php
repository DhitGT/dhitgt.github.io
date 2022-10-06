<?php
require 'functions.php';
$murid = query("SELECT * FROM murid");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">

</head>
<body>
  <a href="tambah.php">tambah data</a>
<!--Table-->
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Absen</th>
      <th scope="col">Nama</th>
      <th scope="col">Nis</th>
    </tr>
  </thead>
  <tbody>
    <?php $i=1;?>
    <?php foreach($murid as $bebas) : ?>
      <tr>
        <th><?php echo $i; ?></th>
        <th><?php echo $bebas["Absen"]; ?></th>
        <th><?php echo $bebas["Nama"]; ?></th>
        <th><?php echo $bebas["Nis"]; ?></th>
    </tr>
    <?php $i++;?>
    <?php endforeach; ?>
    <tr>
  </tbody>
</table>
<!--Table-->

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
</body>
</html>