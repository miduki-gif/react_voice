import "regenerator-runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Button from "@mui/material/Button";

const VoiceTextComponetns = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>Status:{listening ? "on" : "off"}</p>
      <Button
        type="button"
        onClick={() =>
          SpeechRecognition.startListening({
            language: "ja",
            continuous: true,
            interimResults: true,
          })
        }
      >
        Start
      </Button>
      <Button type="button" onClick={SpeechRecognition.stopListening}>
        Stop
      </Button>
      <Button type="button" onClick={resetTranscript}>
        Reset
      </Button>
      <p>{transcript}</p>
      <div>aaa</div>
    </div>
  );
};
export default VoiceTextComponetns;
