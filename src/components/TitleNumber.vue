<template>
	<div class="title-style">
		<p class="number">01</p>
		<p class="about-me">About Me</p>
		<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect width="30" height="30" fill="url(#paint0_linear_612_25)"/>
			<defs>
				<linearGradient id="paint0_linear_612_25" x1="15" y1="0" x2="15" y2="30" gradientUnits="userSpaceOnUse">
					<stop stop-color="#7FF3D8"/>
					<stop offset="1" stop-color="#D08FFB"/>
				</linearGradient>
			</defs>
		</svg>
	</div>
</template>

<style scoped>
.title-style{
    height: 170px;
    position: relative;
    p{
      &.number{
        color: transparent;
        -webkit-text-stroke: 1px rgba(38, 38, 38, .2);
        font-size: 8em;
        font-weight: 700;
      }

      &.about-me{
        position: absolute;
        font-size: 2em;
        font-weight: 700;
        top: 82px;
        left: 70px;
        background: linear-gradient(270deg, #7FF3D8, #D08FFB);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    svg{
      position: absolute;
      top: 90px;
      left: 30px;
    }
  }
</style>