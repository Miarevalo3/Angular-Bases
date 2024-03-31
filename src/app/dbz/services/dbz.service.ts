import { Injectable } from '@angular/core';
import { v4 as uuid} from 'uuid';
import { character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: character[] =
  [
    {
    id: uuid(),
    name:'Krillin',
    power: 1000,
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500,
  }];

  addCharacter(character: character):void{
    const newCharacter: character = {id: uuid(),...character};
    this.characters.push(newCharacter)

  }

  deleteCharacterById(id:string): void{
    this.characters = this.characters.filter(character => character.id != id)
  }


}
