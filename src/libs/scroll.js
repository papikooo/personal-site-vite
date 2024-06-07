// card scroll
document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function () {
    // スクロール量、高さ、コンテンツを取得
    const scroll = window.scrollY;
    const windowHeight = window.innerHeight;
    const boxes = document.querySelectorAll('.c-card__cont-box');

    boxes.forEach(function (box, index) {
      // boxまでの高さを取得
      const distanceToBox = box.getBoundingClientRect().top + window.scrollY;

      // 下記条件が成り立つときだけboxにis-activeクラスを付与する
      if (scroll + windowHeight > distanceToBox) {
        setTimeout(function() {
          box.classList.add('is-active');
        }, index * 200); // 各ボックスに対して0.2秒ずつ遅延を追加
      }
    });
  });

  // ページロード時に一度スクロールイベントを発火
  window.dispatchEvent(new Event('scroll'));
});
