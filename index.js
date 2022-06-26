//Define scores
let homeScore = 0;
let guestScore = 0;

//Scores elements
const homeScoreBoxEl = document.getElementById("score-box-home")
const guestScoreBoxEl = document.getElementById("score-box-guest")

homeScoreBoxEl.textContent = homeScore;
guestScoreBoxEl.textContent = guestScore;

//Home Scoring Button Elements

const onePointHomeEl = document.getElementById("home-btn-plus1")
const twoPointHomeEl = document.getElementById("home-btn-plus2")
const threePointHomeEl = document.getElementById("home-btn-plus3")

//Guest Scoring Button Elements

const onePointGuestEl = document.getElementById("guest-btn-plus1")
const twoPointGuestEl = document.getElementById("guest-btn-plus2")
const threePointGuestEl = document.getElementById("guest-btn-plus3")


// Home Score Button functions

function onePointHome() {
   homeScore = homeScore += 1;
   homeScoreBoxEl.textContent = homeScore
   return(
   homeScore
   )}

function twoPointHome() {
   homeScore = homeScore += 2;
   homeScoreBoxEl.textContent = homeScore;
   return(
   homeScore
   )
} 

function threePointHome() {
    homeScore = homeScore += 3;
   homeScoreBoxEl.textContent = homeScore;
   return(
   homeScore
   )
}

// Guest Score Button functions

function onePointGuest() {
   guestScore = guestScore += 1;
   guestScoreBoxEl.textContent = guestScore
   return(
   guestScore
   )}
   
   function twoPointGuest() {
   guestScore = guestScore += 2;
   guestScoreBoxEl.textContent = guestScore
   return(
   guestScore
   )}
   
   function threePointGuest() {
   guestScore = guestScore += 3;
   guestScoreBoxEl.textContent = guestScore
   return(
   guestScore
   )}
   
   if ( homeScore > guestScore) {
       
   }
   
   //New Game
   
   function newGame() {
       homeScore = 0;
       guestScore =0;
       homeScoreBoxEl.textContent = homeScore;
       guestScoreBoxEl.textContent = guestScore  
   }