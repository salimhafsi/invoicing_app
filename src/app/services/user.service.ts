import { Injectable } from '@angular/core';
import { UserInformationModel } from "src/app/models/user.model";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    getUserInformations(): UserInformationModel {
        return { userName: localStorage.getItem('userName'), userRole: localStorage.getItem('userRole') }
    }

}