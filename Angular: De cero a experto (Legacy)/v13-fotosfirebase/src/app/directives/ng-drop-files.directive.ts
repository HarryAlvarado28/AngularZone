import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';
import { FileItem } from '../models/file-item';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Input() archivos: FileItem[] = [];
  @Output() mouseSobre: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  @HostListener('dragover',['$event'])
  public onDragEnter(event:any){
    this.mouseSobre.emit(true);
    this._prevenirDetener(event);
  }

  @HostListener('dragleave',['$event'])
  public onDragLeave(event:any){
    this.mouseSobre.emit(false);
  }

  @HostListener('drop',['$event'])
  public onDrop(event:any){
    const transferencia = this._getTransferencia(event);
    if(!transferencia){
      return;
    }
    this._extraerArchivos(transferencia.files);
    this._prevenirDetener(event);
    this.mouseSobre.emit(false);
  }

  private _getTransferencia(event:any){
    return event.dataTransfer? event.dataTransfer : event.originalEvent.dataTransfer;
  }

  private _extraerArchivos(archivosLista: FileList){
    console.log(archivosLista);
    for(const propiedad in Object.getOwnPropertyNames(archivosLista)){
      const archivoTemporal = archivosLista[propiedad];
      if(this._archivoPuedeSerCargado(archivoTemporal)){
        const nuevoArchivo = new FileItem(archivoTemporal);
        this.archivos.push(nuevoArchivo);
      }
    }

    console.log(this.archivos);
  }

  // Validaciones
  private _archivoPuedeSerCargado(archivo: File):boolean{
    if(!this._archivoYaFueDroppeado(archivo.name) && this._esImagen(archivo.type)){
      return true;
    }else{
      return false;
    }
  }

  private _prevenirDetener(event){
    event.preventDefault();
    event.stopPropagation();
  }

  private _archivoYaFueDroppeado(nombreArchivo:string): boolean{
    for(const archivo of this.archivos){
      if(archivo.nombreArchivo == nombreArchivo){
        console.log('El archivo '+nombreArchivo+' ya esta agregado');
        return true;
      }
    }
    return false;
  }

  private _esImagen(tipoArchivo:string):boolean{
    return (tipoArchivo == '' || tipoArchivo === undefined)? false: tipoArchivo.startsWith('image');
  }

}
