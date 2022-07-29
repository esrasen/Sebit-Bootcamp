
// ilk yöntem
// const button = document.querySelector('button');


// ikinci yöntem
// const button = document.querySelector('#buttonId');

// üçüncü yöntem
// const button = document.querySelector('.buttonClass');

// const button = document.getElementsById('buttonClass')[0];

 const button = document.getElementById('buttonId');



// ilk yöntem
// button.addEventListener('click',()=>{
//     console.log("Tıklandı");
// });



//ikinci yöntem
// function add(){
//     console.log('Tıklandı');
// }


console.log(button);


const liElemanlari=document.querySelectorAll('li');
console.log(liElemanlari);

liElemanlari.forEach(eleman=>{

    eleman.addEventListener('click',e=>{
        // console.log("Tıklandı"));
        // console.log(e);
        // console.log(e.target);
        e.target.style.color='blue';

    })
    
})


const ulDegerlerim= document.querySelector('ul');
console.log(ulDegerlerim);
//ulDegerlerim.remove();
liElemanlari.forEach(eleman=>{

    eleman.addEventListener('click',e=>{
       e.target.remove();

    })
})

const liElemanim= document.createElement('li');
liElemanim.textContent='Javascript';
// append//sona eleman ekler
// prepend//başa eleman ekler




    button.addEventListener('click',()=>{
   const liElemanim= document.createElement('li');
   liElemanim.textContent='Javascript';
   ulDegerlerim.append(liElemanim);
   ulDegerlerim.prepend(liElemanim);
    })




