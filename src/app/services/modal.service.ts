import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  changeModalVisibility = new BehaviorSubject<boolean>(true);
  modalVisible = this.changeModalVisibility.asObservable();

  onChangeModalVisibilityToFalse() {
    // this.changeModalVisibility.next();
  }
}
