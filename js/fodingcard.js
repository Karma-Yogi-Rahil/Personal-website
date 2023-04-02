const panels = Document.querySelectorAll('.pannel')

panels.array.forEach(panel => {
    panel.addEventListerner('click',() =>{
        panel.classList.add('active')
    })
});