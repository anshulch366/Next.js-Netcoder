import { chapter } from "../../resource-chapter";

export const playback = chapter("HTML Media", [
  {
    id: "study-playback-html-media",
    title: "HTML Media",
    level: "Beginner",
    summary: "Media file, format aur browser playback ke beech ka sambandh samjho.",
    content: [
      "Audio aur video file ka container tracks ko pack karta hai aur codec unka data encode karta hai. Sirf extension dekhkar har device par playback guarantee nahi hota. Browser ko multiple sources dene se woh playable candidate chun sakta hai.",
      "Apni ek recording ke do actual encoded versions rakho. source tags ko preference order mein do aur type mein MIME type likho. Download link ko player ke bahar rakho taaki woh hamesha mil sake.",
    ],
    reading: { title: "W3Schools · HTML Media", url: "https://www.w3schools.com/html/html_media.asp" },
    examples: [{
      title: "Do format mein club recording",
      code: "<audio controls>\n  <source src=\"intro.ogg\" type=\"audio/ogg\">\n  <source src=\"intro.mp3\" type=\"audio/mpeg\">\n</audio>\n<a href=\"intro.mp3\">Recording download karo</a>",
      result: "Files available hon to browser playable source chunta hai. Sirf ek player dikhega. Neeche ka link file alag se kholta hai.",
    }],
    quizzes: [
      { question: "Do sources dene ka purpose kya hai?", options: ["Dono saath bajana", "Volume double karna", "Alternative playable formats"], answer: 2, explanation: "Browser candidates mein se suitable source chunta hai." },
      { question: "type=\"audio/mpeg\" kya batata hai?", options: ["Media MIME type", "Duration", "Speaker ka naam"], answer: 0, explanation: "Type hint format selection mein kaam aata hai." },
      { question: "Link player ke bahar kyun hai?", options: ["Sound louder ho", "Hamesha available rahe", "Codec badle"], answer: 1, explanation: "Link normal page content ki tarah dikhega." },
    ],
  },
  {
    id: "study-playback-html-video",
    title: "HTML Video",
    level: "Beginner",
    summary: "Native video player mein controls, preview aur captions jodo.",
    content: [
      "Video ko samajhne ke liye har learner audio nahi sun sakta. controls se playback operate hota hai, poster se playback se pehle thumbnail milta hai aur track se timed captions jude hote hain.",
      "Same folder mein demo.mp4, cover.jpg aur hi.vtt rakho. VTT file WEBVTT se shuru hoti hai aur har cue ka start aur end time hota hai. Captions menu aur keyboard se play/pause test karo.",
    ],
    reading: { title: "W3Schools · HTML Video", url: "https://www.w3schools.com/html/html5_video.asp" },
    examples: [{
      title: "Caption wala demo",
      code: "<video controls width=\"360\" poster=\"cover.jpg\">\n  <source src=\"demo.mp4\" type=\"video/mp4\">\n  <track kind=\"captions\" src=\"hi.vtt\" srclang=\"hi\" label=\"Hindi\" default>\n</video>",
      result: "Files sahi milne par poster ke saath player dikhta hai. Play karne par video chalega aur active captions matching time par aayenge.",
    }],
    quizzes: [
      { question: "Poster kab kaam aata hai?", options: ["Playback se pehle preview mein", "Audio encode karte waqt", "Captions translate karte waqt"], answer: 0, explanation: "Poster preview image ka URL hai." },
      { question: "Timed captions file kaunsa element jodta hai?", options: ["poster", "track", "source ka title"], answer: 1, explanation: "track timed text ka resource deta hai." },
      { question: "Native play/pause controls kaise milte hain?", options: ["width attribute", "srclang attribute", "controls attribute"], answer: 2, explanation: "Boolean controls browser ka player UI enable karta hai." },
    ],
  },
  {
    id: "study-playback-html-audio",
    title: "HTML Audio",
    level: "Beginner",
    summary: "Spoken lesson ko audio player aur readable transcript ke saath publish karo.",
    content: [
      "Audio-only recording mein screen par visuals nahi hote. controls play, pause aur seek ka access dete hain. Transcript bolne ka content text mein deta hai aur bina awaaz ke bhi lesson padhne deta hai.",
      "Apni recording ko intro.mp3 rakho. preload=\"metadata\" browser ko duration jaise metadata pehle lene ka hint deta hai. Transcript ko player ke paas details mein rakho aur dono paths check karo.",
    ],
    reading: { title: "W3Schools · HTML Audio", url: "https://www.w3schools.com/html/html5_audio.asp" },
    examples: [{
      title: "Chhota spoken intro",
      code: "<audio controls preload=\"metadata\" src=\"intro.mp3\"></audio>\n<details><summary>Transcript padho</summary><p>Aaj hum rang milana seekhenge.</p></details>",
      result: "Recording available ho to player use chalaata hai. Transcript padho kholne par spoken sentence dikhta hai, chahe audio pause ho.",
    }],
    quizzes: [
      { question: "preload=\"metadata\" kya hai?", options: ["Autoplay command", "Loading ka hint", "Transcript language"], answer: 1, explanation: "Browser metadata preload kar sakta hai." },
      { question: "Transcript ka purpose kya hai?", options: ["Volume set karna", "File convert karna", "Speech ko readable banana"], answer: 2, explanation: "Transcript audio ka textual equivalent deta hai." },
      { question: "Recording ka URL kahan diya hai?", options: ["audio ke src mein", "summary mein", "preload mein"], answer: 0, explanation: "src player ka media resource set karta hai." },
    ],
  },
  {
    id: "study-playback-html-youtube",
    title: "HTML YouTube",
    level: "Beginner",
    summary: "Hosted video ko uske embed URL se apne page par dikhao.",
    content: [
      "YouTube watch page dekhne ka regular address aur iframe ke liye embed address alag hote hain. Player YouTube se load hota hai, isliye network aur video ki embedding permission ka asar hota hai.",
      "Share ke Embed option se video id aur allowed URL lo. Iframe ko descriptive title do, fullscreen allow karo aur neeche watch link do. Example mein VIDEO_ID dono jagah apne embeddable video ki ID se badlo.",
    ],
    reading: { title: "W3Schools · HTML YouTube", url: "https://www.w3schools.com/html/html_youtube.asp" },
    examples: [{
      title: "Hosted recording ka embed",
      code: "<iframe title=\"Art Club ka sketch demo\" width=\"360\" height=\"203\"\n  src=\"https://www.youtube.com/embed/VIDEO_ID\" allowfullscreen></iframe>\n<a href=\"https://www.youtube.com/watch?v=VIDEO_ID\">YouTube par demo dekho</a>",
      result: "Valid embeddable ID aur internet ke saath inline player dikhega. Link learner ko wahi video YouTube par kholne deta hai.",
    }],
    quizzes: [
      { question: "iframe URL ka kaunsa path chahiye?", options: ["/feed/history", "/results", "/embed/VIDEO_ID"], answer: 2, explanation: "Embed route iframe player deta hai." },
      { question: "title kiska naam batata hai?", options: ["Embedded frame ka purpose", "Channel password", "Network type"], answer: 0, explanation: "Frame ka accessible naam content describe karta hai." },
      { question: "Valid ID ke bawajood playback kyun ruk sakta hai?", options: ["Caption lamba hai", "Owner ne embedding restrict ki ho", "Heading h2 hai"], answer: 1, explanation: "Provider ki settings embedding control karti hain." },
    ],
  },
  {
    id: "study-playback-html-project-viii",
    title: "HTML Project VIII",
    level: "Intermediate",
    summary: "Ek media lesson banao jisme demo dekhne aur uski baat padhne dono ka raasta ho.",
    content: [
      "Video, captions aur text ka kaam pehle tay karo. Video movement dikhata hai, captions speech aur meaningful sounds batate hain aur written steps action ko dobara padhne mein madad karte hain. Heading in sabko ek lesson ke roop mein jodti hai.",
      "Ek chhota paper-fold demo record karo aur fold.mp4 naam do. fold.vtt mein timing ke saath captions likho. Player aur written steps rakho, volume mute karke check karo ki learner phir bhi fold repeat kar sakta hai.",
    ],
    reading: { title: "W3Schools · HTML Project VIII", url: "https://www.w3schools.com/html/html_project_media.php" },
    examples: [{
      title: "Paper-fold lesson",
      code: "<main><h1>Kagaz ka pehla fold</h1>\n  <video controls width=\"320\" src=\"fold.mp4\">\n    <track kind=\"captions\" srclang=\"hi\" label=\"Hindi\" src=\"fold.vtt\" default>\n  </video>\n  <h2>Steps</h2><ol><li>Dono kone milao.</li><li>Beech ki line dabao.</li></ol>\n</main>",
      result: "Apni files ke saath playback aur timed captions milenge. Do numbered steps video ke neeche bina playback ke bhi padhe ja sakte hain.",
    }],
    quizzes: [
      { question: "Mute test kis cheez ko check karta hai?", options: ["Awaaz ke bina instructions samajh aati hain", "File ka naam chhota hai", "Frame ka color"], answer: 0, explanation: "Isse captions aur written steps ki usefulness check hoti hai." },
      { question: "Steps ko ol mein kyun rakha?", options: ["ol video chalaata hai", "Order meaningful hai", "Captions generate hote hain"], answer: 1, explanation: "Pehle corners align hote hain phir crease banti hai." },
      { question: "Timed captions kahan edit karoge?", options: ["Video width", "h1 ka lang", "fold.vtt"], answer: 2, explanation: "Track us VTT file se cues leta hai." },
    ],
  },
]);
