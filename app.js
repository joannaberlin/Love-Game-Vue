const getRandomValue = (min, max) => {
	return Math.floor(Math.random() * (max - min)) + min;
};

const app = Vue.createApp({
	data() {
		return {
			killaLove: 0,
			buddyLove: 0,
			winner: null,
			logMessages: [],
			surrender: false,
		};
	},
	computed: {
		killaBarStyles() {
			if (this.killaLove > 100) {
				return { width: '100%' };
			}
			return { width: this.killaLove + '%' };
		},
		buddyBarStyles() {
			if (this.buddyLove > 100) {
				return { width: '100%' };
			}
			return { width: this.buddyLove + '%' };
		},
	},
	methods: {
		kissKilla() {
			const kissValue = getRandomValue(5, 12);
			this.killaLove += kissValue;
			this.kissBuddy();
			alert('Killa kisses Buddy back!');
		},
		kissBuddy() {
			const kissValue = getRandomValue(7, 15);
			this.buddyLove += kissValue;
		},
		kissRandom() {
			const random = getRandomValue(1, 4);
			if (random === 1) {
				this.buddyLove += 10;
			} else if (random === 2) {
				this.killaLove += 10;
			} else if (random === 3) {
				this.buddyLove += 5;
			} else if (random === 4) {
				this.killaLove += 5;
			}
		},
		surrenderToLove() {
			this.killaLove = 100;
			this.buddyLove = 100;
			this.surrender = true;
		},
	},
});

app.mount('#game');
