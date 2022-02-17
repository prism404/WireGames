var loader = document.getElementsByClassName("container-loader")[0];

function init() {
	setTimeout(() => {
		loader.classList.add('hiding');
	}, 2000);
}


init();

$('.carousel').carousel();

console.log($('.carousel').carousel());
