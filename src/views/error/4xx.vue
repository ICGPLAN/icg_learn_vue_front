<template>
	<div class="spacing"></div>
	<div id="game" class="gameBox">
		<div id="dino" ref="viewtools"></div>
		<div id="block"></div>
	</div>
</template>

<script>
import '@/css/views/error/4xx.css'
export default {
	data: function () {
		return {
		};
	},
	components: {
	},
	mounted() {
		window.addEventListener('keydown', this.spaceDown);
		this.dead = setInterval(() => {
			this.isDead();
		}, 10);
	},
	methods: {
		spaceDown(e) {
			const dino = document.querySelector("#dino");
			const block = document.querySelector("#block");
			switch (e.code) {
				case 'Space':
					e.preventDefault();// Space キーを押した時に画面移動を禁止
					if (parseFloat(getComputedStyle(dino).getPropertyValue('bottom')) > 0) {
						return;
					}
					dino.classList.add("jumpClass");
					setTimeout(() => {
						dino.classList.remove("jumpClass");
					}, 600);
					break;
				default:
					console.log(e.code);
			}
		},
		isDead() {
			const dinoBottom = parseFloat(
				getComputedStyle(dino).getPropertyValue('bottom')
			);
			const blockLeft = parseFloat(
				getComputedStyle(block).getPropertyValue('left')
			);
			if (blockLeft < 20 && blockLeft > -20 && dinoBottom <= 20) {
				console.log("over");
			}
		}

	},
	watch: {
	}
}
</script>
