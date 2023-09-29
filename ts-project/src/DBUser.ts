import { User } from "./User";

export class DBUser implements User
{
    id: number;
    nev: string;
    eletkor: number = 20;
    haziallat = 'Cicus';

    constructor(id: number, nev: string)
    {
        this.nev = nev;
        this.id = id;
    }

    szuletesnap() : void
    {
        this.eletkor++;
    }
}