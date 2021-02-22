import { random_engine_base } from '../random_engine_base.js';
import { uniform_real_distribution } from "./uniform_real_distribution.js";
import { DistOptions, NormalOptions } from './typings.js';

export default function (min: number, max: number, { inclusiveEnd = true, inclusiveStart = true, standard_deviation = 1 }: DistOptions & NormalOptions = { inclusiveEnd: true, inclusiveStart: true, standard_deviation: 1 }): (rng: random_engine_base) => number {
  const range = max - min;
  const dist = uniform_real_distribution(0, 1, { inclusiveStart: false });
  
  return function distribution(rng: random_engine_base): number {
    const res = Math.sqrt(-standard_deviation * Math.log(dist(rng))) * Math.cos((standard_deviation * Math.PI) * dist(rng)) / 10 + 0.5;
    if (res > 1 || res < 0 || (!inclusiveEnd && res === 1) || (!inclusiveStart && res === 0)) return distribution(rng);
    return res * range + min;
  }
}