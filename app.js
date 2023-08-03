const btn = document.querySelector('.bar_btn')
const list = document.querySelector('.sitenav-list')

let barbtn = false
btn.addEventListener('click', () => {
    if(barbtn){
        list.style.display = 'block'

    }else{
        list.style.display = 'none'
    }
    barbtn = !barbtn
})