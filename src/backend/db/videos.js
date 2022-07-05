/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */
import { v4 as uuid } from "uuid";

export const videos = [
  {
    _id: uuid(),
    title: "Yoga for Strength & Flexibility",
    description:
      "Powerful Yoga Workout for Strength & Flexibility. Join us for a 25 Minute Flow. Open the hips, the shoulders, and tap into your core strength.",
    creator: "GROWING ANNANAS",
    creatorAvatar: "../assets/yogaAv1.jpg",
    views: "6,065,236",
    dateCreated: "05-11-2020",
    source: "https://www.youtube.com/embed/Eml2xnoLpYE",
    imgSrc: "../assets/yoga1.jpg",
    categoryName: "yoga"
  },
  {
    _id: uuid(),
    title: "Yoga For Anxiety and Stress",
    description:
      "Yoga For Anxiety and Stress. Awaken The Force! Move from the darkness into the light! Yoga has your back! In this practice video Adriene guides you through breath and body practices that serve you when you feel bad.",
    creator: "YOGA WITH ADRIENE",
    creatorAvatar: "../assets/yogaAv2.jpg",
    views: "8,979,223",
    dateCreated: "23-12-2015",
    source: "https://www.youtube.com/embed/hJbRpHZr_d0",
    imgSrc: "../assets/yoga2.jpg",
    categoryName: "yoga"
  },
  {
    _id: uuid(),
    title: "Gentle Seated Yoga For Beginners",
    description:
      "This is a slow and gentle 30-minute yoga practice of seated and floor stretches, perfect for every body, suitable for beginners and all levels. ",
    creator: "JESSICA RICHBURG",
    creatorAvatar: "../assets/yogaAv3.jpg",
    views: "6,260",
    dateCreated: "01-09-2022",
    source: "https://www.youtube.com/embed/nQwKKCqkJxg",
    imgSrc: "../assets/yoga3.jpg",
    categoryName: "yoga"
  },
  {
    _id: uuid(),
    title: "Relaxing Yoga For Mental Health",
    description:
      "This class is for all levels (beginners to seasonal practitioners) and is intended to promote mindfulness and relaxation.",
    creator: "JESSICA RICHBURG",
    creatorAvatar: "../assets/yogaAv3.jpg",
    views: "786",
    dateCreated: "10-10-2020",
    source: "https://www.youtube.com/embed/COp7BR_Dvps",
    imgSrc: "../assets/yoga4.jpg",
    categoryName: "yoga"
  },
  {
    _id: uuid(),
    title: "Pilates For Flexibility",
    description:
      "Improve your mobility in this 15 minute routine focusing on your range of movement in different joints and stretches to make you feel open and more flexible.",
    creator: "LOTTIE MURPHY",
    creatorAvatar: "../assets/pilatesAv1.jpg",
    views: "286",
    dateCreated: "13-10-2018",
    source: "https://www.youtube.com/embed/fRBFohrfRd0",
    imgSrc: "../assets/pilates1.jpg",
    categoryName: "pilates"
  },
  {
    _id: uuid(),
    title: "Everyday Pilates Fundamentals",
    description:
      "An everyday pilates class for a healthy body and to learn some fundamentals of pilates, a simple but still challenging class to help your spine and joints feel healthy and to work your core and glutes. Enjoy this mindful practice as a way to keep on top of your Pilates technique and form. ",
    creator: "LOTTIE MURPHY",
    creatorAvatar: "../assets/pilatesAv1.jpg",
    views: "879",
    dateCreated: "17-06-2020",
    source: "https://www.youtube.com/embed/Sw6sy8NZCSY",
    imgSrc: "../assets/pilates2.jpg",
    categoryName: "pilates"
  },
  {
    _id: uuid(),
    title: "Full Body Pilates Workout",
    description:
      "An at home Pilates class can be just as effective as taking a Pilates class in a studio. This 30 minute total body Pilates workout offers a well rounded workout that is easy to follow along yet offers a classic Pilates challenge!",
    creator: "TRIFECTA PILATES",
    creatorAvatar: "../assets/pilatesAv2.jpg",
    views: "981",
    dateCreated: "20-04-2019",
    source: "https://www.youtube.com/embed/OYO6vjzT490",
    imgSrc: "../assets/pilates3.jpg",
    categoryName: "pilates"
  },
  {
    _id: uuid(),
    title: "Pilates for the Spine",
    description:
      "Pilates for the Spine. This full body Pilates practice focuses on a key concept in Pilates, spinal articulation.",
    creator: "TRIFECTA PILATES",
    creatorAvatar: "../assets/pilatesAv2.jpg",
    views: "331",
    dateCreated: "25-05-2018",
    source: "https://www.youtube.com/embed/E1x0b1zSB0w",
    imgSrc: "../assets/pilates4.jpg",
    categoryName: "pilates"
  },
  {
    _id: uuid(),
    title: "Full Body Cardio HIIT Workout",
    description:
      "Tap in with us for a fun 20 Minute high intensity  cardio workout 🔥This workout contains a mixture of high intensity strength, cardio, and plyometric movements.",
    creator: "JUICE & TOYA",
    creatorAvatar: "../assets/cardioAv1.jpg",
    views: "659",
    dateCreated: "14-10-2021",
    source: "https://www.youtube.com/embed/M0uO8X3_tEA",
    imgSrc: "../assets/cardio1.jpg",
    categoryName: "cardio"
  },
  {
    _id: uuid(),
    title: "Cardio and Core Workout",
    description:
      "Boost your metabolism and improve your fitness level with this cardio & core workout. There are  3 circuits that will be done in 2 sets to target your core and burn body fat. Let's get started!",
    creator: "JUMP START",
    creatorAvatar: "../assets/cardioAv2.jpg",
    views: "359",
    dateCreated: "28-06-2022",
    source: "https://www.youtube.com/embed/vSk96UZssg4",
    imgSrc: "../assets/cardio2.jpg",
    categoryName: "cardio"
  },
  {
    _id: uuid(),
    title: "HIIT Workout No Equipment",
    description:
      "Join me for a quick calorie blast with modifications for intensity and impact. No equipment needed.",
    creator: "LAURA WELLS FITNESS",
    creatorAvatar: "../assets/cardioAv3.jpg",
    views: "459",
    dateCreated: "24-06-2022",
    source: "https://www.youtube.com/embed/WE41pruGReI",
    imgSrc: "../assets/cardio3.jpg",
    categoryName: "cardio"
  },
  {
    _id: uuid(),
    title: "CARDIO KICKBOX WORKOUT",
    description:
      "FULL HOUR WORKOUT using Punches and Kicks to Lose Weight. No Equipment Needed. Great for men and women.",
    creator: "KICKBOX STREAMING",
    creatorAvatar: "../assets/cardioAv4.jpg",
    views: "460",
    dateCreated: "22-06-2022",
    source: "https://www.youtube.com/embed/hSZvuNnPgKM",
    imgSrc: "../assets/cardio4.jpg",
    categoryName: "cardio"
  },
  {
    _id: uuid(),
    title: "Strength Routine For Runners",
    description:
      "Strength training is critical for runners but it's easy to overlook. In this video, Ashley shares a simple but effective strength routine that can also serve as your pre-run warmup. Grab a mat and let's get started!",
    creator: "FLEET FEET",
    creatorAvatar: "../assets/strengthAv1.jpg",
    views: "1360",
    dateCreated: "24-02-2020",
    source: "https://www.youtube.com/embed/bkTqruArt5U",
    imgSrc: "../assets/strength1.jpg",
    categoryName: "strength"
  },
  {
    _id: uuid(),
    title: "Full Body Strength Workout",
    description:
      "Tap in with us for a 20 minute FULL BODY strength building workout that requires no equipment! This workout focuses on 'time under tension'---meaning each exercises will be performed slow and controlled to ensure your muscles are fully engaged.",
    creator: "JUICE & TOYA",
    creatorAvatar: "../assets/cardioAv1.jpg",
    views: "760",
    dateCreated: "05-04-2021",
    source: "https://www.youtube.com/embed/Q2cMMnUuKYQ",
    imgSrc: "../assets/strength2.jpg",
    categoryName: "strength"
  },
  {
    _id: uuid(),
    title: "20 Minute Full Body Strength",
    description:
      "Follow along with us for a 20 minute full body STRENGTH workout if you're looking to tone up and build strength!",
    creator: "JUICE & TOYA",
    creatorAvatar: "../assets/cardioAv1.jpg",
    views: "450",
    dateCreated: "11-01-2021",
    source: "https://www.youtube.com/embed/N4HbeyDChFw",
    imgSrc: "../assets/strength3.jpg",
    categoryName: "strength"
  },
];
