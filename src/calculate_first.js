function calculateFirst(V, T, S, PRODUCTIONS){
    // Divide every production set in an array divided by each '|'
    for(let index = 0; index < PRODUCTIONS.length; index++){
        PRODUCTIONS[index] = PRODUCTIONS[index].split('|');
    }

    // For every 
    PRODUCTIONS.forEach((arrayProductions, vIndex) => {
        console.log(V[vIndex]);
        calculate(V, T, arrayProductions, PRODUCTIONS, -1);
    });

}

function calculate(V, T, arrayProductions, PRODUCTIONS, recursiveAllowedCounter){
    recursiveAllowedCounter++;
    if(recursiveAllowedCounter < PRODUCTIONS.length + 1) {
        arrayProductions.forEach((production) => {
            if(V.includes(production[0])) {
                console.log('First(' + production + ') = {');
                const indexVRecursiveProd = V.indexOf(production[0]);
                if(indexVRecursiveProd < PRODUCTIONS.length){
                    calculate(V, T, PRODUCTIONS[indexVRecursiveProd], PRODUCTIONS, recursiveAllowedCounter);
                } else if(indexVRecursiveProd >= PRODUCTIONS.length){
                    console.log('{}');
                } else {
                    console.log('{}');
                }
            } else if(T.includes(production[0])) {
                console.log('First(' + production + ') = { ' + production[0] + ' }');
            }
        });
    } else {
        console.log('{}');
    }
}


    // PRODUCTIONS.forEach((productionSet, vIndex) => {
    //     console.log(V[vIndex]);
    //     const productionSetSplited = productionSet.split('|');
    //     for(let i = 0; i < productionSetSplited.length; i++) {
    //         calculate(vIndex, V, T, S, productionSetSplited[i])
    //     }
    // });
//}

// function calculate(vIndex, V, T, S, production) {
//     if(V.includes(production[0])) {

//     } else if(T.includes(production[0])) {
//         console.log('First(' + production + ') = { ' + production[0] + ' }');
//     }
// }


export { calculateFirst as calculateSetFirst };
