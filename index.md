<!doctype html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1" charset="utf-8">
	<link rel="stylesheet" type="text/css" href="style.css">
	<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js"></script>
	<title>Login Page</title>
</head>
<body>
	<div class="Central_Container">
		<svg viewBox="0 -110 320 300 ">
				<path id="line" d="m 40,12.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
		</svg>
		<div class="form"> <!-- Do not change from a div as this will break the animation. This will not work as form tag -->
			<h1 id="login">Login</h1>
			<!-- <h1 id='loggedin'>Logged In</h1> -->
			<p>By logging in you agree to the ridiculously long terms that you didn't bother to read</p>
			<label id="lblusn" for="username">Username</label>
        	<input type="username" id="username">
        	<label id="lblpsw" for="password">Password</label>
        	<input type="password" id="password">
        	<input type="submit" id="enter" value="Enter" onclick="getElement()" method="post">
		</div>		
	</div>
	<script type="text/javascript" src="javascript.js"></script>
</body>
</html>
