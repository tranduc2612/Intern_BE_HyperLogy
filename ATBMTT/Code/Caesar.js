// Mã Caesar
const input = "YOUREONLYYOUNGON";
const key = 8;
const mp = new Map();
let output = "";

function initAphalbe() {
	for (let i = 0; i < 26; i++) {
		mp.set(String.fromCharCode(65 + i), i);
	}
}

console.log();

initAphalbe();

console.log(mp);

for (let i = 0; i < input.length; i++) {
	const current = mp.get(input[i]);
	const newValue = (current + key) % 26;
	for (let [key, value] of mp) {
		if (value == newValue) {
			output += key;
			break;
		}
	}
}
console.log(output);
