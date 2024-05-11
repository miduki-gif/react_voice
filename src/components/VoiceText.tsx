import {jsx as _jsx} from 'react/jsx-runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import 'regenerator-runtime';

    const VoiceTextComponetns = () => {
        const {
            // react-speech-recognitionの中にある小道具を取得する必要がある（propsとして変数の中に入れて取得する）
            tracscript,
            listening,
            resetTranscript,
            browserSupportsSpeechRecognition
        } = useSpeechRecognition();
        if(!browserSupportsSpeechRecognition){
            return <span>ブラウザが音声認識未対応です</span>
        }
        return(
            <div id='react-speech-recognition'>
            <p>Status:{listening ? "on" : "off"}</p>
            <button type='button' onClick={() => SpeechRecognition.startListening()}>
                start
            </button>
            <button type='button' onClick={() => SpeechRecognition.stopListening()}>
                stop
            </button>
            <button type='button' onClick={() => resetTranscript()}>
                Reset
            </button>
            <p>{tracscript}</p>
    </div>
        );
    }

    export default VoiceTextComponetns;
