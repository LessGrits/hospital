const menu = document.querySelector('.header-top__body');
const contactInfo = document.querySelector('.contact-info');



var map;
function initialize() {
    var mapOptions = {
        zoom: 18,
        center: {lat: 49.2354, lng: 28.414}
    };
    map = new google.maps.Map(document.querySelector('.map'),
        mapOptions);

    var marker = new google.maps.Marker({

        position: {lat: 49.235429, lng:  28.414315},
        map: map
    });
    var infowindow = new google.maps.InfoWindow({
        content: '<p>Marker Location:' + marker.getPosition() + '</p>'
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });
}

google.maps.event.addDomListener(window, 'load', initialize);


addEventListener("scroll", ()=> {
    const scrolled = document.scrollingElement.scrollTop;
    const position = menu.offsetTop;
    scrolled >= position + 10 && (menu.classList.add('fixed') , contactInfo.classList.add('hidden'));
    scrolled === 0 && (menu.classList.remove('fixed') , contactInfo.classList.remove('hidden'));
});

let phoneInput = document.querySelector('.phone')
phoneInput.addEventListener('keydown', function(event) {
    if( !(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) { event.preventDefault() }
    const mask = '+38 (111) 111-11-11'; // Задаем маску

    if (/[0-9\+\ \-\(\)]/.test(event.key)) {
        // Здесь начинаем сравнивать this.value и mask
        // к примеру опять же
        let currentString = this.value;
        let currentLength = currentString.length;
        if (/[0-9]/.test(event.key)) {
            if (mask[currentLength] == '1') {
                this.value = currentString + event.key;
            } else {
                for (var i=currentLength; i<mask.length; i++) {
                    if (mask[i] == '1') {
                        this.value = currentString + event.key;
                        break;
                    }
                    currentString += mask[i];
                }
            }
        }
    }
});





