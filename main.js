const cards=document.querySelectorAll('.box');

(function shuffle()
{
    console.log('hello');
    cards.forEach(card =>{
        let randnum=Math.floor(Math.random()*12);
        card.style.order=randnum;
    })
})();

cards.forEach(card => card.addEventListener('click',flipcard));



let hasflipped=false;
let firstcard,secondcard;
var lock=false;


function flipcard()
{
    if(lock)
    {
        return;
    }
    
    var x=this;
    this.classList.toggle('hide1');
    setTimeout(function(){
        x.classList.toggle('hide1');
    }, 500);

    if(!hasflipped)
    {
        hasflipped=true;
        firstcard=this;
    }
    else
    {
        if(this==firstcard)
        {
            
        }
        else
        {
            hasflipped=false;
            secondcard=this;
    
            lock=true;
        }
       

    if(firstcard.dataset.img==secondcard.dataset.img)
    {
        firstcard.classList.add('show1');
        secondcard.classList.add('show1');
    }
    

    setTimeout(function() {
        lock=false;
    }, 600);
    }
}




   


    
