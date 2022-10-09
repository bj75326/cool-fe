import { useStore } from "./store";
import "./static/css/index.scss";

export function useBase () {
	console.log('useBase')
	return {
		...useStore()
	};
}

export * from "./common";
