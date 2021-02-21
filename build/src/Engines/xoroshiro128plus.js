import { random_engine_base } from '../random_engine_base.js';
export class xoroshiro128plus extends random_engine_base {
    constructor(a = Math.random() * Math.pow(2, 32), b = Math.random() * Math.pow(2, 32), c = Math.random() * Math.pow(2, 32), d = Math.random() * Math.pow(2, 32)) {
        super(0, 4294967295);
        this._x = a >>> 0;
        this._y = b >>> 0;
        this._z = c >>> 0;
        this._w = d >>> 0;
    }
    next() {
        const z = this._z ^ this._x;
        const w = this._w ^ this._y;
        const t = (w + this._y + (z !== 0 && this._x >= (-z >>> 0) ? 1 : 0));
        this._x = (this._y << 23 | this._x >>> 9) ^ z ^ (z << 14);
        this._y = (this._x << 23 | this._y >>> 9) ^ w ^ (w << 14 | z >>> 18);
        this._z = w << 4 | z >>> 28;
        this._w = z << 4 | w >>> 28;
        return t >>> 0;
    }
    seed(x = Math.random() * Math.pow(2, 31), y = Math.random() * Math.pow(2, 31), z = Math.random() * Math.pow(2, 31), w = Math.random() * Math.pow(2, 31)) {
        this._x = x >>> 0;
        this._y = y >>> 0;
        this._z = z >>> 0;
        this._w = w >>> 0;
    }
}
//# sourceMappingURL=xoroshiro128plus.js.map