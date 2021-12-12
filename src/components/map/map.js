ymaps.ready(init)

function init() {
    let map = new ymaps.Map('map', {
        center: [52.045089724872994,113.48877613093566],
        zoom: 17,
    });
    let placemark = new ymaps.Placemark([52.045152572061795, 113.49099700000001], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../images/marker.webp',
        iconImageSize: [62, 74],
        iconImageOffset: [-35, -80]
    })
    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark);
}
