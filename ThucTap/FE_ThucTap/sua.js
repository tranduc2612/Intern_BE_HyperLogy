const maTSInput = document.querySelector("#maTS");
const nameInput = document.querySelector("#name");
const amountInput = document.querySelector("#amount");
const btnSubmit = document.querySelector(".btn-update");

const mp = new Map();

mp.set(nameInput, false);
mp.set(maTSInput, false);
mp.set(amountInput, false);

nameInput.addEventListener("keyup", (e) => {
	const regex = /^[^ !"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+$/;
	const value = e.target.value;
	const elemMessage = document.querySelector("#name_message");
	if (value.length == 0) {
		setErr(elemMessage, "Không được để trống trường này", nameInput);
	} else if (value.length > 40) {
		setErr(elemMessage, "Quá 40 kí tự", nameInput);
	} else if (!testRegex(regex, value)) {
		setErr(elemMessage, "Không được chưa các kí tự đặc biệt", nameInput);
	} else {
		setSuccess(elemMessage, nameInput);
	}
});

maTSInput.addEventListener("keyup", (e) => {
	const regex = /^TS\d/;
	const value = e.target.value;
	const elemMessage = document.querySelector("#maTS_message");
	if (value == "") {
		setErr(elemMessage, "Không được để trống trường này", maTSInput);
	} else if (!testRegex(regex, value)) {
		setErr(elemMessage, "Phải bắt đầu bằng TS + mã số", maTSInput);
	} else {
		setSuccess(elemMessage, maTSInput);
	}
});

amountInput.addEventListener("keyup", (e) => {
	const value = e.target.value;
	const elemMessage = document.querySelector("#amount_message");
	if (value < 1) {
		setErr(elemMessage, "Số lượng không được bé hơn 1", amountInput);
	} else {
		setSuccess(elemMessage, amountInput);
	}
});

function setErr(elem, message, key) {
	elem.classList.remove("d-none");
	elem.innerHTML = message;
	mp.set(key, false);
}

function setSuccess(elem, key) {
	elem.classList.add("d-none");
	elem.innerHTML = "";
	mp.set(key, true);
}

function testRegex(regexString, str) {
	return regexString.test(str);
}

btnSubmit.addEventListener("click", (event) => {
	mp.forEach((e, index) => {
		console.log(e);
		if (e == false) {
			event.preventDefault();
		}
	});
});
