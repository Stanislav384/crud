<?php
    require 'config.php';

    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $email = $_POST['email'];
    $age = $_POST['age'];

    $sql = "INSERT INTO users (name, surname, email, age) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssi", $name, $surname, $email, $age);
    $stmt->execute();

    header("Location: index.php");
?>

