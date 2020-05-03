/* Given an arbitrary ransom note string and another string containing letters from all the magazines,
write a function that will return true if the ransom note can be constructed from the magazines;
otherwise, it will return false.
Each letter in the magazine string can only be used once in your ransom note.*/

const harmlessRansomNote= (noteText, magazineText)=>{
    let noteArr = noteText.split(' ');
    let magazineArr = magazineText.split(' ');
    
    let magazineObj ={};

    magazineArr.forEach( word=> {
        if(!magazineObj[word]) magazineObj[word]=0;
        magazineObj[word]++;
    });

    let noteIsPossible = true;
    noteArr.forEach(word=>{
        if(magazineObj[word]){
            magazineObj[word]--;
            
            if(magazineObj[word]<0) noteIsPossible = false;
        }
        else noteIsPossible = false;
    });
    return noteIsPossible;
} 

console.log(harmlessRansomNote("hello there is","Always there is a hello world"));
