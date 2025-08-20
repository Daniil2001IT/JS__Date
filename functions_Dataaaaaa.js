


let now = 'time'

const output = document.getElementById('output')
const full = document.getElementById('full')
const date = document.getElementById('date')
const time = document.getElementById('time')


full.onclick = function () {
    if( now = 'full') {
       format()
    }
}

date.onclick = function () {
    if( now = 'date') {
       format()
    }
}

time.onclick = function () {
    if( now = 'time') {
       format()
    }
}




ipdate() // Вызов. Написал, чтобы сразу отображался инфа. Из за setInterval она отображалась бы не сразу


setInterval( ipdate, 1) // сократил
    

function ipdate () {
    output.textContent = format(now)
}


function format (cass) {
    let data = new Date()
    switch (cass) {
        case 'full':
            return data.toLocaleString()
            
        
        case 'date':
            return  data.toLocaleDateString()
            
        case 'time':
            return data.toTimeString().split(' ')[0]

        default:
            return  data.toJSON()
    }
}
































