function preventNumber(evt) {
	if ((evt.which != 8 && evt.which != 0 && evt.which < 48) || evt.which > 57) {
		evt.preventDefault();
	}
}

// validate
const maTSInput = document.querySelector("#maTS");
const nameInput = document.querySelector("#name");
const amountInput = document.querySelector("#amount");
const imgInput = document.querySelector("#img");
const radios = document.querySelectorAll(".form-check-input");
const formAddNV = document.querySelector(".form-add-nv");
const btnSubmit = document.querySelector(".btn-create");
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

radios[1].addEventListener("click", (e) => {
	const isCheck = e.target.checked;
	if (isCheck) {
		formAddNV.innerHTML = `<div class="mb-3">
        <label for="nameNV" class="form-label fw-bold"
            >Mã nhân viên</label
        >
        <input
            placeholder="Mã nhân viên"
            type="text"
            class="form-control"
            id="maNV"
            min="1"
            name="maNV"
        />
        <div id="maNV_message" class="form-text text-danger d-none">
            {message}
        </div>
    </div>  
        `;

		const maNVInput = document.querySelector("#maNV");
		mp.set("maNV", false);

		maNVInput.addEventListener("keyup", (e) => {
			const regex = /^NV\d/;
			const value = e.target.value;
			const elemMessage = document.querySelector("#maNV_message");
			if (value == "") {
				setErr(elemMessage, "Không được để trống trường này", "maNV");
			} else if (!testRegex(regex, value)) {
				setErr(elemMessage, "Phải bắt đầu bằng NV + mã số", "maNV");
			} else {
				setSuccess(elemMessage, "maNV");
			}
		});
	}
});

radios[0].addEventListener("click", (e) => {
	const isCheck = e.target.checked;
	mp.delete("maNV");

	if (isCheck) {
		formAddNV.innerHTML = "";
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
