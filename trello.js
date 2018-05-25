const myTodos=[]
myTodos.push('buy milk')
myTodos.push('watch youtube')
myTodos.push('go for shopping')
myTodos.forEach(function(todo,index){
console.log("your task no. "+(index+1)+" is : "+todo)
})