import { createApp } from "vue";
import App from "./App.vue";
// import { bootstrap } from "./cool";
import {bootstrap} from './cool/bootstrap';

// mock
// import "./mock";

const app = createApp(App);

// 启动
bootstrap(app)
	.then(() => {
		app.mount("#app");
	})
	.catch((err) => {
		console.error("COOL-ADMIN 启动失败", err);
	});
