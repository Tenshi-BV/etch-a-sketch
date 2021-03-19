const container = document.querySelector('#container');
makeRows(16);

function makeRows(resos) {
        container.style.setProperty('--resos', resos);
        container.style.setProperty('--resos', resos);
        for (let i = 0; i < (resos ** 2); i++) {
                let gridDiv = document.createElement("div");
                gridDiv.classList.add('gridDiv');
                container.appendChild(gridDiv);
        };
};

const gridDivs = document.querySelectorAll('div');
gridDivs.forEach((div) => {
        div.addEventListener('mouseover', function (e) {
                e.target.style.backgroundColor = 'black';
        })
})

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
        let resos = prompt('Pick new resolution (between 1 and 100):')
        if (!isNaN(resos) && resos > 0 && resos < 101) {
                const toRemove = document.querySelectorAll('#container>.gridDiv');
        toRemove.forEach((gridDiv) => {
                container.removeChild(gridDiv);
        })
        makeRows(resos);
        } else {
                return;
        }
})