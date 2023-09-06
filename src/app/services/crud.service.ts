import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class CrudService<T> {
  constructor(private http: HttpClient, private baseUrl: string) {}

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.baseUrl);
  }

  get(id: number): Observable<T> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<T>(url);
  }

  create(item: T): Observable<T> {
    return this.http.post<T>(this.baseUrl, item);
  }

  update(id: number, item: T): Observable<T> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<T>(url, item);
  }

  delete(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
