(function () {
  if (sessionStorage.getItem('tj-shown')) return;

  setTimeout(function () {
    sessionStorage.setItem('tj-shown', '1');

    var style = document.createElement('style');
    style.textContent = [
      '#tj{position:fixed;bottom:28px;right:28px;z-index:99999;width:310px;',
      'background:linear-gradient(145deg,#0D0D25,#111133);',
      'border:1px solid rgba(195,149,60,.45);padding:0 0 22px;',
      'box-shadow:0 24px 64px rgba(0,0,0,.7);',
      'transform:translateY(24px);opacity:0;',
      'transition:transform .4s cubic-bezier(.22,.68,0,1.2),opacity .35s ease}',
      '#tj.tj-on{transform:translateY(0);opacity:1}',
      '#tj-bar{height:3px;background:linear-gradient(90deg,#FFD700,#C3953C);margin-bottom:20px}',
      '#tj-x{position:absolute;top:10px;right:12px;background:none;border:none;',
      'color:rgba(255,255,255,.35);font-size:1.15rem;cursor:pointer;',
      'padding:4px 8px;line-height:1;transition:color .2s}',
      '#tj-x:hover{color:#fff}',
      '#tj-body{padding:0 22px}',
      '#tj-icon{font-size:1.5rem;margin-bottom:6px}',
      '#tj-title{font-family:"Bebas Neue",sans-serif;font-size:1.35rem;',
      'letter-spacing:.1em;color:#fff;margin-bottom:6px}',
      '#tj-sub{font-size:.73rem;color:rgba(160,160,195,.85);line-height:1.65;',
      'margin-bottom:18px;letter-spacing:.02em}',
      '.tj-btns{display:flex;gap:8px}',
      '.tj-btn{flex:1;border:1px solid rgba(195,149,60,.4);',
      'background:rgba(195,149,60,.07);color:#fff;',
      'font-family:"Bebas Neue",sans-serif;font-size:1rem;letter-spacing:.1em;',
      'padding:11px 4px;cursor:pointer;text-decoration:none;text-align:center;',
      'display:block;transition:background .25s,border-color .25s}',
      '.tj-btn:hover{background:rgba(195,149,60,.22);border-color:rgba(195,149,60,.9)}'
    ].join('');
    document.head.appendChild(style);

    var el = document.createElement('div');
    el.id = 'tj';
    el.innerHTML =
      '<div id="tj-bar"></div>' +
      '<button id="tj-x" aria-label="Close">×</button>' +
      '<div id="tj-body">' +
        '<div id="tj-icon">🙏</div>' +
        '<div id="tj-title">Support the Mission</div>' +
        '<div id="tj-sub">The health guides, wealth wisdom, and daily inspiration — all free.<br>If it\'s adding value to your life, send some love. Every bit fuels what we\'re building.</div>' +
        '<div class="tj-btns">' +
          '<a class="tj-btn" href="https://buy.stripe.com/8x2fZhgk04zM7pJ8klasg0f" target="_blank">☕ $5</a>' +
          '<a class="tj-btn" href="https://buy.stripe.com/4gMbJ1d7O9U6dO7445asg0g" target="_blank">🙏 $10</a>' +
          '<a class="tj-btn" href="https://buy.stripe.com/4gMbJ11p6c2e5hBdEFasg0i" target="_blank">💛 $25</a>' +
        '</div>' +
      '</div>';
    document.body.appendChild(el);

    setTimeout(function () { el.classList.add('tj-on'); }, 40);

    document.getElementById('tj-x').addEventListener('click', function () {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 400);
    });
  }, 60000);
})();
