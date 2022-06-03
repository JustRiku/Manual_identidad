window.onload = () => {
    function generateRandomInteger(max) {
        return Math.floor(Math.random() * max) + 1;
    }

    let value = generateRandomInteger(2);
    console.log(value);

    let names = document.querySelectorAll('.name');
    if (value == 1) {
        names.forEach(item => {
            item.classList.add("green");
        })
    } else {
        names.forEach(item => {
            item.classList.add("blue");
        })
    }
    // let processScroll = () => {
    //     let docElem = document.documentElement,
    //         docBody = document.querySelector('.container'),
    //         scrollLeft = docElem['scrollLeft'] || docBody['scrollLeft'],
    //         scrolRight = (docElem['scrollWidth'] || docBody['scrollWidth']) - window.innerWidth,
    //         scrollPercent = scrollLeft / scrolRight * 100 + '%';

    //         console.log(docElem)
    //         console.log(scrollPercent);

    //     document.getElementById('progress-bar').style.setProperty('--scrollAmount', scrollPercent);
    // }

    // document.addEventListener('scroll', processScroll);

    let arrows = document.querySelectorAll('.arrow');

    let body = document.querySelector('.body');
    let numberOfSections = document.querySelectorAll('.section').length;
    // let sections = document.querySelectorAll('.section');
    let positionIndex = 1;
    // let translateX = 0;

    let client = document.body.clientWidth;

    // let home = document.querySelector('.home').style.width = `${client}px`;
    // sections.forEach(item => {
    //     item.style.width = `${client}px`;
    // })
    console.log(client);
    arrows.forEach(item => {
        item.addEventListener('click', event => {
            // console.log(event.target)
            if (event.target.id == 'left') {
                if (positionIndex !== 1) {
                    positionIndex--;
                    event.target.href = `#${positionIndex}`;
                }
            } else {
                if (positionIndex !== numberOfSections) {
                    positionIndex++;
                    event.target.href = `#${positionIndex}`;
                }
            }
        })
    })
    let block = () => {
        document.querySelectorAll('.show').forEach(item => {
            if(item.classList.contains('block')){
                console.log('okaaaaay, lets go')
            }else{
                item.classList.add('block');
            }
        })
    }
    block();
    let filoTele = document.querySelector('#filo-tele');
    let logoTele = document.querySelector('#logo-tele');
    let tipoTele = document.querySelector('#tipo-tele');
    let colorTele = document.querySelector('#color-tele');
    let styleTele = document.querySelector('#style-tele');
    let compoTele = document.querySelector('#compo-tele');
    let display = document.querySelector('.display');

    document.querySelectorAll('.grid-item').forEach(item => {
        item.addEventListener('click', e => {
            display.style.display = "flex";
            block();
            console.log(e.target.id)
            switch (e.target.id) {
                case 't1':
                    filoTele.classList.remove('block');
                    break;
                case 't2':
                    logoTele.classList.remove('block');
                    break;
                case 't3':
                    tipoTele.classList.remove('block');
                    break;
                case 't4':
                    colorTele.classList.remove('block');
                    break;
                case 't5':
                    styleTele.classList.remove('block');
                    break;
                case 't6':
                    compoTele.classList.remove('block');
                    break;
            }
        })
    })
    let block2 = () => {
        document.querySelectorAll('.show2').forEach(item => {
            if(item.classList.contains('block')){
                console.log('okaaaaay, lets go')
            }else{
                item.classList.add('block');
            }
        })
    }
    block2();
    let filoOnda = document.querySelector('#filo-onda');
    let logoOnda = document.querySelector('#logo-onda');
    let tipoOnda = document.querySelector('#tipo-onda');
    let colorOnda = document.querySelector('#color-onda');
    let figmaOnda = document.querySelector('#figma-onda');
    let display2 = document.querySelector('.display2');

    document.querySelectorAll('.grid-item2').forEach(item => {
        item.addEventListener('click', e => {
            display2.style.display = "flex";
            block2();
            console.log(e.target.id)
            switch (e.target.id) {
                case 'o1':
                    filoOnda.classList.remove('block');
                    break;
                case 'o2':
                    logoOnda.classList.remove('block');
                    break;
                case 'o3':
                    tipoOnda.classList.remove('block');
                    break;
                case 'o4':
                    colorOnda.classList.remove('block');
                    break;
                case 'o5':
                    figmaOnda.classList.remove('block');
                    break;
            }
        })
    })

}