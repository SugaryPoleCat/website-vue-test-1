<template>
	<div id="home">
		<h1>Welcome</h1>
		<p>
			It seems we are still under development.
		</p>
		<p>
			Thank you for checking out the website tho!
		</p>
		<div id="link">
			<a id="discord" target="_blank" href="https://discord.gg/P6JUJJSMYn">
				Discord | <i class="fa fa-discord" aria-hidden="true"></i>
			</a>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "HomeStuff",
	title: "Sucrosia | Home"
});
</script>
<style>
#home {
	text-align: center;
}

#link {
	margin: 4rem auto;
}

#discord {
	background-color: rgb(76, 91, 199);
	color: white;
	/* width: 10rem;
	height: 3rem; */
	padding: 1rem 2rem;
	font-size: 24px;
	border: none;
	border-radius: 1rem;
	position: relative;
	transition: all 0.25s ease-in-out;
	transform: scale(1);
	-moz-transform: scale(1);
}

#discord:hover {
	background-color: rgb(163, 184, 232);
	color: black;
	transform: scale(1.2);
	-moz-transform: scale(1.2);
}
</style>