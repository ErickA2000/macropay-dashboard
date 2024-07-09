import EventEmitter from "eventemitter3";

const eventEmitter = new EventEmitter();

function Emitter<T>() {
  return {
    on: (event: string, fn: (data: T) => void) => eventEmitter.on(event, fn),
    once: (event: string, fn: (data: T) => void) => eventEmitter.once(event, fn),
    off: (event: string, fn: (data: T) => void) => eventEmitter.off(event, fn),
    emit: (event: string, payload: T) => eventEmitter.emit(event, payload),
  };
}

Object.freeze(Emitter);
export default Emitter;
