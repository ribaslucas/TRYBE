let grade = 40  

switch(true){
    case (grade > 100 || grade < 0):
        console.log("Nota inválida.");
        break;
    case (grade>=90):
        console.log("Você tirou A. Parabéns!");
        break;
    case (grade>=80):
        console.log("Você tirou B. Legal!");
        break;
    case (grade>=70):
        console.log("Você tirou C. Estude mais na próxima!");
        break;
    case (grade>=60):
        console.log("Você tirou D. Mais sorte da próxima vez.");
        break;
    case (grade>=50):
        console.log("Você tirou E. Não foi uma boa nota.");
        break;
    case (grade < 50):
        console.log("Você tirou F. Infelizmente foi uma péssiam nota.");
        break;
}