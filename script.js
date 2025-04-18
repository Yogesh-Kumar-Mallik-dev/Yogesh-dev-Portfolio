// Sticky Navbar on Scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Scroll One Bubble at a Time
  const flow = document.querySelector('.progress-flow');
  const leftBtn = document.querySelector('.scroll-btn.left');
  const rightBtn = document.querySelector('.scroll-btn.right');
  
  function getSingleBubbleScroll() {
    const items = flow.querySelectorAll('.flow-item');
    if (items.length >= 2) {
      return items[1].offsetLeft - items[0].offsetLeft;
    }
    return 0;
  }
  
  leftBtn.addEventListener('click', () => {
    flow.scrollBy({ left: -getSingleBubbleScroll(), behavior: 'smooth' });
  });
  
  rightBtn.addEventListener('click', () => {
    flow.scrollBy({ left: getSingleBubbleScroll(), behavior: 'smooth' });
  });
  