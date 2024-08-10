
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = "AIzaSyA3kqZ1qwNj1VItBxSM6_FPRK1x7_BaDRQ";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.0-pro",
});

const generationConfig = {
  temperature: 0.9,
  topP: 1,
  topK: 1,
  maxOutputTokens: 2048,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
 // safetySettings: Adjust safety settings
 // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
    ],
  });

      const result = await chatSession.sendMessage(prompt);
      const response = result.response
      console.log(result.response.text());
      return response.text()
  
}

export default run;




///------------ TEST CASE 2 -------------------


// import {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
//   } from "@google/generative-ai";
  
//   //const apiKey = process.env.GEMINI_API_KEY;
//   const apiKey = "AIzaSyA3kqZ1qwNj1VItBxSM6_FPRK1x7_BaDRQ";
//   const genAI = new GoogleGenerativeAI(apiKey);
  
//   const model = genAI.getGenerativeModel({
//     model: "gemini-1.5-flash",
//   });
  
//   const generationConfig = {
//     temperature: 0.9,
//     topP: 1,
//     topK: 1,
//     maxOutputTokens: 2080,
//     responseMimeType: "text/plain",
//   };
  
//   async function run(prompt) {
//     const chatSession = model.startChat({
//       generationConfig,
//    // safetySettings: Adjust safety settings
//    // See https://ai.google.dev/gemini-api/docs/safety-settings
//       history: [
//       ],
//     });
  
//     const result = await chatSession.sendMessage(prompt);
//     const response = result.response
//     console.log(result.response.text());
//     return response.text()

//   }
  
//   export default run;
