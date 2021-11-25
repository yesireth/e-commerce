import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataProductsService {

  listCategory : Array<any> | undefined;

  private _textFilter  = new Subject<string>();
  private _categorySelected  = new Subject<string>();
  //declaramos observables
  textFilterObservable = this._textFilter.asObservable();
  categorySelectedObservable = this._categorySelected.asObservable();
  //private _products: Subject <Array<any>> = new Subject <Array<any>>();

  setCategorySelected(newCategory : string){
    this._categorySelected.next(newCategory);
  }
  setFilterByText(newText : string){
    this._textFilter.next(newText);
  }
  setArrayCategories(arrayProducts : Array<any>){
    this.listCategory= [...new Set(arrayProducts.map((e) => e.category))]
  }
}