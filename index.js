

function takeANumber(line,name){
 line.push(name)
 
<<<<<<< HEAD
return `Welcome, ${name}. You are number ${line.length} in line.`

}

function nowServing(line){
=======
return `Welcome ${name} number: ${line}`

}

function nowServing(){
>>>>>>> 619dda413fb448f52dc899fbf4823e1ab68eab2d
  
  if (!line.length) {
    return "There is nobody waiting to be served!"
  }
  
<<<<<<< HEAD
  return `Currently serving ${line.shift()}.`
=======
  return `we are currently serving ${line.shift()}`
>>>>>>> 619dda413fb448f52dc899fbf4823e1ab68eab2d
  
}

function currentLine(line){
  if (!line.length) {
<<<<<<< HEAD
    return "The line is currently empty."}
  
  const numbersAndNames = []
  
  for (let i = 0, l = line.length; i < l; i++) {
=======
    console.log("The line is currently empty.")}
  
  numbersAndNames = []
  
  for (i = 0, l = line.length; i < l; i++) {
>>>>>>> 619dda413fb448f52dc899fbf4823e1ab68eab2d
  numbersAndNames.push(`${i + 1}. ${line[i]}`)
  }
  
  return `The line is currently: ${numbersAndNames.join(', ')}`
}