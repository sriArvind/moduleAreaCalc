import { squareArea, rectangleArea, circleArea } from "/scripts/logic.js";

// Dom Manipulation for Selection;
var choice = document.getElementById('shape');
choice.addEventListener('change', selectShape);

function selectShape(e) {
    e.preventDefault();

    let square = document.getElementById('square');
    let rectangle = document.getElementById('rectangle');
    let circle = document.getElementById('circle');

    let imgWrap = document.getElementById('imgWrap');
    let image = document.querySelector('img');

    let result = document.getElementById('result');

    if (choice.value === 'square') {
        square.style.display = 'block';
        rectangle.style.display = 'none';
        circle.style.display = 'none';

        imgWrap.style.display = 'block';
        image.setAttribute('src', 'images/square.png')

        result.style.display = 'none';
    }
    else if (choice.value === 'rectangle') {
        square.style.display = 'none';
        rectangle.style.display = 'block';
        circle.style.display = 'none';

        imgWrap.style.display = 'block';
        image.setAttribute('src', 'images/rectangle.png')

        result.style.display = 'none';
    }
    else if (choice.value === 'circle') {
        square.style.display = 'none';
        rectangle.style.display = 'none';
        circle.style.display = 'block';

        imgWrap.style.display = 'block';
        image.setAttribute('src', 'images/circle.png')

        result.style.display = 'none';
    }
}

// Dom Manipulation for Square;
var sqArea = document.getElementById('sqArea');
sqArea.addEventListener('click', sqDom);

function sqDom(e) {
    e.preventDefault();

    let side = document.getElementById('side');
    let a = side.value;
    let area = squareArea(a);

    let output = document.querySelector('h4')
    output.innerHTML = `The Area of Your Square is = ${area}`;

    let result = document.getElementById('result');
    result.style.display = 'block';
}

// Dom Manipulation for Rectangle;
var recArea = document.getElementById('recArea');
recArea.addEventListener('click', recDom);

function recDom(e) {
    e.preventDefault();

    let length = document.getElementById('length');
    let l = length.value;
    let breadth = document.getElementById('breadth');
    let b = breadth.value;
    let area = rectangleArea(l, b);

    let output = document.querySelector('h4')
    output.innerHTML = `The Area of Your Rectangle is = ${area}`;

    let result = document.getElementById('result');
    result.style.display = 'block';
}

// Dom Manipulation for Circle;
var cirArea = document.getElementById('cirArea');
cirArea.addEventListener('click', cirDom);

function cirDom(e) {
    e.preventDefault();

    let radius = document.getElementById('radius');
    let r = radius.value;
    let area = circleArea(r);

    let output = document.querySelector('h4')
    output.innerHTML = `The Area of Your Square is = ${area}`;

    let result = document.getElementById('result');
    result.style.display = 'block';
}