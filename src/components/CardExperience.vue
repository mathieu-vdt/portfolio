<template>
	<div class="card">
	  <div class="card-header">
		<!-- <img src="@/assets/gradient.png" alt="gradient" class="card-image" /> -->
		<div class="card-title">
		  <h2>Full stack Developer</h2>
		  <p>on block release</p>
		</div>
		<div class="card-date">
		  <p>2022 - 2024</p>
		</div>
	  </div>
	  <div class="card-body">
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	  </div>
	</div>
  </template>
  

  
  <style scoped>
  .card {
	width: 300px;
	border-radius: 15px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	padding: 20px;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	font-family: Arial, sans-serif;
  }
  
  .card-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
  }
  
  .card-image {
	width: 50px;
	height: 50px;
	border-radius: 10px;
  }
  
  .card-title {
	flex: 1;
	margin-left: 15px;
  }
  
  .card-title h2 {
	margin: 0;
	font-size: 20px;
	font-weight: bold;
  }
  
  .card-title p {
	margin: 0;
	font-size: 12px;
	color: gray;
  }
  
  .card-date {
	font-size: 12px;
	color: gray;
  }
  
  .card-body {
	margin-top: 15px;
  }
  
  .card-body p {
	margin: 0;
	font-size: 14px;
  }
  </style>
  