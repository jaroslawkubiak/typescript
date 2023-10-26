// type alias
type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {};

  // event
  on = (eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  // triggers to events
  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) return;

    handlers.forEach(callback => {
      callback();
    });
  };
}
