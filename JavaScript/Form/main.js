/*Length path*/

let texts = document.querySelector(".fon__texts"),
	lens = texts.getTotalLength();
console.log(lens);

let texti = document.querySelector(".fon__texti"),
	leni = texti.getTotalLength();
console.log(leni);

let textg = document.querySelector(".fon__textg"),
	leng = textg.getTotalLength();
console.log(leng);

let textn = document.querySelector(".fon__textn"),
	lenn = textn.getTotalLength();
console.log(lenn);

let textu = document.querySelector(".fon__textu"),
	lenu = textu.getTotalLength();
console.log(lenu);

let textp = document.querySelector(".fon__textp"),
	lenp = textp.getTotalLength();
console.log(lenp);

let btn = document.querySelector(".footer__btn");

/*Validate*/
"use strict"

document.addEventListener ('DOMContentLoaded', function () {
	const form = document.querySelector(".form-data");
	form.addEventListener('submit', formSend);

	async function formSend (e) {
		e.preventDefault();

		let error = formValidate(form);

		let formData = new FormData (form);

		if (error === 0) {
			popup1.classList.add('appear');
			let response = await fetch('sendmail.php', {
				method: 'POST',
				body: formData
			});
			if(response.ok) {
				let result = await response.json();
				alert(result.message);
				formPreview.innerHTML = '';
				form.reset();
				popup1.classList.remove('appear');
			} else {
				popup1.classList.remove('appear');
				popup2.classList.add('appear2');
			}	
		} else {
			btn.classList.add('footer__btn_motion');
			popup2.classList.remove('appear2');	
			popup3.classList.add('appear3');

		}
	}
	
	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_email')){
				if (emailTest(input)) {
					formAddError(input);
					input.style.color = 'red';
					error++;
				}
			} else {
				if (input.value === '') {
				formAddError(input);
				input.style.color = 'black';
				error++;
				}
			}
		}

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_password')){
				if (passwordTest(input)||passwordValidate(input)) {
					formAddError(input);
					popup4.classList.add('appear4');
					input.style.color = 'red';
					error++;
				}
			} else {
				if (input.value === '') {
				formAddError(input);
				input.style.color = 'black';
				error++;
				}
			}
		}
		
		return error;

	}
	function formAddError (input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}

	function formRemoveError (input){
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}

	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
		
	}	

	function passwordValidate(input) {
		if (!passwordNew1===passwordNew2) {
				return false;
	} 
	}
		function passwordTest(input) {
		return !/(?=.*[0-9])(?=.*[A-Za-zA-Яа-яЁё]).{8,}/.test(input.value);
	}

})

	let fieldData = document.querySelector(".form-wrapper__text"), 
		popup = document.querySelectorAll(".popup"),
		popup1 = document.querySelector(".popup1"),
		popup2 = document.querySelector(".popup2"),
		popup3 = document.querySelector(".popup3"),
		popup4 =  document.querySelector(".popup4"),
		popupBtn = document.querySelector(".popup__link2"),
		popupBtn2 = document.querySelector(".popup__link3"),
		passwordNew1 = document.querySelector(".form-wrapper__password1").value,
		passwordNew2 = document.querySelector(".form-wrapper__password2").value;

	fieldData.addEventListener('click', () => { 
	btn.classList.remove('footer__btn_motion');
});

	popupBtn.addEventListener('click', () => {
		popup3.classList.remove('appear3');
	})

		popup1.addEventListener('click', function() {
    popup1.classList.remove('appear');
    this.classList.remove('appear');
});

		popup2.addEventListener('click', function() {
    popup2.classList.remove('appear2');
    this.classList.remove('appear2');
});
	
	popup3.addEventListener('click', function() {
    popup3.classList.remove('appear3');
    this.classList.remove('appear3');
});

	popup4.addEventListener('click', function() {
    popup4.classList.remove('appear4');
    this.classList.remove('appear4');
});    
	
 