// Unários: agem sobre um único operando. Exemplos: typeof x retorna o tipo de x; ++x incrementa em 1; delete obj.prop remove propriedade do objeto.

let x = 5;
let tipo = typeof x;    // "number"

x++;                    // 6 (incremento)
x--;                    // 5 (decremento)

let obj = { nome: "Ana", idade: 20 };
delete obj.idade;       // remove a propriedade 'idade' do objeto

let negativo = -x;      // -5 (negação)
let positivo = +x;      // 5 (conversão para número, se possível)
let existe = !false;    // true
