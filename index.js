function addingEventListener() {
        //grabbing
        const input = document.getElementById('button')
    
        //creating alert
        const clickAlert= () => alert('I was clicked!')
    
        //adding event listener
        input.addEventListener('click', clickAlert);
}
