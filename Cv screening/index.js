// console.log('Thi is my index.js and this is tutorial no.55 in which we are making CV screener');

//Data is an array of objects which contains information about the candidatesß
const data=[
    {
       name: "rohan das",
       age:18,
       city:'KolKata',
       language: "Python",
       framework:"Django" ,
       image: 'https://randomuser.me/api/portraits/med/men/75.jpg'
    },
    {
       name: "Subbam Sharam",
       age:28,
       city:'Banglore',
       language: "Javascript",
       framework:"Angular" ,
       image: 'https://randomuser.me/api/portraits/med/men/77.jpg'
    },
    {
       name: "Camella Cabello",
       age:18,
       city:'KolKata',
       language: "Python",
       framework:"Django" ,
       image: 'https://randomuser.me/api/portraits/med/women/78.jpg'
    },
    {
       name: "Aishwariya Rai",
       age:45,
       city:'Mumbai',
       language: "Python",
       framework:"Flask" ,
       image: 'https://randomuser.me/api/portraits/med/women/71.jpg'
    },
    {
       name: "rohit Sharma",
       age:37,
       city:'Jharkhand',
       language: "Go",
       framework:"Go framework",
       image: 'https://randomuser.me/api/portraits/med/men/71.jpg'
    },
]


//CV iterator

function cvIterator(profiles){
    let nextIndex =0;
    return{
        next:function(){
            return nextIndex<profiles.length?{value:profiles[nextIndex++], done:false}: {done:true}
        }
    }
}

const candidates = cvIterator(data);
nextCV();//used to get first data
//Button listener for next button

const next = document.getElementById('next');
next.addEventListener('click',nextCV);


function nextCV(){
    const CurrenCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(CurrenCandidate != undefined){
    image.innerHTML = `<img src="${CurrenCandidate.image}" alt="">`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item name"><b>${CurrenCandidate.name}</b></li>
    <li class="list-group-item age">${CurrenCandidate.age} years old </li>
    <li class="list-group-item city">Lives in ${CurrenCandidate.city}</li>
    <li class="list-group-item language">Primarly works on ${CurrenCandidate.language}</li>
    <li class="list-group-item framework">Uses ${CurrenCandidate.framework} framwork</li>

  </ul>`
    }

    else{
        alert('End of application');
        window.location.reload();
    }
}





