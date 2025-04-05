import emailjs from "@emailjs/browser";
import { prompt } from "../data/generateTweetPrompt";
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAi = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
const GeminiClient = genAi.getGenerativeModel({ model: "gemini-1.5-flash" });

class GeminiService {
  // Function to generate tweets using Gemini API
  async generateTweets() {
    const geminiResponse = await GeminiClient.generateContent(prompt).then(
      (res) => res.response.candidates[0].content.parts[0].text
    );

    // Parse the cleaned JSON string
    const parsedTweets = JSON.parse(geminiResponse);

    return parsedTweets;
  }
}

// Function to generate tweets
export const generateTweets = async () => {
  try {
    const geminiService = new GeminiService();
    const geminiGeneratedTweets = await geminiService.generateTweets();

    console.log(
      `Tweets generated successfully - ${JSON.stringify(geminiGeneratedTweets)}`
    );

    const formatted = geminiGeneratedTweets
      .map((t, i) => `${i + 1}. ${t.content}`)
      .join("\n");

    await sendTweetsToEmail({ tweets: `${formatted}` });
  } catch (error) {
    console.error("Error generating tweets:", error);
  }
};

// Send Email Message
const sendTweetsToEmail = async (emailBody) => {
  try {
    await emailjs.send(
      `service_cuh4qm8`,
      "template_z1xnk2i",
      emailBody,
      "G1lyVyGCT3gXMAtpf"
    );
    console.log(`Email sent successfully`);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
