function mouselocation(event) {
    let x = event.clientX;
    let y = event.clientY;
    return [x,y]
}

function getRandomColor() {

    let colors = ['#F08700','#F49F0A','#EFCA08','#45062E','#7F055F','#E5A4CB']
    return `${colors[Math.floor(Math.random() * colors.length)]}`;
}

function mouselocation(event) {
    let x = event.clientX;
    let y = event.clientY;
    return [x, y];
}

function fire1(color) {
    document.addEventListener('click', (event) => {
        const location = mouselocation(event);
        const angles = [45, 315];
        angles.forEach((angle, index) => {
            const hr = document.createElement('hr');
            hr.style.transform = `rotate(${angle}deg)`;
            hr.style.width = '100px';
            hr.style.opacity = '0';
            hr.style.borderColor = color;
            hr.style.position = 'absolute';
            hr.style.top = `${location[1] + index * 2.5}px`;
            hr.style.left = `${location[0] + index * 2.5}px`;
            hr.style.animation = 'blast 2s';
            document.body.appendChild(hr);
            document.body.addEventListener('animationend', () => {
                document.body.removeChild(hr);})
        });
    });    
}

function fire2(color) {
    document.addEventListener('click', (event) => {
        const location = mouselocation(event);
        const angles = [90, 180];
        angles.forEach((angle, index) => {
            const hr = document.createElement('hr');
            hr.style.transform = `rotate(${angle}deg)`;
            hr.style.width = '100px';
            hr.style.opacity = '0';
            hr.style.borderColor = color;
            hr.style.position = 'absolute';
            hr.style.top = `${location[1] + index * 2.5}px`;
            hr.style.left = `${location[0] + index * 2.5}px`;
            hr.style.animation = 'blast 2s';
            document.body.appendChild(hr);
            document.body.addEventListener('animationend', () => {
                document.body.removeChild(hr);})
        });
    });    
}

let y = document.querySelector('.firework')

document.addEventListener('click', function(event) {
    fire1(getRandomColor());
    fire2(getRandomColor());
})