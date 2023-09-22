declare module '$lib/emoji.json' {
	import type {Emoji} from '$lib/emoji';
	const data: {summary: string; source: string[]; emoji: Emoji[]};
	export default data;
}
