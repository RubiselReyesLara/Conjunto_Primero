import  { calculateSetFirst }  from "./calculate_first.js";

const getV_T_S = (grammar) => {
    const RULES = Object.keys(grammar); // A
    const PRODUCTIONS = Object.values(grammar); // bB1 | aPs1 | &

    // GET V
    // V => left side vars and uppercases are considered like variables,and prime uppercases
    const V = getV(RULES, PRODUCTIONS);
    document.querySelector("#v > input").value = `{ ${ V } }`;

    // GET T
    // Terminal => All elements in right side that not be included in V
    const T = getT(V, PRODUCTIONS);
    document.querySelector("#t > input").value = `{ ${ T } }`;

    // GET S
    // Start state
    const S = getS(V);
    document.querySelector("#s > input").value = `{ ${ S } }`;
    calculateSetFirst(V, T, S, PRODUCTIONS);

}

function getV(leftSide_vars, rightSide_chains) {
    let V = new Array();
    let uppercases_array = new Array();

    rightSide_chains.forEach((current_chainArray) => {
        let uppercase_array = new Array();
        let primeUppercase_array = new Array();

        // Detect if the chain set that have uppercase prime
        if(current_chainArray.search(/([A-Z])[']/g) >= 0) {
            primeUppercase_array = current_chainArray.match(/([A-Z])[']/g);

            primeUppercase_array.forEach((letter) => {
                current_chainArray = current_chainArray.replace(letter, '');
            });
        }

        // Detect if the chain set that have an uppercase
        if(current_chainArray.search(/[A-Z]/g) >= 0) {
            uppercase_array = current_chainArray.match(/[A-Z]/g);
        }

        // Concat uppercases (prime and normal) arrays, and pushing in a complete uppercase array
        uppercases_array.push(uppercase_array.concat(primeUppercase_array));
    });

    console.log(uppercases_array.join(','));

    // First join for join all the elements with a "," and split for assign a memory space all of them in V array
    V = leftSide_vars.concat(uppercases_array)
                                    .join(',')
                                    .split(',');
    return [...new Set(V)];
}

function getT(V, rightSide_chains) {
    // Delete the words between "" 
    let T = new Array();
    let first_terminals = [];
    let rightSide_chains_joined = rightSide_chains.join(',');
    let words_between_quotes = rightSide_chains_joined.match(/\"(.*?)\"/g);

    // Remove words from the rightSide_chains_joined var
    if(words_between_quotes !== null){
        words_between_quotes.forEach((word) => {
            rightSide_chains_joined = rightSide_chains_joined.replace(`${ word }`, '');
        });
    } else {
        words_between_quotes = new Array();
    }

    // Getting the first terminals
    for (let i = 0; i < rightSide_chains_joined.length; i++) {

        // Get the terminal chars, excepting the chars that is in V, and the chars that have a ' next to them
        if(!V.includes(rightSide_chains_joined[i]) && rightSide_chains_joined[i + 1] !== '\''
               && rightSide_chains_joined[i].match(/[^.|',]/g)) {
            first_terminals.push(rightSide_chains_joined[i]);
        }
    }

    T = first_terminals.concat(words_between_quotes).join(',').split(',');
    return [...new Set(T)];
}

function getS(V){
    return V[0];
}

export default getV_T_S;