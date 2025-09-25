import type { Engine } from '@tsparticles/engine';
export declare const loaderFull: (engine: Engine) => Promise<void>;
export declare const loaderSlim: (engine: Engine) => Promise<void>;
export declare const loaderBasic: (engine: Engine) => Promise<void>;
export declare const loadParticles: (engine: Engine, mode: string) => Promise<void>;
