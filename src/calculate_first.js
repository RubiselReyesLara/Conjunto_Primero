function calculateSetFirst(V, T, S, PRODUCTIONS){
    PRODUCTIONS.forEach(productionSet => {
        const productionSetSplited = productionSet.split('|');

        for(let i = 0; i <= productionSetSplited.length; i++) {
            verify(V, T, S, productionSetSplited[i]);
        }
    });
}

function verify(V, T, S, production){
    if(V.includes(production[0])) {
        console.log(production[0], 'recusividad');
    } else if(T.includes(production[0])) {
        console.log(production[0], 'terminal');
    // ESTABLECER UN SUBSTRING EN LAS PRODUCCIONES DESDE CADA UNA
    }
}


export { calculateSetFirst };
