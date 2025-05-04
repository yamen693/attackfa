<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // الحصول على البيانات
  $name = htmlspecialchars($_POST["name"]);
  $phone = htmlspecialchars($_POST["phone"]);
  $age = htmlspecialchars($_POST["age"]);
  $notes = htmlspecialchars($_POST["notes"]);

  // إعداد الإيميل
  $to = "attackfootballac@gmail.com"; // تأكد من وضع بريدك هنا
  $subject = "📝 اشتراك جديد في أكاديمية أتاك";

  $message = "
  <html lang='ar' dir='rtl'>
  <head><meta charset='UTF-8'></head>
  <body style='font-family:Arial, sans-serif;'>
    <h2 style='color:#e8b546;'>طلب اشتراك جديد:</h2>
    <table cellpadding='8' cellspacing='0' border='1' style='border-collapse:collapse; direction:rtl; text-align:right;'>
      <tr><th>الاسم الكامل</th><td>$name</td></tr>
      <tr><th>رقم الهاتف</th><td>$phone</td></tr>
      <tr><th>العمر</th><td>$age</td></tr>
      <tr><th>ملاحظات</th><td>$notes</td></tr>
    </table>
  </body>
  </html>";

  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html; charset=UTF-8" . "\r\n";
  $headers .= "From: noreply@yourdomain.com" . "\r\n"; // تأكد من وضع بريدك هنا

  // إرسال البريد
  if (mail($to, $subject, $message, $headers)) {
    echo "<h3 style='color:green;'>✅ تم إرسال النموذج بنجاح! شكراً لك.</h3>";
  } else {
    echo "<h3 style='color:red;'>❌ حدث خطأ أثناء إرسال النموذج. حاول مرة أخرى لاحقًا.</h3>";
  }
}
?>
