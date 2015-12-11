<?php
 
//error_reporting(E_ERROR | E_PARSE);

// Registeration Script

$host        =    'localhost';

$user        =    'root';

$password    =    '';

//=============Data Base Information=================

$database    =    'tx';

 

$conn        =    mysql_connect($host,$user,$password) or die('Server Information is not Correct'); //Establish Connection with Server

mysql_select_db($database,$conn) or die('Database Information is not correct');

 

//===============End Server Configuration============



//=============Starting Registration Script==========

 

$name   =    $_POST['name'];

$college    =    $_POST['college'];

$email    =    $_POST['email'];

$mobile    =    $_POST['mobile'];

$event    =    $_POST['event'];

$nop    =    $_POST['participants'];

$uid = uniqid(mitx);


// // Get ID
//$data = mysql_query("SELECT id FROM teams WHERE name='$name' && event='$event'") or die(mysql_error());
//$info = mysql_fetch_array( $data );
//$id = $info['id'];





//=============To Encrypt Password===================

//$password    =    md5($password);

//============New Variable of Password is Now with an Encrypted Value========
 

if(empty($name) || empty($college) || empty($email) || empty($nop) || empty($event) || empty($mobile))

{

echo "Please do not leave any field empty";

}

//$checkusername = mysql_query("SELECT username FROM teams WHERE username = '$_POST[username]'"); // Fetch username

//$row83 = mysql_fetch_assoc($checkusername);

 

//if ($_POST['username'] == $row83['username']) die('Username already in use.');  //Check if username already exists

 

else

{

if (preg_match('|^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$|i', $email)) //Function for Email validity

{// $email is valid

 

if(preg_match('/^[0-9]{10}+$/', $mobile))//Check Mobile number

{


$query    =    "insert into teams(name,college,email,mobile,event,nop)values('$name','$college','$email','$mobile','$event','$nop')";

//$query    =    "insert into teams(name,college,email,mobile,nop,event,uid)values('$name','$college','$email','$mobile','$nop','$event','$uid')";
 
//if($event=='8051')
//$query    =    "insert into rutechie(name,college,email,mobile,participants,event,uid)values('$name','$college','$email','$mobile','$participants','$event','$uid')";
//
//if($event=='line_tracer')
//$query    =    "insert into rlinetracer(name,college,email,mobile,participants,event,uid)values('$name','$college','$email','$mobile','$participants','$event','$uid')";
//
//if($event=='circuit_debugger')
//$query    =    "insert into rcircuitdebugger(name,college,email,mobile,participants,event,uid)values('$name','$college','$email','$mobile','$participants','$event','$uid')";
//
//if($event=='robo_wars')
//$query    =    "insert into rrobowars(name,college,email,mobile,participants,event,uid)values('$name','$college','$email','$mobile','$participants','$event','$uid')";
//
//if($event=='matlab_mania')
//$query    =    "insert into rmatlabmania(name,college,email,mobile,participants,event,uid)values('$name','$college','$email','$mobile','$participants','$event','$uid')";
//





echo "

<!-- About Section -->
<div class='page'>
<div class='container'>
    <!-- Title Page -->
    <div class='row'>
        <div class='span12'>
            <div class='title-page'>
                <h2 class='title'>Registration</h2>
            </div>
        </div>
    </div>
    <!-- End Title Page -->
    
</div>
<!-- End About Section -->

<center>
<table width='59%' border='0' align='center' cellspacing='5
'>
  <tr>
    <td colspan='3' align='right'>&nbsp;</td>
  </tr>
  <tr>
    <td colspan='2'><font color='#00CC00' face='Tahoma, Geneva, sans-serif' size='2'>Registration Successful</font></td>
    <td width='27%' align='right'><a href='javascript:window.print()'>Print</a></td>
  </tr>
  <tr>
    <td>Application ID</td>
    <td colspan='2'>".$uid."</td>
  </tr>
  <tr>
    <td width='25%'>Name</td>
    <td colspan='2'>".$name."</td>
  </tr>
  <tr>
    <td>Email</td>
    <td colspan='2'>".$email."</td>
  </tr>
  <tr>
    <td>Mobile</td>
    <td colspan='2'>".$mobile."</td>
  </tr>
  <tr>
    <td>College</td>
    <td colspan='2'>".$college."</td>
  </tr>
  <tr>
    <td>Event</td>
    <td colspan='2'>".$event."</td>
  </tr>
  <tr>
    <td>Participants</td>
    <td colspan='2' style='text-transform:capitalize'>".$nop."</td>
  </tr>
  <tr>
    <td>&nbsp;</td>
    <td width='48%'>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>  </tr>
</table>
<span style='text-align: justify' colspan='3'></span>
<table width='59%' border='0' align='center' cellspacing='5
'>
  <tr>
    <td colspan='3'>An email with above details has been sent to your email address. We will keep you notified. <br><br>Close this window.</td>
  </tr>
</table>
</center>


";

// Email Function

$femail=$email;
$to      = $femail; // Send email to our user
$subject = 'Registration (Do not Reply)'; // Give the email a subject
$message = '
Hello '.$name.',

Your application has been accepted and the registeration details are as follows:
Application ID: '.$uid.'
Event: '.$event.'
No. of participants: '.$nop.'


Please keep checking the site to be updated. or,
You can either subscribe our RSS feeds or subscribe to our newsletters.

Please select one from below:
RSS Feeds: www.link to rss feeds.com
Newsletters: www.link to newsletter.com
Email: ouremailaddress@domain.com

- MIT Texephyr Team, 2014
(do not reply to this email)

'; // Our message above including the link
$headers = 'From: registrations@texephyr.com' . "\r\n"; // Set from headers
mail($to, $subject, $message, $headers); // Send our email

}  

 

else//If wrong mobile number

{

echo "Please enter valid 10 digit mobile number";

}

 

    

}

else//Invalid $email

{

echo "Please enter a valid email address";

}

 

 

 



 

} 

?>