// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.


// input variables
let image = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let artist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let add = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.

let imgUrl = document.querySelector(".column display-image");
let songName = document.querySelector(".column display-song");
let artist = document.querySelector(".column display-artist");
let songLink = document.querySelector(".column display-link");




// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.

let imgArray = ["https://i.scdn.co/image/ab67616d0000b27309fd83d32aee93dceba78517",
"https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Green_Day_-_Dookie_cover.jpg/220px-Green_Day_-_Dookie_cover.jpg",
"https://i1.sndcdn.com/artworks-000079984264-e8xxju-t500x500.jpg",
"https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Smashing_Pumpkins_Greatest_Hits_album_cover.jpg/220px-Smashing_Pumpkins_Greatest_Hits_album_cover.jpg",
"https://1.bp.blogspot.com/-qeDKNSkBHps/UjowtLbzpaI/AAAAAAAAAV8/fz4wUFjvxEw/s1600/Ten+Pearl+Jam.jpg",
"https://i.ytimg.com/vi/55TOIJxKc74/maxresdefault.jpg"              
];
let songArray = ["Under the Bridge",
"When I Come Around",
"Everlong",
"Drown",
"Even Flow",
"Franklin’s Tower"
];
let artistArray = ["Red Hot Chili Peppers",
"Green Day",
"Foo Fighters",
"The Smashing Pumpkins",
"Pearl Jam",
"Grateful Dead"
];
let linkList = ["https://www.youtube.com/watch?v=N7ZyzCNeFKY",
"https://www.youtube.com/watch?v=77xeMlN7ng4",
"https://www.youtube.com/watch?v=crOZk88eCcg",
"https://www.youtube.com/watch?v=N66Ki1iMMjY",
"https://www.youtube.com/watch?v=tkbgtVFlyCQ",
"https://www.youtube.com/watch?v=55TOIJxKc74"
];




//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
const UTB = {};
UTB.iurl = "https://i.scdn.co/image/ab67616d0000b27309fd83d32aee93dceba78517";
UTB.name = "Under The Bridge";
UTB.artist = "Red Hot Chili Peppers";
UTB.songUrl = "https://www.youtube.com/watch?v=N7ZyzCNeFKY";

const WICA = {};
WICA.iurl = "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Green_Day_-_Dookie_cover.jpg/220px-Green_Day_-_Dookie_cover.jpg"
WICA.name = "When I Come Around"
WICA.artist = "Green Day"
WICA.songUrl = "https://www.youtube.com/watch?v=77xeMlN7ng4"
  
const everlong = {};
everlong.iurl = imgArray[2]
everlong.name = songArray[2]
everlong.artist = artistArray[2]
everlong.songUrl = linkList[2]


const drown = {};
drown.iurl = imgArray[3]
drown.name = songArray[3]
drown.artist = artistArray[3]
drown.songUrl = linkList[3]

const EvenFlow = {};
EvenFlow.iurl = imgArray[4]
EvenFlow.name = songArray[4]
EvenFlow.artist = artistArray[4]
EvenFlow.songUrl = linkList[4]

const FranklinsTower = {};
FranklinsTower.iurl = imgArray[5]
FranklinsTower.name = songArray[5]
FranklinsTower.artist = artistArray[5]
FranklinsTower.songUrl = linkList[5]


// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.

//^^^^^

// task 14: create an array that stores all of the objects.

const songsArray = [UTB, WICA, everlong, drown, EvenFlow, FranklinsTower]

//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

// task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
let imgInput = imgUrl.value
let songInput = songName.value
let artistInput = artist.value
let songLink_input = songLink.value


// task 10: use `.push()` to add each input value to the correct array.
imgArray.push(imgInput)
songArray.push(songInput)
artistArray.push(artistInput)
songArray.push(songLink_input)
}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

// task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.

for(let ){
  
}

}





// click event to add and display songs
add.onclick = function() {
  addSongInfo();
  displaySongInfo();
};

// function call to display stored songs
displaySongInfo();
