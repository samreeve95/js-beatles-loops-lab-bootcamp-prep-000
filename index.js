// add solution here
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments)
{
  var empty = [];
  var x = 0;
  console.log("17");
  
  for (x=0;x<musicians.length;x++)
  {
    empty.push(`${musicians[x]} plays ${instruments[0]}`);
  }
  
  return empty;
}

function johnLennonFacts(facts)
{
  var i = 0;
  var clone = facts.slice(0);
  
  console.log("32");
  
  while (i++ < clone.length - 1)
  {
    clone[i] += "!!!";
  }
  console.log("38");
  
  return clone;
}

function iLoveTheBeatles(x)
{
  var empty = [];
  do 
  {
    empty.push("I love the Beatles!");
    console.log(x);
  } while ( x++ < 15 )
  
  return empty;
}