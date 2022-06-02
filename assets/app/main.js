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
    let positionIndex = 2;
    // let translateX = 0;

    let client = document.body.clientWidth;

    // let home = document.querySelector('.home').style.width = `${client}px`;
    // sections.forEach(item => {
    //     item.style.width = `${client}px`;
    // })
    console.log(client);
    arrows.forEach(item => {
        item.addEventListener('click', event => {
            console.log(event.target)
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
            body.style.transform = `translatex(${translateX}px)`;
        })
    })

}