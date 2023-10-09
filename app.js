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
	watch: {
		killaLove(value) {
			if (value >= 100 && this.buddyLove >= 100) {
				this.winner = 'draw';
			} else if (value >= 100) {
				this.winner = 'killa';
			}
		},
		buddyLove(value) {
			if (value >= 100 && this.killaLove >= 100) {
				this.winner = 'draw';
			} else if (value >= 100) {
				this.winner = 'buddy';
			}
		},
	},
	methods: {
		startGame() {
			this.killaLove = 0;
			this.buddyLove = 0;
			this.winner = null;
			this.logMessages = [];
			this.surrender = false;
		},
		kissKilla() {
			const kissValue = getRandomValue(5, 12);
			this.killaLove += kissValue;
			this.kissBuddy();
			alert('Killa kisses Buddy back!');
			this.addLogMessage('killa', kissValue);
		},
		kissBuddy() {
			const kissValue = getRandomValue(7, 15);
			this.buddyLove += kissValue;
			this.addLogMessage('buddy', kissValue);
		},
		kissRandom() {
			const random = getRandomValue(1, 5);
			if (random === 1) {
				this.buddyLove += 10;
				this.addLogMessage('buddy', 10);
			} else if (random === 2) {
				this.killaLove += 15;
				this.addLogMessage('killa', 15);
			} else if (random === 3) {
				this.buddyLove += 5;
				this.addLogMessage('buddy', 5);
			} else if (random === 4) {
				this.killaLove += 25;
				this.addLogMessage('killa', 25);
			}
		},
		surrenderToLove() {
			this.killaLove = 100;
			this.buddyLove = 100;
			this.surrender = true;
		},
		addLogMessage(who, value) {
			this.logMessages.unshift({
				actionBy: who,
				actionValue: value,
			});
		},
	},
});

app.mount('#game');
