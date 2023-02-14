let saveEl = document.getElementById("save-el")
let totalEl = document.getElementById("total-people")
let gecmisBilgi = localStorage.getItem("gecmisBilgi")
let totalpeople = localStorage.getItem("totalpeople")
if( gecmisBilgi !== null) {
    saveEl.textContent = localStorage.getItem("gecmisBilgi")
    totalEl.textContent = localStorage.getItem("totalpeople")
} else {
    saveEl.textContent = ""
}


let countEl = document.getElementById("count-el")

let count = 0
let tcount =totalpeople==null?0: parseInt(totalpeople)

function increment() {
    count += 1
    countEl.textContent = count
    
}

function save() {
   
    tcount+=parseInt(count);
    totalEl.textContent = tcount;
    let countStr = count + " - "
    saveEl.textContent += countStr
    localStorage.setItem( "gecmisBilgi", saveEl.textContent )
    localStorage.setItem( "totalpeople", tcount )
    countEl.textContent = 0
    count = 0
}
