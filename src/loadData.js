

const loadData = async () => {

    const req = new Request('../data/data.json')
    fetch(req).then((e) => {
        e.json()
            .then((e) => {
                console.log(e)
                localStorage.setItem('potData', JSON.stringify(e))
            })
            .then((e) => {
                console.log(e)
                displayData()
            })
    })
}

const displayData = () => {
    let data = JSON.parse(localStorage.getItem('potData'));
    const div = document.querySelector('.macetasContainer')
    console.log(data)
    for (let item of data.pots) {
        console.log(item)
        div.innerHTML += `<div class='macetaItem'> <p>Number:${item.id}</p>` + "<br />" + `<p>Size:${item.size}</p> </div>`
    }
}


let but = document.querySelector('#dataLoader')
but.addEventListener('click', loadData)