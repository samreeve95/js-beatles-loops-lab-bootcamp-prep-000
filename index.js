// add solution here
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function theBeatlesPlay(musicians, instruments)
{
  var empty = [];

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
  
  while (i < clone.length-1)
  {
    clone[i] += "!!!";
  }
  
  return clone;
}

function iLoveTheBeatles(x)
{
  var empty = [];
  do 
  {
    empty.push("I love the Beatles!");
  } while ( x++ < 15 )
  
  return empty;
}