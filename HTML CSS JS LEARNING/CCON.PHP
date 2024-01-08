<?PHP 
echo "welcome to db coonection===";
$servername="localhost";
$username="root";
$password="";
$conn= mysqli_connect($servername,$username,$password,$mydb);
if (!conn)
{
    die("server not connected".mysqli_connect_error())
}
echo "sever connected";

$sql= "create database mydb";
$resut= $mysqli_query($conn,$sql);//connection done
echo "theresult is".var_dump($resut)."<br>"
if (!conn)
{
    die("server not connected".mysqli_error(!conn))
}
echo "sever connected";



?>