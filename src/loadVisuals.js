import getV_T_S from './getV_T_S.js';

//VARIABLE CREATOR
document.getElementById('btn-add-var').onclick = () => {
    document.getElementById('init-msg').style.display = 'none';
    const var_div = Object.assign(document.createElement('div'),
    {
        'id': 'var-div',
    });

    const input1 = Object.assign(document.createElement('input'),{
        'type':'text',
        'id':'inputVar1',
        'placeholder':'A',
    });

    const arrow = document.createElement('p').innerHTML = '→';

    const input2 = Object.assign(document.createElement('input'),{
        'type':'text',
        'id':'inputVar2',
        'placeholder':'aA | bBa | ε',
    });

    var_div.append(input1, arrow, input2);
    document.getElementById('vars-div').append(var_div);
};


// CLEAN PROGRAM
document.getElementById('btn-clean').onclick = () => {
    document.getElementById('init-msg').style.display = 'inline';
        const childs = document.querySelectorAll('[id*=inputVar');
        childs.forEach(input=>{
            input.parentNode.remove();
        });
        input_values = {};
};


// GET INFO
let input_values = {};
document.getElementById('btn-calculate').onclick = () => {
    const childs = document.querySelectorAll('[id*=input');
    // console.log(childs.length)
    for(let i = 0; i<childs.length;i=i+2){
         input_values[childs.item(i).value] = childs.item(i + 1).value;
         // console.log(childs.item(i).value, childs.item(i + 1).value);
    }
    getV_T_S(input_values);
}


