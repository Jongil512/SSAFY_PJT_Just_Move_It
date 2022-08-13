import React from "react";
import * as speechCommands from "@tensorflow-models/speech-commands";

function Voice() {
  const a = window.location.href;
  console.log(a);
  const vURL = "https://teachablemachine.withgoogle.com/models/wkbINqRdV/";

  voice();

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

  async function voice() {
    const recognizer = await createModel();
    const classLabels = recognizer.wordLabels(); // get class labels
    const vlabelContainer = document.getElementById("v-label-container");
    let location = "";

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
          if (result.scores[i].toFixed(2) > 0.5) {
            console.log(isNaN(classLabels[i]));
            if (
              (location.length == 0 || location.length == 3) &&
              isNaN(classLabels[i])
            ) {
              location = classLabels[i] + "0";
              console.log(location);
            }
            if (location.length == 2 && !isNaN(classLabels[i])) {
              location += classLabels[i];
              console.log(location);
            }
          }
          console.log(location);
        }
      },
      {
        includeSpectrogram: true, // in case listen should return result.spectrogram
        probabilityThreshold: 0.75,
        invokeCallbackOnNoiseAndUnknown: true,
        overlapFactor: 0.5, // probably want between 0.5 and 0.75. More info in README
      }
    );
  }

  return (
    <div className="Voice">
      <div id="v-label-container"></div>
    </div>
  );
}
export default Voice;
