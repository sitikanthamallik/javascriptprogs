const myTodos=[]
myTodos.unshift('buy milk')
myTodos.unshift('watch youtube')
myTodos.unshift('go for shopping')

for(let index=0;index<myTodos.length;index++)
{
    console.log("your task no. "+(index+1)+" is : "+myTodos[index])
}