import { AxiosPromise, AxiosResponse } from 'axios';

interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
  //prettier-ignore
  constructor(private attributes: ModelAttributes<T>, 
    private events: Events, 
    private sync: Sync<T>) {}
  on = this.events.on;
  // // goal is to return reference to on method in events, not call this method on
  // get on() {
  //   // NOT call a method on here, return only reference
  //   return this.events.on;
  // }

  // // we can wrire this
  // get trigger() {
  //   return this.events.trigger;
  // }

  // or shorter version
  trigger = this.events.trigger;

  get = this.attributes.get;

  // get get() {
  //   return this.attributes.get;
  // }

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.get('id');

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id');
    }

    this.sync.fetch(id).then((response: AxiosResponse): void => {
      // we use this syntax
      this.set(response.data);

      // but we also can use this syntax:
      // this.attributes.set(response.data);
      // differece is: this.set is call from user class
      // this.attributes.set is call from Attributes, when we skip this.events.trigger('change');
    });
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        this.trigger('save');
      })
      .catch(err => {
        this.trigger('error');
        console.error(err);
      });
  }
}
