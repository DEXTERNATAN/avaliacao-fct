<<<<<<< HEAD
export const MEAT_API = 'http://localhost:3000';
// export const MEAT_API = 'http://10.12.102.147:3000'
=======
//export const MEAT_API = 'http://localhost:3000';
 export const MEAT_API = 'http://10.12.102.147:3000'
>>>>>>> be9ac9df49ca2064fe69f3339e035324834cbf47

export const maskData = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
export const phoneMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/ , /\d/ , /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
export const rgMask = [ /\d/ , /\d/ , /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/];
export const cpfMask = [ /\d/ , /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/ , /\d/, /\d/, '-', /\d/, /\d/,];
export const cnpjMask = [ /\d/ , /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/ , /\d/, /\d/, '/', /\d/, /\d/,/\d/, /\d/, '-', /\d/, /\d/,];
export const cepMask = [/\d/ , /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];