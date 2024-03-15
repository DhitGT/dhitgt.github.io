const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const asciiCharacters = "@%#*+=-:. ";

      function brightnessToAscii(brightness) {
        const asciiIndex = Math.round(
          (brightness * (asciiCharacters.length - 1)) / 255
        );
        return asciiCharacters.charAt(asciiIndex);
      }

      function convertToAscii(imageData) {
        let asciiString = "";

        for (let i = 0; i < imageData.height; i += 2) {
          for (let j = 0; j < imageData.width; j += 1) {
            const pixelPosition = (i * imageData.width + j) * 4;
            const r = imageData.data[pixelPosition];
            const g = imageData.data[pixelPosition + 1];
            const b = imageData.data[pixelPosition + 2];
            const brightness = (r + g + b) / 3;
            const asciiValue = brightnessToAscii(brightness);
            asciiString += asciiValue;
          }
          asciiString += "\n"; // Use '\n' for line breaks
        }

        return asciiString;
      }

      async function main() {
        const video = document.createElement("video");
        video.src = "https://www.dheep.site/media/badApple.mp4"; // Set your video file path here
        video.crossOrigin = "anonymous";

        // const asciiContainer = document.getElementById("contenteditable-root");
        // asciiContainer.style.fontFamily = 'monospace';
        // asciiContainer.style.whiteSpace = "pre";
        // asciiContainer.style.lineHeight = "1"; // Ensure each line takes only one line height
        // asciiContainer.style.fontSize = "15px";
        video.addEventListener("loadedmetadata", async () => {
          canvas.width = 40;
          canvas.height = 40;
          await video.play();

          const frameInterval = 1000 / 20; // Adjust according to video's frame rate
          const totalFrames = Math.ceil(video.duration * 20);

          for (let frameIndex = 0; frameIndex < totalFrames; frameIndex++) {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            const imageData = ctx.getImageData(
              0,
              0,
              canvas.width,
              canvas.height
            );
            const asciiString = convertToAscii(imageData);
            // asciiContainer.innerText = asciiString; // Update <p> element with ASCII frames
              console.clear()
              console.log(asciiString)
            await new Promise((resolve) => setTimeout(resolve, frameInterval));
          }
        });

        document.body.appendChild(video);
      }

      main().catch((error) => console.error(error));
