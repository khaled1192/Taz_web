<?php
session_start();
?>

<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>مجتمع فانز عثمان</title>
    <link rel="stylesheet" href="com.css">
</head>
<body>

<section id="community" class="section">
    <div class="container">
        <h2>مجتمع عثمان</h2>
        <p>شارك آرائك واطرح أسئلتك عن عثمان!</p>

        <!-- قسم التعليقات باستخدام Disqus -->
        <div id="disqus_thread"></div>

        <!-- نموذج لإضافة تعليق -->
        <div class="comment-form">
            <h3>أضف تعليقك:</h3>
            <form method="POST" action="submit_comment.php">
                <input type="text" name="username" placeholder="اسمك" required>
                <textarea name="comment" placeholder="اكتب تعليقك هنا..." required></textarea>
                <button type="submit">إرسال</button>
            </form>
        </div>

        
        <div class="comments">
            <h3>التعليقات السابقة:</h3>
            <?php
            
            $conn = new mysqli('localhost', 'root', '', 'osman_website');
            if ($conn->connect_error) die("فشل الاتصال: " . $conn->connect_error);

           
            $result = $conn->query("SELECT username, comment, created_at FROM comments ORDER BY created_at DESC");
            while ($row = $result->fetch_assoc()) {
                echo "<div class='comment'>";
                echo "<strong>{$row['username']}</strong> <small>{$row['created_at']}</small>";
                echo "<p>{$row['comment']}</p>";
                echo "</div>";
            }
            ?>
        </div>
    </div>
</section>


<script>
    (function() {  // إعداد مكتبة Disqus
        var d = document, s = d.createElement('script');
        s.src = 'https://YOUR_DISQUS_SHORTNAME.disqus.com/embed.js'; // استبدل YOUR_DISQUS_SHORTNAME باسم موقعك في Disqus
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    })();
</script>
<noscript>يرجى تفعيل الجافاسكربت لعرض التعليقات المدعومة من Disqus.</noscript>

</body>
</html>
