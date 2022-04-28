// Search bar
const bar = document.getElementById('search-bar')
const UIcity = bar.querySelector('#city')

UIcity.addEventListener('change', changeCity)
document.getElementById('search-button').addEventListener('click', searchHench)

function search(){

    const UIcheckin = bar.querySelector('#checkin')
    const UIguest = bar.querySelector('#guest')
    const UIpet = bar.querySelector('#pet')

    let vals = UIcheckin.value.split('/')

    let check_in = vals[0];
    let check_out = vals[1];

    const item = {
        check_in: check_in,
        check_out: check_out,
        guests: UIguest.value,
        pet: UIpet.checked
    }

    sessionStorage.setItem('search', JSON.stringify(item))
}

function changeCity(){
    let a = bar.querySelector('a')

    console.log(UIcity.value.toLowerCase());

    a.href = `/cities/${UIcity.value.toLowerCase()}#results`
}

function searchHench(){

    if( UIcity.value != ''){
        search()
    }else{
        alert('Please select a city')
    }
}

