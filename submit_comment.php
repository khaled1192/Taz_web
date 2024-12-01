<?php
$servername = "localhost";
$username = "root";
$password = "";  // عادةً ما يكون فارغًا في XAMPP
$dbname = "osman_website";




if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $conn->real_escape_string($_POST['username']);
    $comment = $conn->real_escape_string($_POST['comment']);
    
    
    $sql = "INSERT INTO comments (username, comment) VALUES ('$username', '$comment')";
    if ($conn->query($sql) === TRUE) {
        echo "تم إضافة التعليق بنجاح!";
    } else {
        echo "حدث خطأ: " . $conn->error;
    }
    
    
    header("Location: index.php");
    exit();
}


if ($conn->connect_error) {
    die("فشل الاتصال: " . $conn->connect_error);
} else {
    echo "تم الاتصال بقاعدة البيانات بنجاح!";
}
?>
