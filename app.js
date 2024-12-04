if ('ServiceWorker' in navigator){
    navigator.serviceWorker.register('/service-worker.js')
       .then(registration => console.log('Service Worker Registrado no Domínio: ', registration.scope))
       .catch(err => console.log('O Registro do Service Worker Falhou: ', err));
}

