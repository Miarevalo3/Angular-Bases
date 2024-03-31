import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './addCharacter.component.html',
  styleUrl: './addCharacter.component.css',
})
export class AddCharacterComponent {

  public character: character ={
    name:'',
    power:0
  }

  @Output()
  public onNewCharacter: EventEmitter<character> = new EventEmitter()

  emitCharacter(): void{
    console.log(this.character)
    if (this.character.name.length === 0) return

    this.onNewCharacter.emit(this.character)

    this.character = {name:'', power:0}
  }

}
