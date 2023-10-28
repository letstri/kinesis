declare namespace _default {
    namespace props {
        namespace audio {
            let type: StringConstructor;
            let required: boolean;
        }
        namespace playAudio {
            let type_1: BooleanConstructor;
            export { type_1 as type };
            let _default: boolean;
            export { _default as default };
        }
    }
    function data(): {
        analyser: null;
        audioArray: null;
        audioData: null;
        audioRef: null;
        wasPlayed: boolean;
        isPlaying: boolean;
    };
    namespace watch {
        function audio(): void;
        function playAudio(play: any): void;
    }
    namespace methods {
        function play(): void;
        function stop(): void;
        function handleAudio(): void;
        function getSongData(): void;
    }
}
export default _default;
