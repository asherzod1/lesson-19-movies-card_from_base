let cardsDiv=document.createElement('div');
cardsDiv.classList.add('cards');

let container=document.querySelector('.container');
container.appendChild(cardsDiv);

let cardDiv;

for(let i=0; i<movies.length; i++){

    let movie=movies[i];

     cardDiv=document.createElement('div');
    cardDiv.classList.add('card');

    let cardImg=document.createElement('img');
    cardImg.src=movie.posterurl;
    cardImg.alt=movie.title+' Img'; 
    cardImg.style.width='100%';
    cardImg.style.height='300px';

    //card info 

    let movie_title=document.createElement('a');
    movie_title.innerText=movie.title;
    movie_title.href='#'; 

    let movie_year=document.createElement('h3');
    movie_year.innerText='Year: '+movie.year;

    let movie_rating=document.createElement('h3');
    movie_rating.innerText='Rating: '+movie.imdbRating;

    let movie_ganres=document.createElement('h3');
    movie_ganres='Genres : '+movie.genres;
    
    let cardInfoDiv=document.createElement('div');
    cardInfoDiv.style.margin='10px 0';
    cardInfoDiv.classList.add('info-div');

    cardInfoDiv.appendChild(movie_title);
    cardInfoDiv.appendChild(movie_year);
    cardInfoDiv.appendChild(movie_rating);
    cardInfoDiv.append(movie_ganres);

    
    
    
    cardDiv.appendChild(cardImg);
    cardDiv.appendChild(cardInfoDiv);
    cardsDiv.appendChild(cardDiv);
    
}

function saralash(genre){
    let a = genre;
    
    for(let i=0; i<movies[i].length; i++){
        let count=0;
        for(let j=0; j<movies[i].genres.length; j++){
            if(movies[i].genres[j]==genre){
                count++;
            }
        }
       
        if(count==0){
            cardsDiv.children[i].style.display='none';
        }
    }
    
}


