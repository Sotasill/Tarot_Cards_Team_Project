import axios from "axios";



export const fetchPredictionFromAI = async (cards) => {
  const prompt = `На основе следующих карт Таро: ${cards
    .map((card) => card.name)
    .join(", ")}, дайте предсказание.`;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 150,
      },
      {
        headers: {
          
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    if (error.response && error.response.status === 429) {
      console.error("Too many requests. Please try again later.");
      // Реализация задержки или других действий
    } else {
      console.error("Error fetching prediction from AI:", error);
    }
    throw error;
  }
};
