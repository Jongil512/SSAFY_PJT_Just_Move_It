import React from "react";
import * as tmPose from "@teachablemachine/pose";
// import * as speechCommands from "@tensorflow-models/speech-commands";

function Pose() {
  const mURL = "https://teachablemachine.withgoogle.com/models/9zONllPHx/";
  // const vURL = "https://teachablemachine.withgoogle.com/models/wkbINqRdV/";

  let model, webcam, ctx, mlabelContainer, maxPredictions;
  var id = "A01";
  var direction = " ";

  // voice();
  motion();
  //document.getElementById(id).focus();

  function focus(direction) {
    let num = Number(id.charAt(2));
    console.log("방향" + direction);
    switch (direction) {
      case "stop":
        break;
      case "click":
        document.getElementById(id).click();
        break;
      case "up":
        switch (id.charAt(0)) {
          case "A":
            id = id.replace("A", "B");
            break;
          case "B":
            id = id.replace("B", "C");
            break;
          case "C":
            id = id.replace("C", "D");
            break;
          case "D":
            id = id.replace("D", "A");
            break;
        }
        break;
      case "down":
        switch (id.charAt(0)) {
          case "A":
            id = id.replace("A", "D");
            break;
          case "B":
            id = id.replace("B", "A");
            break;
          case "C":
            id = id.replace("C", "B");
            break;
          case "D":
            id = id.replace("D", "C");
            break;
        }
        break;
      case "left":
        num % 10 == 1
          ? (id = id.replace("1", "5"))
          : (id = id.replace(String(num), String(num - 1)));
        break;
      case "right":
        num % 10 == 5
          ? (id = id.replace("5", "1"))
          : (id = id.replace(String(num), String(num + 1)));
        break;
    }
    // document.getElementById(id).focus();
  }

  // function sleep(sec) {
  //   return new Promise((resolve) => setTimeout(resolve, sec * 1000));
  // }

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

    window.requestAnimationFrame(loop);

    const canvas = document.getElementById("canvas");
    canvas.width = size;
    canvas.height = size;
    ctx = canvas.getContext("2d");
    mlabelContainer = document.getElementById("m-label-container");
    for (let i = 0; i < maxPredictions; i++) {
      // and class labels
      mlabelContainer.appendChild(document.createElement("div"));
    }
    document.getElementById(id).focus();
  }

  async function loop() {
    webcam.update(); // update the webcam frame
    await predict();
    window.requestAnimationFrame(loop);
  }

  async function predict() {
    const { pose, posenetOutput } = await model.estimatePose(webcam.canvas);
    const prediction = await model.predict(posenetOutput);

    for (let i = 0; i < maxPredictions; i++) {
      const mclassPrediction =
        prediction[i].className + ": " + prediction[i].probability.toFixed(2);
      mlabelContainer.childNodes[i].innerHTML = mclassPrediction;

      if (prediction[i].probability.toFixed(2) > 0.5) {
        direction = prediction[i].className;
        document.getElementById("0").innerHTML = "Direction : " + direction;
        focus(direction);
        // await sleep(0.7);
      }
    }
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
      <div id={id}>ddd</div>
      <div>
        <canvas id="canvas"></canvas>
      </div>
      <div id="m-label-container"></div>
      <div id="0"></div>
    </div>
  );
}
export default Pose;
