class ValueController<T> {
  value?: T;

  defaultValue?: T;

  currentValue?: T;

  constructor(value?: T, defaultValue?: T) {
    this.value = value;
    this.defaultValue = defaultValue;
    this.currentValue = defaultValue;
  }

  isControlled() {
    return this.value !== undefined;
  }

  set(value: T) {
    this.currentValue = value;
  }

  get() {
    if (this.value !== undefined) {
      return this.value;
    }

    return this.currentValue;
  }
}

export default ValueController;
