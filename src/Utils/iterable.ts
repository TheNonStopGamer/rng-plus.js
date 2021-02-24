import { random_engine_base } from '../Engines/random_engine_base.js';

export function value(str: string, rng: random_engine_base): string | undefined;
export function value<V>(arr: Array<V>, rng: random_engine_base): V | undefined;
export function value<V>(map: Map<unknown, V>, rng: random_engine_base): V | undefined;
export function value<V>(set: Set<V>, rng: random_engine_base): V | undefined;
export function value<V>(iterable: Array<V> | Map<unknown, V> | Set<V> | string, rng: random_engine_base): string | V | undefined {
	if (iterable instanceof Array || typeof iterable === 'string') {
		return iterable[Math.floor(rng.next() / rng.RANGE * iterable.length)];
	} else {
		return [...iterable.values()][Math.floor(rng.next() / rng.RANGE * iterable.size)];
	}
}

export function key(str: string, rng: random_engine_base): number | undefined;
export function key(arr: Array<unknown>, rng: random_engine_base): number | undefined;
export function key<K>(map: Map<K, unknown>, rng: random_engine_base): K | undefined;
export function key<K>(set: Set<K>, rng: random_engine_base): K | undefined;
export function key<K>(iterable: Array<unknown> | Map<K, unknown> | Set<K> | string, rng: random_engine_base): number | K | undefined {
	if (iterable instanceof Array || typeof iterable === 'string') {
		return Math.floor(rng.next() / rng.RANGE * iterable.length);
	} else {
		return [...iterable.keys()][Math.floor(rng.next() / rng.RANGE * iterable.size)];
	}
}

export function entry(str: string, rng: random_engine_base): [number, string | undefined];
export function entry<V>(arr: Array<V>, rng: random_engine_base): [number, V | undefined];
export function entry<K, V>(map: Map<K, V>, rng: random_engine_base): [K, V] | undefined;
export function entry<V>(set: Set<V>, rng: random_engine_base): [V, V] | undefined;
export function entry<T, V>(iterable: Array<T> | Map<T, V> | Set<T> | string, rng: random_engine_base): [number, string | undefined] | [number, T | undefined] | [T, V] | [T, T] | undefined {
	if (iterable instanceof Array) {
		const i = Math.floor(rng.next() / rng.RANGE * iterable.length);
		return [i, iterable[i]];
	} else if (typeof iterable === 'string') {
		const i = Math.floor(rng.next() / rng.RANGE * iterable.length);
		return [i, iterable[i]];
	} else {
		return [...iterable.entries()][Math.floor(rng.next() / rng.RANGE * iterable.size)];
	}
}