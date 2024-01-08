<?php
<?PHP 
echo "welcome to db coonection===";
$servername="localhost";
$username="root";
$password="";
$conn= mysqli_connect($servername,$username,$password);
if (!conn)
{
    die("server not connected".mysqli_connect_error())
}
echo "sever connected";
?>