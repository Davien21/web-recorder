import { Button } from "components";
import { useEffect, useRef, useState } from "react";

export default function AudioRecorder() {
  const [audioSrcs, setAudioSrcs] = useState<MediaDeviceInfo[]>([]);
  const [defaultDevice, setdefault] = useState<string>("");
  const [recordingDevice, setRecordingDevice] = useState<string>("");

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);

  const isActive = (deviceId: string) => {
    return recordingDevice === deviceId;
  };

  const startRecording = (deviceId: string) => {
    setRecordingDevice(deviceId);
    navigator.mediaDevices
      .getUserMedia({ audio: { deviceId: deviceId } })
      .then((stream) => {
        const chunks: BlobPart[] = [];

        const mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.addEventListener("dataavailable", (event) => {
          chunks.push(event.data);
        });

        mediaRecorder.addEventListener("stop", () => {
          const audioBlob = new Blob(chunks, { type: "audio/wav" });
          const audioUrl = URL.createObjectURL(audioBlob);
          downloadAudio(audioUrl);
        });

        mediaRecorder.start();
        mediaRecorderRef.current = mediaRecorder;
        console.log("Recording started for device:", deviceId);
      })
      .catch((error) => {
        console.error("Error starting recording:", error);
      });
  };

  const stopRecording = () => {
    setRecordingDevice("");
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state !== "inactive"
    ) {
      mediaRecorderRef.current.stop();
      console.log("Recording stopped");
    }
  };

  const downloadAudio = (url: string) => {
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "recorded_audio.wav";
    anchor.click();
    anchor.remove();
  };

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(() => {
        navigator.mediaDevices
          .enumerateDevices()
          .then((devices) => {
            let sources: MediaDeviceInfo[] = [];
            devices.forEach((device) => {
              if (!device.kind.includes("audio")) return;
              if (sources.some((s) => s.deviceId === device.deviceId)) return;
              if (device.deviceId === "default") {
                return setdefault(device.label.replace("Default", ""));
              }
              sources.push(device);
            });

            setAudioSrcs(sources);
          })
          .catch((error) => {
            console.error("Error listing audio sources:", error);
          });
      })
      .catch((error) => {
        console.error("Error requesting audio permission:", error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="text-2xl">Audio Recorder</h1>
      <div className="flex gap-x-2"></div>
      <div className="flex gap-x-3 my-4">
        <span className="">Default Audio:</span>
        <span className="opacity-60">{defaultDevice}</span>
      </div>
      {audioSrcs.map((audioSrc, index) => (
        <div key={index} className="audio-source mb-3">
          <div className="grid grid-cols-6 gap-x-2">
            <span className="col-span-4 opacity-60">
              {index + 1}). {audioSrc.label}
            </span>
            <div className="col-span-2 flex gap-x-4">
              <Button
                disabled={isActive(audioSrc.deviceId)}
                // form={isActive(audioSrc.deviceId) ? "secondary" : "primary"}
                onClick={() => startRecording(audioSrc.deviceId)}
              >
                Start
              </Button>
              <Button
                disabled={!isActive(audioSrc.deviceId)}
                // form={!isActive(audioSrc.deviceId) ? "secondary" : "primary"}
                onClick={stopRecording}
              >
                Stop
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
