// scroll
window.addEventListener('scroll', function () {
	// スクロール量、高さ、コンテンツを取得
	const scroll = window.scrollY;
	const windowHeight = window.innerHeight;
	const boxes = document.querySelectorAll('.c-card__cont-box');

	boxes.forEach(function (box) {
		// boxまでの高さを取得
		const distanceToBox = box.offsetTop;
		// 下記条件が成り立つときだけboxにis-activeクラスを付与する
		if (scroll + windowHeight > distanceToBox) {
			box.classList.add('is-active');
		}
	});
});