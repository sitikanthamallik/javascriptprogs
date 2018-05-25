let getGrade=function(mark,total){
    let percent=(mark/total)*100
    let grade=''
    if(percent >=90){
        grade='O'
    }
    else if(percent >=80){
        grade='E'
    }
    else if(percent >=70){
        grade='A'
    }
    else if(percent >=60){
        grade='B'
    }
    else if(percent >=50){
        grade='C'
    }
    else if(percent >=40){
        grade='D'
    }
    else{
        grade='F'

    }
    return("percenatge is "+percent+" %  and grade is "+grade)
}
let result=getGrade(70,100)
console.log(result)