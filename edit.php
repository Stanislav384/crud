<?php
    require "confing.php";

    $id = $_GET['id'] ?? null;

    $stmt = $conn->prepare("SELECT * FROM users WHERE id=?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Edit user</h2>
    <form method="post" action="index.php">
        <input type="text" name="name" value="<?= htmlspecialchars($user["name"]) ?>"  required><br>
        <input type="text" name="surname" value="<?= htmlspecialchars($user["surname"]) ?>"  required><br>
        <input type="email" name="email" value="<?= htmlspecialchars($user["email"]) ?>"  required><br>
        <input type="number" name="age" value="<?= htmlspecialchars($user["age"]) ?>" required><br>
        <button type="submit">Edit</button>
    </form>

    <a href="index.php">Back</a>
</body>
</html>
