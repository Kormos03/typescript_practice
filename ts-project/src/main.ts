import { DBUser } from "./DBUser";
import { User } from "./User";

let i = 5;
i++;
//error
//i = "asd";
//i = true;

let v1 : number;    //if we want to give a type to a variable do this : number
//v1 = 'asd'; error
v1 = 1;

let t1 : number[] = [];
t1.push(1);

let v2 : any[] = [];


//union type
let ns : number | string;
ns = 12;
ns = "asd";
let obj : User = 
{
  nev: 'Bela',
  eletkor: 12,
  haziallat: null,
}
obj.haziallat = 'Bodri';

let masikUser = new DBUser(2, 'Kata');
masikUser.szuletesnap();
console.log(masikUser);
function useradatkiir(u:User)
{
  console.log(u.nev);
}
useradatkiir(masikUser);
function szamChange()
{
  let sz = document.getElementById('szamlalo') as HTMLInputElement;
  //original syntax, but it makes an error with react so we use 'as'
  //let sz = <HTMLElement>document.getElementById('szamlalo')
  //let sz = document.querySelector<HTMLImageElement>('#szamlalo')!; <- it looks better, but not all function support it like getElementBy
  let szam = parseInt(sz.value);
  let negyzet = szam * szam;
  document.getElementById('negyzet')!.textContent = negyzet.toString();
}

function szamkuldes(e: SubmitEvent) : void
{
  let szam = parseInt((document.getElementById('szamlalo') as HTMLInputElement).value);
  if (szam < 0)
  {
    e.preventDefault();
  }  
}

function init()
{
  document.getElementById('szamForm')!.addEventListener('submit', szamkuldes);
document.getElementById('szamlalo')!.addEventListener('input', szamChange);
/* ?
   I
   V
 if (sz != null)
  {
    sz.addEventListener('input', szamChange)
  }
  else
  {
    console.log(sz);
  }
  */

}

document.addEventListener('DOMContentLoaded', init);
