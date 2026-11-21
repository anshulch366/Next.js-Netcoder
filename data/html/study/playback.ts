import { chapter } from "../../resource-chapter";

export const playback = chapter("HTML Media", [
  {
    id: "study-playback-html-media",
    title: "HTML Media",
    level: "Beginner",
    summary: "Supply media formats a browser can select and play.",
    content: [
      "A container packages tracks and a codec determines how their contents are encoded. Playback support depends on both. Multiple sources give the browser a choice of playable formats.",
      "Provide two actual encodings of the recording and list them in preference order with their MIME types. Keep the separate recording link outside the player so it is always available.",
    ],
    reading: { title: "W3Schools · HTML Media", url: "https://www.w3schools.com/html/html_media.asp" },
    examples: [{
      title: "Offer two formats for a recording",
      code: "<audio controls>\n  <source src=\"intro.ogg\" type=\"audio/ogg\">\n  <source src=\"intro.mp3\" type=\"audio/mpeg\">\n</audio>\n<a href=\"intro.mp3\">Open the recording</a>",
      result: "When the files are available, one player uses a supported source. The link below opens the MP3 separately.",
    }],
    quizzes: [
      { question: "Why provide two sources?", options: ["To play both simultaneously", "To double the volume", "To offer alternative formats"], answer: 2, explanation: "The browser selects a suitable candidate for the player." },
      { question: "What does audio/mpeg describe?", options: ["The media MIME type", "The duration", "The speaker's name"], answer: 0, explanation: "The type provides format information for source selection." },
      { question: "Why place the separate link outside audio?", options: ["To increase volume", "To keep the link available", "To change the codec"], answer: 1, explanation: "An external link remains ordinary page content." },
    ],
  },
  {
    id: "study-playback-html-video",
    title: "HTML Video",
    level: "Beginner",
    summary: "Add playback controls, a preview image and timed captions to a video.",
    content: [
      "Controls make playback operable. A poster provides a preview before playback begins. Captions give readers access to speech and meaningful sounds even when audio is unavailable.",
      "Place demo.mp4, cover.jpg and the caption file en.vtt beside the page. Start the WebVTT file with WEBVTT and give each cue a start and end time. Test the captions menu and keyboard playback.",
    ],
    reading: { title: "W3Schools · HTML Video", url: "https://www.w3schools.com/html/html5_video.asp" },
    examples: [{
      title: "A captioned demonstration",
      code: "<video controls width=\"360\" poster=\"cover.jpg\">\n  <source src=\"demo.mp4\" type=\"video/mp4\">\n  <track kind=\"captions\" src=\"en.vtt\" srclang=\"en\" label=\"English\" default>\n</video>",
      result: "With the assets in place, the player initially shows its poster. During playback, enabled captions appear at their cue times.",
    }],
    quizzes: [
      { question: "When is the poster useful?", options: ["Before playback", "During audio encoding", "While translating captions"], answer: 0, explanation: "The poster supplies a preview image." },
      { question: "Which element attaches timed captions?", options: ["poster", "track", "The source title"], answer: 1, explanation: "A track identifies a timed text resource." },
      { question: "Which attribute enables native playback controls?", options: ["width", "srclang", "controls"], answer: 2, explanation: "The boolean controls attribute requests the browser's player interface." },
    ],
  },
  {
    id: "study-playback-html-audio",
    title: "HTML Audio",
    level: "Beginner",
    summary: "Publish a spoken introduction with playback controls and a transcript.",
    content: [
      "Audio controls allow listeners to start, pause and seek. A transcript supplies the spoken information in a readable form and remains useful when playback is paused or unavailable.",
      "Save the recording as intro.mp3. Use preload=\"metadata\" as a loading hint and place a disclosure containing the transcript next to the player. Test each independently.",
    ],
    reading: { title: "W3Schools · HTML Audio", url: "https://www.w3schools.com/html/html5_audio.asp" },
    examples: [{
      title: "A spoken lesson introduction",
      code: "<audio controls preload=\"metadata\" src=\"intro.mp3\"></audio>\n<details><summary>Read transcript</summary><p>Today we will learn to mix colours.</p></details>",
      result: "If the file is available, the player plays the introduction. Opening Read transcript reveals the spoken sentence independently of playback.",
    }],
    quizzes: [
      { question: "What does preload=\"metadata\" provide?", options: ["An autoplay command", "A loading hint", "A transcript language"], answer: 1, explanation: "The browser may retrieve metadata such as duration in advance." },
      { question: "What is the transcript for?", options: ["Setting the volume", "Converting the file", "Providing a readable equivalent of speech"], answer: 2, explanation: "A transcript communicates the recording's content as text." },
      { question: "Where is the recording URL specified?", options: ["In the audio src", "In summary", "In preload"], answer: 0, explanation: "The src attribute identifies the media resource." },
    ],
  },
  {
    id: "study-playback-html-youtube",
    title: "HTML YouTube",
    level: "Beginner",
    summary: "Embed a hosted video and provide a direct viewing link.",
    content: [
      "A YouTube watch page and an embeddable player use different URL formats. The player depends on a network connection and the owner's embedding settings.",
      "Obtain the video ID from the provider's embed option and replace VIDEO_ID in both places. Give the frame a descriptive title and check the direct link as well as the embedded player.",
    ],
    reading: { title: "W3Schools · HTML YouTube", url: "https://www.w3schools.com/html/html_youtube.asp" },
    examples: [{
      title: "Embed a sketch demonstration",
      code: "<iframe title=\"Art Club sketch demonstration\" width=\"360\" height=\"203\"\n  src=\"https://www.youtube.com/embed/VIDEO_ID\" allowfullscreen></iframe>\n<a href=\"https://www.youtube.com/watch?v=VIDEO_ID\">Watch the demonstration on YouTube</a>",
      result: "A valid, embeddable ID loads the player when the service is reachable. The link opens the same video on YouTube.",
    }],
    quizzes: [
      { question: "Which path belongs in the frame URL?", options: ["/feed/history", "/results", "/embed/VIDEO_ID"], answer: 2, explanation: "The embed route serves the player." },
      { question: "What does the frame title identify?", options: ["The purpose of the embedded content", "A channel password", "The connection type"], answer: 0, explanation: "The title supplies an accessible name for the frame." },
      { question: "Why might a valid video ID still fail to play in the frame?", options: ["The caption is long", "The owner restricts embedding", "The heading is h2"], answer: 1, explanation: "The provider controls which videos can be embedded." },
    ],
  },
  {
    id: "study-playback-html-project-viii",
    title: "HTML Project VIII",
    level: "Intermediate",
    summary: "Publish a demonstration that can be followed by watching or reading.",
    content: [
      "A video can show a movement, captions can explain its audio and written steps let readers repeat the action at their own pace. A common heading ties the three resources to the same task.",
      "Record a paper fold as fold.mp4 and supply timed captions in fold.vtt. Place the ordered steps below the player. Mute the audio and check whether a learner can still reproduce the fold.",
    ],
    reading: { title: "W3Schools · HTML Project VIII", url: "https://www.w3schools.com/html/html_project_media.php" },
    examples: [{
      title: "A paper-folding lesson",
      code: "<main><h1>Make the first fold</h1>\n  <video controls width=\"320\" src=\"fold.mp4\">\n    <track kind=\"captions\" srclang=\"en\" label=\"English\" src=\"fold.vtt\" default>\n  </video>\n  <h2>Steps</h2><ol><li>Align the two corners.</li><li>Press along the crease.</li></ol>\n</main>",
      result: "The supplied files provide video playback and timed captions. The two numbered steps remain readable without starting the video.",
    }],
    quizzes: [
      { question: "What does testing with muted audio reveal?", options: ["Whether the instructions remain understandable", "Whether the filename is short", "The frame colour"], answer: 0, explanation: "The test checks what captions and written steps communicate." },
      { question: "Why use ol for the steps?", options: ["It plays the video", "Their sequence matters", "It generates captions"], answer: 1, explanation: "The corners must be aligned before the crease is pressed." },
      { question: "Where are the timed cues edited?", options: ["The video width", "The h1 language", "fold.vtt"], answer: 2, explanation: "The track loads its cues from the VTT file." },
    ],
  },
]);
