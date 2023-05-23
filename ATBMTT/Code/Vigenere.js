const input = "HONESTYISTHEBE";
const key = "ABADBE";
const mp = new Map();
let output = "";

function initAphalbe() {
	for (let i = 0; i < 26; i++) {
		mp.set(String.fromCharCode(65 + i), i);
	}
}

initAphalbe();

for (let i = 0; i < input.length; i++) {
	let charKey = key[i % key.length];
	let charInput = input[i];
	let newValue = mp.get(charKey) + mp.get(charInput);
	for (let [key, value] of mp) {
		if (value == newValue % 26) {
			output += key;
			break;
		}
	}
}
console.log(output);
