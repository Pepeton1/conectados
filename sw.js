self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/',
        '/conectados.html',
        '/images/',
        '/images/correct-answer.png',
		'/images/icono_conectados_192_x_192.png',
		'/images/icono_conectados_512_x_512.png',
		'/images/incorrect-answer.png',
		'/images/logo-conectados.png',
		'/sounds/',
        '/sounds/countdown.mp3',
		'/sounds/timesup.mp3',
      ]);
    })
  );
});