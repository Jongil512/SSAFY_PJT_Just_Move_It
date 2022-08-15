import React from "react";
import * as speechCommands from "@tensorflow-models/speech-commands";

function Voice() {
  const vURL = "https://teachablemachine.withgoogle.com/models/a61Ml39F9/";

  voice();
  let location = "";
  let flag = false;

  async function voice() {
    const recognizer = await createModel();
    const classLabels = recognizer.wordLabels(); // get class labels
    const vlabelContainer = document.getElementById("v-label-container");

    for (let i = 0; i < classLabels.length; i++) {
      vlabelContainer.appendChild(document.createElement("div"));
    }

    recognizer.listen(
      (result) => {
        const scores = result.scores;

        for (let i = 0; i < classLabels.length; i++) {
          const vclassPrediction =
            classLabels[i] + ": " + result.scores[i].toFixed(2);
          vlabelContainer.childNodes[i].innerHTML = vclassPrediction;
          if (
            result.scores[i].toFixed(2) > 0.75
            // classLabels[i] !== "배경 소음"
          ) {
            if (
              (location.length == 0 || location.length == 2) &&
              isNaN(classLabels[i])
            ) {
              location = classLabels[i];

              // if (location !== "배경 소음")
              console.log("???  ", location);
              flag = false;
            }
            if (location.length == 1 && !isNaN(classLabels[i])) {
              location += classLabels[i];
              console.log("최종 결과값 ", location);
              flag = true;
            }
            console.log("....", location);
            // console.log(classLabels[i]);
          }
        }
      },
      {
        includeSpectrogram: true, // in case listen should return result.spectrogram
        probabilityThreshold: 0.75,
        invokeCallbackOnNoiseAndUnknown: true,
        overlapFactor: 0.5, // probably want between 0.5 and 0.75. More info in README
      }
    );
    console.log("인식한 값 :", location);
    setTimeout(() => recognizer.stopListening(), 5000);
  }
  async function createModel() {
    const checkpointURL = vURL + "model.json"; // model topology
    const v_metadataURL = vURL + "metadata.json"; // model metadata

    const recognizer = speechCommands.create(
      "BROWSER_FFT", // fourier transform type, not useful to change
      undefined, // speech commands vocabulary feature, not useful for your models
      checkpointURL,
      v_metadataURL
    );
    // check that model and metadata are loaded via HTTPS requests.

    await recognizer.ensureModelLoaded();

    return recognizer;
  }

  return (
    <div className="Voice">
      <div id="v-label-container"></div>
    </div>
  );
}
export default Voice;
