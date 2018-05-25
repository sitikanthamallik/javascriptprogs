let myTodos={
    day:'monday',
    meetings:0,
    meetDone:0,
}
let addMeeting=function(todo,meet=0){
    todo.meetings=todo.meetings+meet
}
let meetDone=function(todo,meet=0){
    todo.meetDone=todo.meetDone-meet
}
let resetDay=function(todo){
    todo.meetings=0;
    todo.meetDone=0;
}
let getSummary=function(todo){
    let meetleft=todo.meetings+todo.meetDone
    return("you have " +meetleft+" meetings left today")
}
addMeeting(myTodos,4)
addMeeting(myTodos,2)
meetDone(myTodos,5)
console.log(getSummary(myTodos))
