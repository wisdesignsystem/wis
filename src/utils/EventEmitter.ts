type DefaultEventHandler = (...params: unknown[]) => void;

type DefaultEventMap = Record<string, DefaultEventHandler>;

type EventHandler<T extends DefaultEventHandler> = T;

export default class EventEmitter<E extends DefaultEventMap> {
  private listeners: Partial<{
    [K in keyof E]: EventHandler<E[K]>[];
  }> = {};

  on<K extends keyof E>(event: K, handler: EventHandler<E[K]>): () => void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(handler);

    return () => {
      this.off(event, handler);
    };
  }

  off<K extends keyof E>(event: K, handler: EventHandler<E[K]>): void {
    if (!this.listeners[event]) {
      return;
    }
    this.listeners[event] = this.listeners[event].filter(
      (item) => item !== handler,
    );
  }

  emit<K extends keyof E>(event: K, ...params: Parameters<E[K]>): void {
    if (!this.listeners[event]) {
      return;
    }

    for (const handler of this.listeners[event]) {
      handler(...params);
    }
  }
}
