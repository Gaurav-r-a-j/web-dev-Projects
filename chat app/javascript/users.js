const searchBar = document.querySelector(".users .search input"),
searchBtn = document.querySelector(".users .search button");



searchBtn.onclick = ()=>{
    searchBar.classList.toggle("active");// this is to achieve the acitve class css property on it 
    searchBar.focus();//this is used to get the input pipline when click on search

    searchBtn.classList.toggle("active");
}

