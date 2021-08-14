import 'vue-global-api';
import { defineCustomElement } from 'vue';
import Foo from './MyFoo.ce.vue';
import Bar from './MyBar.ce.vue';

const MyFoo = defineCustomElement(Foo);
const MyBar = defineCustomElement(Bar);

// export individual elements
export { MyFoo, MyBar };

export function register() {
	if (customElements.get('my-foo') === undefined) {
		customElements.define('my-foo', MyFoo);
	}
	if (customElements.get('my-bar') === undefined) {
		customElements.define('my-bar', MyBar);
	}
}
