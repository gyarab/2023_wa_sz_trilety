document.addEventListener('DOMContentLoaded', function () {
    const images = ['1', '2', '3', '4', '5', '6', '7', '8'];
    const dvaObrazky = [...images, ...images];

    const hra = document.getElementById('hra');

    dvaObrazky.sort(() => Math.random());

    let zvoleneKarty = [];
    let zvoleneKartyIDs = [];
    let stejneKarty = [];

    function vytvorHru() {
        for (let i = 0; i < dvaObrazky.length; i++) {
            const karta = document.createElement('div');
            karta.classList.add('karta');
            karta.setAttribute('data-id', i);
            karta.textContent = '?';
            karta.addEventListener('click', otocKartu);
            hra.appendChild(karta);
        }
    }

    function otocKartu() {
        const karta = this;
        const kartaID = karta.getAttribute('data-id');
        zvoleneKarty.push(dvaObrazky[kartaID]);
        zvoleneKartyIDs.push(kartaID);
        karta.textContent = dvaObrazky[kartaID];

        if (zvoleneKarty.length === 2) {
            setTimeout(zkontrolujHru, 500);
        }
    }

    function zkontrolujHru() {
        const karty = document.querySelectorAll('.karta');
        const [ID1, ID2] = zvoleneKartyIDs;
        const [karta1, karta2] = zvoleneKarty;

        if (karta1 === karta2 && ID1 !== ID2) {
            stejneKarty.push(ID1, ID2);
            karty[ID1].style.visibility = 'hidden';
            karty[ID2].style.visibility = 'hidden';
        } else {
            karty[ID1].textContent = '?';
            karty[ID2].textContent = '?';
        }

        zvoleneKarty = [];
        zvoleneKartyIDs = [];

        if (stejneKarty.length === dvaObrazky.length) {
            alert('výhra');
            
        }
    }

    vytvorHru();
});