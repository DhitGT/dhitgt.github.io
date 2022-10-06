<?php
//conect
$conn = mysqli_connect("localhost","root","","butun");

if ( isset($_POST["submit"]) ){
    
    $nis = $_POST["Nis"];
    $nama = $_POST["Nama"];
    $absen = $_POST["Absen"];

    $query = "INSERT INTO murid 
        VALUE ('','$nis','$nama','$absen')";
    mysqli_query($conn, $query);
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Document</title>
</head>
<body>
    <h1> TAMBAH DATA</h1>
    <form action = "" method="post">
        <ul>
            <li>
                <label for="Nis">Nis</label>
                <input type="text" name="Nis" id="Nis">
            </li>
            <li>
                <label for="Nama">Nama</label>
                <input type="text" name="Nama" id="Nama">
            </li>
            <li>
                <label for="Absen">Absen</label>
                <input type="text" name="Absen" id="Absen">
            </li>
            <li>
                <button type="submit" name="submit">TAMBAH DATA!</button>
            </li>
        </ul>
    </form>
</body>
</html>