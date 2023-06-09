import EventEmitter from "eventemitter3";

const eventEmitter = new EventEmitter();

const Emitter = {
  on: (event: string | symbol, fn: () => {}) => eventEmitter.on(event, fn),
  once: (event: string | symbol, fn: () => {}) => eventEmitter.once(event, fn),
  off: (event: string | symbol, fn: () => {}) => eventEmitter.off(event, fn),
  emit: (event: string | symbol, payload: any) =>
    eventEmitter.emit(event, payload),
};

Object.freeze(Emitter);

export default Emitter;
