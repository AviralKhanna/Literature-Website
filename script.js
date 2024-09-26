
          document.addEventListener("DOMContentLoaded", function () {
            let words = document.querySelectorAll(".word");
            let container = document.querySelector(".word-container");
            let containerRect = container.getBoundingClientRect();
            let positions = []; // Store positions of already placed words

            // Calculate the number of columns and rows needed to evenly distribute words
            let columns = Math.ceil(Math.sqrt(words.length));
            let rows = Math.ceil(words.length / columns);

            // Calculate the width and height of each cell
            let cellWidth = containerRect.width / columns;
            let cellHeight = containerRect.height / rows;

            let wordIndex = 0;
            for (let row = 0; row < rows; row++) {
              for (let col = 0; col < columns; col++) {
                if (wordIndex >= words.length) break;
                let word = words[wordIndex];
                let x =
                  col * cellWidth +
                  Math.random() * (cellWidth - word.offsetWidth - 8) +
                  4; // 4px gap on each side
                let y =
                  row * cellHeight +
                  Math.random() * (cellHeight - word.offsetHeight - 8) +
                  4; // 4px gap on each side

                word.style.left = x + "px";
                word.style.top = y + "px";
                word.style.display = "inline";

                positions.push({
                  x: x,
                  y: y,
                  width: word.offsetWidth,
                  height: word.offsetHeight,
                });
                wordIndex++;
              }
            }

            // Start twinkle animation after a delay
            setTimeout(() => {
              words.forEach((word) => {
                word.style.animationDelay = Math.random() * 2 + "s"; // Random delay between 0 and 2 seconds
              });
            }, 3000); // 4 seconds delay before starting the animation
          });