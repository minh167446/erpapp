import { Injectable } from '@angular/core';
import { Employee } from './interface/employee.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  private employeeRequestUrl = 'http://localhost:3000/api/employees';

  getHeaders() {
    const token = localStorage.getItem('token');
    return token ? new HttpHeaders()
                                    .set('Authorization', `Bearer ${token}`) : null;
  }
  
  constructor(private http: HttpClient) { 
   }

   

   getEmployee(): Observable<Employee[]> {
    let options = { headers: this.getHeaders() };
    return this.http.get<Employee[]>(this.employeeRequestUrl,options);
   }
}
