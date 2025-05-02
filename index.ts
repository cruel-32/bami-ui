import { App } from 'vue';
import * as components from './src';

export * from './src';

export default {
  install(app: App) {
    for (const key in components) {
      const component = components[key as keyof typeof components];
      if (component.name) {
        app.component(component.name, component);
      }
    }
  }
}