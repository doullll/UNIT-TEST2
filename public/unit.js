document.addEventListener("DOMContentLoaded", function () {
  const questions = [
    {
      text: "우리는 긴 하루를 마친 후, 서로의 경험을 공유하며 저녁을 보낸다.",
      dimension: "emotionExpression",
      highScoreTendency: "V",
    },
    // {
    //   text: "우리는 긴 하루를 나는 파트너가 힘든 날을 보냈다는 것을 알았을 때, 따뜻한 차 한 잔을 준비해 준다.",
    //   dimension: "emotionExpression",
    //   highScoreTendency: "B",
    // },
    // {
    //   text: "서로가 피곤할 때, 우리는 종종 각자의 취미 활동에 집중한다.",
    //   dimension: "emotionExpression",
    //   highScoreTendency: "B",
    // },
    // {
    //   text: "나는 파트너에게 감사의 마음을 전할 때, 직접 말로 표현하는 것을 선호한다.",
    //   dimension: "emotionExpression",
    //   highScoreTendency: "V",
    // },
    // {
    //   text: "우리는 서로를 위해 손편지나 메모를 남기는 것을 좋아한다.",
    //   dimension: "emotionExpression",
    //   highScoreTendency: "V",
    // },
    // {
    //   text: "파트너와의 중요한 기념일은, 함께 특별한 활동을 계획하여 축하하는 것을 선호한다.",
    //   dimension: "emotionExpression",
    //   highScoreTendency: "B",
    // },
    // {
    //   text: "나는 파트너가 나를 위해 집안일을 도와줄 때, 사랑받고 있다고 느낀다.",
    //   dimension: "emotionExpression",
    //   highScoreTendency: "B",
    // },
    // {
    //   text: "우리는 대부분의 문제가 시간이 지나면 자연스럽게 해결될 것이라고 생각한다.",
    //   dimension: "crisisResponse",
    //   highScoreTendency: "R",
    // },
    // {
    //   text: "우리는 갈등이 생겼을 때, 바로 해결하기보다는 감정이 가라앉을 때까지 기다린다.",
    //   dimension: "crisisResponse",
    //   highScoreTendency: "R",
    // },
    // {
    //   text: "직장에서 힘든 일이 있을 때, 나는 파트너와 적극적으로 해결책을 모색한다.",
    //   dimension: "crisisResponse",
    //   highScoreTendency: "A",
    // },
    // {
    //   text: "어려운 상황에서 우리는 서로에게 힘이 되어주기 위해 긍정적인 말을 많이 한다.",
    //   dimension: "crisisResponse",
    //   highScoreTendency: "R",
    // },
    // {
    //   text: "우리는 어려움을 겪을 때, 함께 문제를 분석하고 해결 방안을 논의한다.",
    //   dimension: "crisisResponse",
    //   highScoreTendency: "A",
    // },
    // {
    //   text: "때때로, 우리는 큰 문제보다는 서로의 지지와 이해가 더 필요하다고 느낀다.",
    //   dimension: "crisisResponse",
    //   highScoreTendency: "R",
    // },
    // {
    //   text: "우리는 각자의 방식대로 문제를 해결하려고 하며, 그 과정에서 서로를 존중한다.",
    //   dimension: "crisisResponse",
    //   highScoreTendency: "R",
    // },
    // {
    //   text: "우리는 친구들과 함께하는 시간을 주말 계획에 포함하는 것을 중요하게 생각한다.",
    //   dimension: "socialInteraction",
    //   highScoreTendency: "S",
    // },
    // {
    //   text: "좋은 책이나 영화에 대한 추천은 친구들보다는 파트너에게 먼저 얘기한다.",
    //   dimension: "socialInteraction",
    //   highScoreTendency: "P",
    // },
    // {
    //   text: "우리는 큰 모임보다는 집에서 둘만의 시간을 보내는 것이 더 의미 있다고 생각한다.",
    //   dimension: "socialInteraction",
    //   highScoreTendency: "P",
    // },
    // {
    //   text: "소셜 미디어로보다는 파트너와 직접 대화하는 것을 선호한다.",
    //   dimension: "socialInteraction",
    //   highScoreTendency: "P",
    // },
    // {
    //   text: "우리는 사회적 이벤트나 파티에서 새로운 사람들을 만나는 것을 즐긴다.",
    //   dimension: "socialInteraction",
    //   highScoreTendency: "S",
    // },
    // {
    //   text: "주말에는 가능한 한 집에서 조용한 시간을 보내는 것을 선호한다.",
    //   dimension: "socialInteraction",
    //   highScoreTendency: "P",
    // },
    // {
    //   text: "파트너와 함께 하는 침묵의 순간들이 편안하고 의미 있게 느껴진다.",
    //   dimension: "socialInteraction",
    //   highScoreTendency: "P",
    // },
    // {
    //   text: "우리는 새로운 식당이나 카페를 탐험하는 것을 좋아한다.",
    //   dimension: "ActivityPreference",
    //   highScoreTendency: "O",
    // },
    // {
    //   text: "휴일에는 집에서 게임을 하거나 퍼즐을 맞추는 것 같은 활동을 즐긴다.",
    //   dimension: "ActivityPreference",
    //   highScoreTendency: "H",
    // },
    // {
    //   text: "우리는 자연 속에서 시간을 보내며 서로와의 연결을 강화한다.",
    //   dimension: "ActivityPreference",
    //   highScoreTendency: "O",
    // },
    // {
    //   text: "집에서 요리를 함께 하고, 그 결과물을 함께 즐기는 것은 우리에게 특별한 활동이다.",
    //   dimension: "ActivityPreference",
    //   highScoreTendency: "H",
    // },
    // {
    //   text: "새로운 장소를 방문하고 새로운 경험을 하는 것은 우리 관계에 활력을 준다.",
    //   dimension: "ActivityPreference",
    //   highScoreTendency: "O",
    // },
    // {
    //   text: "우리는 서로의 취미에 대해 이야기하며 집에서의 시간을 가치 있게 여긴다.",
    //   dimension: "ActivityPreference",
    //   highScoreTendency: "H",
    // },
    // {
    //   text: "주말이면 가까운 공원이나 숲으로 산책을 가는 것을 즐긴다.",
    //   dimension: "ActivityPreference",
    //   highScoreTendency: "O",
    // },
  ];

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shuffle(questions);

  const container = document.getElementById("questions-container");
  questions.forEach((question, index) => {
    container.innerHTML += `
        <div class="qbox">
            <p class="question center">${question.text}</p>
            <div class="select">
                ${[1, 2, 3, 4, 5]
                  .map(
                    (value) => `
                <label class="custom-radio">
                    <input type="radio" name="degree${index}" value="${value}" data-dimension="${question.dimension}" data-tendency="${question.highScoreTendency}">
                    <span class="radio-btn"></span>
                </label>`
                  )
                  .join("")}
                <span class="label">1 (least) to 5 (most)</span>
            </div>
        </div>`;
  });

  document
    .getElementById("completeButton")
    .addEventListener("click", function () {
      const responses = collectResponses();
      submitResponses(responses);
    });

  function collectResponses() {
    const responses = [];
    document.querySelectorAll(".qbox").forEach((box, index) => {
      const input = box.querySelector('input[type="radio"]:checked');
      if (input) {
        responses.push({
          text: box.querySelector(".question").textContent,
          dimension: input.getAttribute("data-dimension"),
          highScoreTendency: input.getAttribute("data-tendency"),
          answer: parseInt(input.value, 10),
        });
      }
    });
    return responses;
  }

  function submitResponses(responses) {
    const code =
      document.getElementById("displayCode").textContent.split(": ")[1] ||
      undefined;
    fetch("/submit-responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ responses, code }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Navigate to the result page with the code or directly display results
          window.location.href = `/result?code=${data.code || ""}`; // Adjust URL as needed
        } else {
          alert("There was an error processing your test. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Network error. Please try again later.");
      });
  }
});
