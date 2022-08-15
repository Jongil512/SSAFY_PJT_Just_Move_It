import React from "react";
import * as tmPose from "@teachablemachine/pose";
// import * as speechCommands from "@tensorflow-models/speech-commands";

function Pose() {
  const mURL = "https://teachablemachine.withgoogle.com/models/8pmvwt-v8/";

  let model, webcam, ctx, mlabelContainer, maxPredictions;
  let direction;

  setTimeout(motion, 5000);
  // motion();

  async function motion() {
    const modelURL = mURL + "model.json";
    const m_metadataURL = mURL + "metadata.json";

    model = await tmPose.load(modelURL, m_metadataURL);
    maxPredictions = model.getTotalClasses();

    const size = 200;
    const flip = true;

    webcam = new tmPose.Webcam(size, size, flip); // width, height, flip
    await webcam.setup(); // request access to the webcam
    await webcam.play();

    // window.requestAnimationFrame(loop);

    setInterval(loop, 1000);

    const canvas = document.getElementById("canvas");
    canvas.width = size;
    canvas.height = size;
    ctx = canvas.getContext("2d");
  }

  async function loop() {
    webcam.update(); // update the webcam frame
    await predict();
    // window.requestAnimationFrame(loop);
  }

  async function predict() {
    const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
    const prediction = await model.predict(posenetOutput);

    for (let i = 0; i < maxPredictions; i++) {
      if (prediction[i].probability.toFixed(2) > 0.5) {
        direction = prediction[i].className;
      }
    }
    console.log(direction);
    drawPose(pose);
  }

  function drawPose(pose) {
    if (webcam.canvas) {
      ctx.drawImage(webcam.canvas, 0, 0);

      if (pose) {
        const minPartConfidence = 0.5;
        tmPose.drawKeypoints(pose.keypoints, minPartConfidence, ctx);
        tmPose.drawSkeleton(pose.keypoints, minPartConfidence, ctx);
      }
    }
  }

  return (
    <div className="Pose">
      <div>
        <canvas hidden id="canvas"></canvas>
      </div>
    </div>
  );
}
export default Pose;
