export function handleScroll() {
  const boxes = document.querySelectorAll('.js-scroll');

  const observer = new IntersectionObserver((entries, observer) => {
    let allVisible = true;
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(function() {
          entry.target.classList.add('is-active');
        }, index * 200); // 遅延を加えつつ、要素を表示
      } else {
        allVisible = false;
      }
    });
    // すべてのボックスが表示されたら監視を停止
    if (allVisible) {
      observer.disconnect();
    }
  }, {
    threshold: 0.5  // 要素が50%表示されたときにアクティブ化
  });

  boxes.forEach(box => {
    observer.observe(box);
  });
}
