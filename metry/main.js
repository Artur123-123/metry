function metry(){
    let pow = document.getElementById('pow').value
    let wym1 = document.getElementById('wym1').checked
    let wym2 = document.getElementById('wym2').checked
    let wynik = document.getElementById('metry')
    let koszt = 0 
    if(wym1) {
        koszt = pow * 70
        wynik.innerHTML='Koszt kafelkowania: '+koszt+ ' zł'
        return
    }
    if(wym2){
        koszt = pow * 80
        wynik.innerHTML='Koszt kafelkowania: '+koszt+ ' zł'
        return
    }
}