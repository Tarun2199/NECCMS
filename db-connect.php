<?php
$conn = mysqli_connect('localhost','root','','finance');

if($conn)
{

}else{
    echo "connection failed";
}
/*
    
function clean($string){
    global $conn;
    return mysqli_real_escape_string($conn,$string);
}*/
?>