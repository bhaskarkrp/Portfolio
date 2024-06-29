import wowAward from "../components/Landing/img/wow awards.jpeg";
import shiningStar from "../components/Landing/img/shiningStar.jpeg";

export const achievementData = {
  bio: "Achievements are milestones or accomplishments that demonstrate growth, progress, and success in a particular area of life. They can range from personal, to professional, to societal. Recognizing and celebrating achievements can boost confidence, increase motivation, and provide a sense of fulfillment and satisfaction.",
  achievements: [
    {
      id: 1,
      title: "Shining Star - Annual Award",
      details: `Recognized with the prestigious "Shining Star - Employee of the Year" award, highlighting exceptional
commitment to value delivery. Spearheaded transformative initiatives over the past year, driving significant
organizational profitability through strategic approaches and a dedication to excellence.`,
      date: "Oct, 2023",
      field: "InspironLabs",
      image: shiningStar,
    },
    {
      id: 2,
      title: "Ripple Effect Award",
      details:
        "Received recognition for conducting an interactive session on Frontend Development, emphasizing HTML, CSS, React, and Redux for the Backend team.",
      date: "Jun, 2023",
      field: "InspironLabs",
      image: "",
    },
    {
      id: 3,
      title: "Wow Awards - Warriors of waste",
      details: `Recognized for exceptional dedication and effort in identifying and implementing cost-saving measures, resulting
in savings of 11 lakhs per quarter.`,
      date: "Sept, 2022",
      field: "Snapdeal",
      image: wowAward,
    },
  ],
};

// Do not remove any fields.
// Leave it blank instead as shown below.

/*

export const achievementData = {
    bio : "",
    achievements : []
}

*/
