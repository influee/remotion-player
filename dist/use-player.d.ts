import { SyntheticEvent } from 'react';
import { PlayerEmitter } from './event-emitter';
export declare const usePlayer: () => {
    frameBack: (frames: number) => void;
    frameForward: (frames: number) => void;
    isLastFrame: boolean;
    emitter: PlayerEmitter;
    playing: boolean;
    play: (e?: SyntheticEvent<Element, Event> | undefined) => void;
    pause: () => void;
    seek: (newFrame: number) => void;
    getCurrentFrame: () => number;
    isPlaying: () => boolean;
};
