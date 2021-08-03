let slider = document.getElementById('myRange'),
	wrapper = document.getElementById('wrapper');


let width = slider.style.width;

function fun1() {
	wrapper.style.width=slider.value+'px';
}

let born = document.querySelector('.person-info__years_born'),
	birthField = document.querySelector('.person-info__date_arrow');

birthField.addEventListener('click', () => { 
	born.classList.add('person-info__years_disappear');
});



const mQuery2 = window.matchMedia('(max-width: 576px)');

function myFunction(mQuery2) {
if (mQuery2.matches) {
    document.getElementById("bv").innerHTML = "1998";
    document.getElementById("bv1").innerHTML = "1997";
    document.getElementById("bv2").innerHTML = "1996";
    document.getElementById("bv3").innerHTML = "1995";
    document.getElementById("bv4").innerHTML = "1994";
    document.getElementById("bv5").innerHTML = "1993";
    document.getElementById("bv6").innerHTML = "1992";
} else {
	document.getElementById("bv").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp1998";
	document.getElementById("bv1").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp1997";
	document.getElementById("bv2").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp1996";
	document.getElementById("bv3").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp1995";
	document.getElementById("bv4").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp1994";
	document.getElementById("bv5").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp1993";
	document.getElementById("bv6").innerHTML = "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp1992";
}
}

myFunction(mQuery2);
mQuery2.addListener(myFunction);





