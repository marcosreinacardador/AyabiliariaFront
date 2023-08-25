import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AltaClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formulario = this.fb.group({
      dni: ['', Validators.required],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      telefonoContacto: ['', Validators.required],
      correoElectronico: ['', Validators.required],
      datosBancarios: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  guardarCliente(): void {
    if (this.formulario.valid) {
      this.dialogRef.close(this.formulario.value);
    }
  }

  cancelar(): void {
    this.dialogRef.close();
  }
}
