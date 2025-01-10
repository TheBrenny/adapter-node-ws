import { Adapter } from '@sveltejs/kit';
import './ambient.js';
import { Plugin } from 'vite';

declare global {
	const ENV_PREFIX: string;
}

interface AdapterOptions {
	out?: string;
	precompress?: boolean;
	envPrefix?: string;
}

export const WebSocketDevPlugin: Plugin;
export default function plugin(options?: AdapterOptions): Adapter;