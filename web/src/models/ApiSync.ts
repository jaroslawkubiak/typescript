import axios, { AxiosPromise } from 'axios';

interface HasId {
  id?: number;
}
export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}
  // fetch user by id
  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  // save data in DB
  save(data: T): AxiosPromise {
    // extract id from data object
    const { id } = data;
    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(this.rootUrl, data);
    }
  }
}
