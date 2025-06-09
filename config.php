<?php
$host = "localhost";
$user = "root";
$pass = ""; // или твой пароль
$db = "crud"; // имя твоей базы данных

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("Ошибка подключения к БД: " . $conn->connect_error);
}
?>
