import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-contacto',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {


  private _userServices = inject(UsersService)
  formContacto: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.formContacto = this._formBuilder.group({
      nombre: ['', Validators.required],
      correo: ['',Validators.required],
      telefono: ['',Validators.required],
      direccion:['',Validators.required],
      producto:['',Validators.required]
    });
  }


  async onSubmit() {
    
    try {
      const {nombre,correo,telefono,direccion,producto} = this.formContacto.value;
      const user = {
        nombre: nombre || '',
        correo: correo || '',
        telefono: telefono || '',
        direccion: direccion || '',
        producto: producto || ''
      }
      await this._userServices.createUser(user);
      console.log('exitoso');

    } catch (error) {
      console.log(error);
    }
    
  }


}
