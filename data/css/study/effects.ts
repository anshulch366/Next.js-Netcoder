import { chapter } from "../../resource-chapter";
import { cssDemo } from "../demo";

export const effects = chapter("CSS Advanced", [
  {
    id: "css-advanced-rounded-corners", title: "CSS Rounded Corners", level: "Intermediate",
    summary: "Box ki corners ko radius se soften karo.",
    content: [
      "Ek length har corner ki curve set karti hai aur 50% equal width-height box ko circle bana sakta hai. Non-square box par wahi percentage ellipse deti hai.",
      "Ek square avatar aur rectangle badge compare karo. Dimensions badalte waqt radius ki percentage ka asar dekho.",
    ],
    examples: [{
      title: "CSS Rounded Corners · Practice",
      code: cssDemo("<span class=\"avatar\">A</span><span class=\"pill\">Mentor</span>")("span { display: inline-grid; place-items: center; background: lavender; }\n.avatar { width: 3rem; height: 3rem; border-radius: 50%; }\n.pill { padding: .4rem 1rem; border-radius: 999px; }"),
      result: "A circular badge mein aur Mentor pill shape mein dikhega.",
    }],
    quizzes: [
      { question: "Circle ke liye dimensions?", options: ["Sirf height zero", "Equal width aur height", "Koi bhi ratio"], answer: 1, explanation: "Equal axes par 50% curve circle banti hai." },
      { question: "Radius kya control karta hai?", options: ["Border thickness", "Margin", "Corner shape"], answer: 2, explanation: "Border-radius outer curve define karta hai." },
      { question: "Bahut bada radius pill kyun banata hai?", options: ["Browser curves ko box mein fit karta hai", "Font rotate hota hai", "Width double hoti hai"], answer: 0, explanation: "Overlapping radii proportionally scale hote hain." },
    ],
  },
  {
    id: "css-advanced-border-images", title: "CSS Border Images", level: "Intermediate",
    summary: "Frame ke liye image ke edges reuse karo.",
    content: [
      "border-image source ko slices mein baantkar corners aur edges paint karta hai. Source gradient bhi ho sakta hai, isliye demo ko external asset nahi chahiye.",
      "Pehle actual border width aur style do. Gradient source aur slice 1 lagao. Width badhaakar dekho ki frame mota hota hai aur content ke peeche background same rehta hai.",
    ],
    examples: [{
      title: "CSS Border Images · Practice",
      code: cssDemo("<p>Exhibition pass</p>")("p { padding: 1rem; border: 8px solid teal; border-image: linear-gradient(90deg, teal, gold) 1; }"),
      result: "Content ke gird 8px ka teal-se-gold frame dikhega.",
    }],
    quizzes: [
      { question: "Source kya hai?", options: ["Text color", "Drop shadow", "Linear gradient"], answer: 2, explanation: "Gradient image value ki tarah use ho sakta hai." },
      { question: "Frame ki allocated width?", options: ["8px", "1px", "90px"], answer: 0, explanation: "Border shorthand width set karta hai." },
      { question: "Aakhri 1 kiski value hai?", options: ["Opacity", "Slice", "Margin"], answer: 1, explanation: "Border-image shorthand mein source ke baad slice hai." },
    ],
  },
  {
    id: "css-advanced-backgrounds", title: "CSS Backgrounds", level: "Intermediate",
    summary: "Multiple backgrounds ko ek box mein layers ki tarah paint karo.",
    content: [
      "Comma-separated list mein pehli image sabse upar hoti hai. Transparent hisson se neeche wali layer nazar aati hai aur color sabse peeche rehta hai.",
      "Pehle ek corner highlight aur phir broad gradient do. Pehli layer ko completely opaque karke dekho ki neeche ka gradient kyun chhup jaata hai.",
    ],
    examples: [{
      title: "CSS Backgrounds · Practice",
      code: cssDemo("<div class=\"cover\">Workshop</div>")(".cover { padding: 2rem; color: white; background: radial-gradient(circle at top left, #ffffff70, transparent 45%), linear-gradient(90deg, navy, teal); }"),
      result: "Top-left mein halka highlight aur neeche navy-teal horizontal blend dikhega.",
    }],
    quizzes: [
      { question: "Top layer kaunsi?", options: ["Radial gradient", "Linear gradient", "Text"], answer: 0, explanation: "Background images mein first sabse upar paint hoti hai." },
      { question: "Neeche ka rang kahan nazar aata hai?", options: ["Sirf text mein", "Transparent region mein", "Kabhi nahi"], answer: 1, explanation: "Alpha se lower layers show hoti hain." },
      { question: "Layers ka separator?", options: ["Semicolon", "Slash", "Comma"], answer: 2, explanation: "Comma independent background layers alag karta hai." },
    ],
  },
  {
    id: "css-advanced-colors", title: "CSS Colors", level: "Intermediate",
    summary: "Hue, saturation, lightness aur alpha ko independently tune karo.",
    content: [
      "HSL mein angle hue choose karta hai, saturation color intensity aur lightness dark se light position batati hai. Alpha backdrop ke saath composite hota hai.",
      "Same hue aur saturation ke do swatches banao. Sirf lightness badalkar compare karo. Opacity property ki jagah color ke alpha se sirf selected layer translucent hoti hai.",
    ],
    examples: [{
      title: "CSS Colors · Practice",
      code: cssDemo("<span class=\"dark\">A</span><span class=\"light\">B</span>")("span { display: inline-block; padding: 1rem; }\n.dark { background: hsl(180 60% 25%); color: white; }\n.light { background: hsl(180 60% 80%); }"),
      result: "Dono cyan family mein hain par B ka background kaafi halka hai.",
    }],
    quizzes: [
      { question: "Lightness kaunsi value badli?", options: ["180 se 60", "25% se 80%", "60% se 25%"], answer: 1, explanation: "HSL ki teesri value lightness hai." },
      { question: "Hue ki value?", options: ["60", "80", "180"], answer: 2, explanation: "Pehla component hue angle hai." },
      { question: "Color ko half transparent kaise likhen?", options: ["hsl(180 60% 25% / .5)", "hsl(180 60% 25% / 5)", "opacity: 50px"], answer: 0, explanation: "Slash ke baad alpha half opacity set karta hai." },
    ],
  },
  {
    id: "css-advanced-gradients", title: "CSS Gradients", level: "Intermediate",
    summary: "Gradient se bina bitmap ke do ya zyada colors ka transition banao.",
    content: [
      "Linear gradient ek direction mein badalta hai, radial centre se phailta hai aur conic centre ke around angle par chalta hai.",
      "Do adjacent stops ko same 50% point par rakho. Smooth blend ki jagah hard boundary dekho. Percentage badalkar progress bar ka visual proportion change karo.",
    ],
    examples: [{
      title: "CSS Gradients · Practice",
      code: cssDemo("<div class=\"progress\">50% complete</div>")(".progress { padding: .6rem; background: linear-gradient(to right, lightgreen 50%, gainsboro 50%); }"),
      result: "Left aadha green aur right aadha gray dikhega. Text progress ka actual value bhi batata hai.",
    }],
    quizzes: [
      { question: "Hard edge kyun hai?", options: ["Gradient radial hai", "Font bold hai", "Dono stops 50% par"], answer: 2, explanation: "Same offset par colors seedhe switch karte hain." },
      { question: "Direction kya hai?", options: ["Left se right", "Top se bottom", "Clockwise"], answer: 0, explanation: "to right horizontal progression hai." },
      { question: "Value readable kaise rahegi?", options: ["Sirf green color se", "Text label ke saath", "Sirf shadow se"], answer: 1, explanation: "Text visual distinction ke alawa value deta hai." },
    ],
  },
  {
    id: "css-advanced-shadows", title: "CSS Shadows", level: "Intermediate",
    summary: "Surface aur text ko separate shadow do.",
    content: [
      "box-shadow box ki shape ko follow karta hai aur text-shadow glyphs ko. Offsets direction, blur softness aur optional spread box shadow ka size badalta hai.",
      "Positive vertical offset aur blur se card ko raised look do. Offset zero karke dekho ki shadow dono taraf zyada evenly phailti hai.",
    ],
    examples: [{
      title: "CSS Shadows · Practice",
      code: cssDemo("<article>Library pass</article>")("article { padding: 1rem; margin: 1rem; box-shadow: 0 4px 10px #0004; text-shadow: 1px 1px 1px #0002; }"),
      result: "Box ke neeche soft shadow aur letters ke paas halki text shadow hogi.",
    }],
    quizzes: [
      { question: "Box ki vertical offset?", options: ["4px", "10px", "0"], answer: 0, explanation: "Doosra length y offset hai." },
      { question: "10px kya karta hai?", options: ["Border width", "Blur", "Spread zaroor"], answer: 1, explanation: "Teesra length blur radius hai." },
      { question: "Shadow layout space leti hai?", options: ["Hamesha 10px", "Sirf horizontal", "Nahi"], answer: 2, explanation: "Shadow paint effect hai." },
    ],
  },
  {
    id: "css-advanced-text-effects", title: "CSS Text Effects", level: "Intermediate",
    summary: "Single-line label ko fixed jagah mein ellipsis ke saath fit karo.",
    content: [
      "text-overflow visual marker deta hai jab inline-direction overflow clip ho raha ho. Wrapping enabled rahe to text agali line le sakta hai.",
      "Ek narrow heading mein nowrap aur hidden ke saath ellipsis do. Width badhaakar dekho jab poora text fit ho jaata hai to dots apne aap hat jaate hain.",
    ],
    examples: [{
      title: "CSS Text Effects · Practice",
      code: cssDemo("<p>Saturday watercolour exhibition schedule</p>")("p { width: 12ch; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }"),
      result: "Lamba naam ek line mein cut hoga aur end par ellipsis dikhega. DOM mein full text available hai.",
    }],
    quizzes: [
      { question: "Wrapping kisne roki?", options: ["width: auto", "white-space: nowrap", "ellipsis akela"], answer: 1, explanation: "Whitespace rule line wrapping rokta hai." },
      { question: "Overflow marker kaun deta hai?", options: ["font-style", "line-height", "text-overflow"], answer: 2, explanation: "Ellipsis truncation ka marker hai." },
      { question: "Width badhkar text fit ho to?", options: ["Poora naam dikhega", "Dots hamesha rahenge", "Text delete hoga"], answer: 0, explanation: "Overflow na ho to ellipsis ki zaroorat nahi." },
    ],
  },
  {
    id: "css-advanced-custom-fonts", title: "CSS Custom Fonts", level: "Intermediate",
    summary: "Apni font file ko family ke roop mein register karo.",
    content: [
      "@font-face browser ko font ka naam aur source batata hai. font-display: swap fallback text turant dikhane aur font milne par switch karne mein madad karta hai.",
      "Apni licensed WOFF2 file ko fonts/club.woff2 par rakho. Heading par custom family ke baad fallback do. File unavailable karke Network aur rendered font dono compare karo.",
    ],
    examples: [{
      title: "CSS Custom Fonts · Practice",
      code: cssDemo("<h2>Studio diary</h2>")("@font-face { font-family: Club; src: url(\"fonts/club.woff2\") format(\"woff2\"); font-display: swap; }\nh2 { font-family: Club, Georgia, serif; }"),
      result: "Valid file load ho to Club use hoga. File miss ho to heading fallback serif stack mein readable rahegi.",
    }],
    quizzes: [
      { question: "Font register kaunsa rule?", options: ["@import-font", "@media", "@font-face"], answer: 2, explanation: "Face rule source aur descriptors jodta hai." },
      { question: "File ka address kis descriptor mein?", options: ["src", "font-display", "font-weight"], answer: 0, explanation: "src font resource describe karta hai." },
      { question: "Club na mile to next candidate?", options: ["Arial hi", "Georgia", "Koi text nahi"], answer: 1, explanation: "Family list source order mein fallbacks deti hai." },
    ],
  },
  {
    id: "css-advanced-2d-transforms", title: "CSS 2D Transforms", level: "Intermediate",
    summary: "Layout space badle bina box ko move, rotate ya scale karo.",
    content: [
      "Transform painted geometry par lagta hai aur original flow slot apni jagah rehta hai. Isliye bada scaled element neighbour ko overlap kar sakta hai.",
      "Inline badge ko inline-block banao aur rotate karo. Rotation ko zero karke compare karo ki paragraph ka layout dobara arrange nahi hua.",
    ],
    examples: [{
      title: "CSS 2D Transforms · Practice",
      code: cssDemo("<p>Ticket <span>SALE</span> aaj tak</p>")("span { display: inline-block; background: gold; transform: rotate(-8deg); transform-origin: center; }"),
      result: "SALE thoda tilted hoga aur surrounding text original slot ke aas-paas flow karega.",
    }],
    quizzes: [
      { question: "Angle ki unit?", options: ["deg", "px", "fr"], answer: 0, explanation: "Rotation angle leta hai." },
      { question: "Rotation centre kis se?", options: ["margin", "transform-origin", "float"], answer: 1, explanation: "Origin transformation pivot set karta hai." },
      { question: "Neighbour ka flow slot badhega?", options: ["Rotation jitna", "Double", "Nahi"], answer: 2, explanation: "Transform normal layout calculation ke baad paint hota hai." },
    ],
  },
  {
    id: "css-advanced-3d-transforms", title: "CSS 3D Transforms", level: "Intermediate",
    summary: "Perspective se depth wala rotation dikhao.",
    content: [
      "rotateY vertical axis ke around surface ghumata hai. Parent ki perspective viewing distance deti hai jisse near aur far edges alag projected size lete hain.",
      "Stage par perspective aur card par rotateY lagao. Angle ko zero aur phir 45deg karke width ka visual projection dekho. Original layout width same rahegi.",
    ],
    examples: [{
      title: "CSS 3D Transforms · Practice",
      code: cssDemo("<div class=\"stage\"><p>Club pass</p></div>")(".stage { perspective: 420px; }\np { width: 8rem; padding: 1rem; background: lavender; transform: rotateY(35deg); }"),
      result: "Card ek taraf muda hua lagega. Perspective se door ka edge visually alag nazar aayega.",
    }],
    quizzes: [
      { question: "Vertical axis rotation?", options: ["rotateX", "rotateY", "translateZ"], answer: 1, explanation: "Y vertical axis hai." },
      { question: "Viewing distance kis par hai?", options: ["Text node", "Body title", "Parent stage"], answer: 2, explanation: "Parent perspective transformed child ko projection deti hai." },
      { question: "35deg ko zero karne par?", options: ["Card seedha dikhega", "Card hidden", "Height zero"], answer: 0, explanation: "Rotation zero identity orientation hai." },
    ],
  },
  {
    id: "css-advanced-transitions", title: "CSS Transitions", level: "Intermediate",
    summary: "Do states ke beech gradual change banao.",
    content: [
      "Transition ko starting rule mein rakhne se enter aur exit dono taraf movement milta hai. Property, duration aur timing function choose karo.",
      "Button hover aur keyboard focus par thoda uthao. Reduced motion preference ke liye transition band rakho. Keyboard focus ring phir bhi visible rehni chahiye.",
    ],
    examples: [{
      title: "CSS Transitions · Practice",
      code: cssDemo("<button>Agla lesson</button>")("button { transition: transform 180ms ease-out; }\nbutton:hover, button:focus-visible { transform: translateY(-3px); }\n@media (prefers-reduced-motion: reduce) { button { transition: none; } }"),
      result: "State change par button 180ms mein 3px upar aata hai. Reduced motion par state seedhe badalti hai.",
    }],
    quizzes: [
      { question: "Animation duration?", options: ["3ms", "180s", "180ms"], answer: 2, explanation: "Duration transition ki time value hai." },
      { question: "Negative translateY kidhar?", options: ["Upar", "Neeche", "Right"], answer: 0, explanation: "Default y axis neeche positive hai." },
      { question: "Dono directions mein transition kyun?", options: ["Sirf hover mein hai", "Base rule par declared hai", "Button fixed hai"], answer: 1, explanation: "State enter aur exit par transition available rehta hai." },
    ],
  },
  {
    id: "css-advanced-animations", title: "CSS Animations", level: "Intermediate",
    summary: "Multiple keyframes se time-based movement banao.",
    content: [
      "@keyframes positions ya values define karta hai aur animation property timing aur repetition jodti hai. Learner ke reduced-motion preference ko dhyaan mein rakho.",
      "Small dot ko move karke wapas lao. Middle frame ki distance badlao aur dekho poori cycle ki duration wahi rehti hai. Essential status ko text mein bhi likho.",
    ],
    examples: [{
      title: "CSS Animations · Practice",
      code: cssDemo("<p><span></span> Loading demo</p>")("span { display: inline-block; width: .6rem; height: .6rem; background: teal; }\n@keyframes hop { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }\n@media (prefers-reduced-motion: no-preference) { span { animation: hop 1s ease 3; } }"),
      result: "Motion allowed ho to dot teen baar upar jaakar lautega. Loading demo text stable rahega.",
    }],
    quizzes: [
      { question: "Peak kis frame par?", options: ["50%", "100%", "0%"], answer: 0, explanation: "Middle keyframe -6px set karta hai." },
      { question: "Total cycles kitni?", options: ["1", "3", "Infinite"], answer: 1, explanation: "Animation iteration count 3 hai." },
      { question: "Reduced motion par kya dikhega?", options: ["Khaali page", "Hamesha moving dot", "Static dot aur text"], answer: 2, explanation: "Animation no-preference query mein hi hai." },
    ],
  },
  {
    id: "css-advanced-tooltips", title: "CSS Tooltips", level: "Intermediate",
    summary: "Control ka extra hint pointer aur keyboard dono se dikhana seekho.",
    content: [
      "Hint zaroori label ka substitute nahi hai. CSS hover aur focus-within se compact inline hint reveal kar sakti hai.",
      "Button ko descriptive naam aur hint ko id do. Pointer hint tak le jaakar aur keyboard se button focus karke verify karo ki text milta hai. Neeche hint line mein hai isliye doosra content cover nahi karta.",
    ],
    examples: [{
      title: "CSS Tooltips · Practice",
      code: cssDemo("<span class=\"help\"><button aria-describedby=\"hint\">Seat code</button><span id=\"hint\" role=\"tooltip\"> Ticket par A12 jaisa code.</span></span>")("#hint { visibility: hidden; }\n.help:hover #hint, .help:focus-within #hint { visibility: visible; }"),
      result: "Hover ya button focus par instruction dikhegi. Visibility hidden ki wajah se hint ki jagah pehle se reserved hai.",
    }],
    quizzes: [
      { question: "Keyboard par wrapper ki condition?", options: [":hover hi", ":focus-within", ":visited"], answer: 1, explanation: "Descendant focus par wrapper match karta hai." },
      { question: "Description kis se judi?", options: ["display", "background", "aria-describedby"], answer: 2, explanation: "Id reference se control ko hint milta hai." },
      { question: "Space pehle se kyun hai?", options: ["visibility hidden", "display none", "opacity zero height"], answer: 0, explanation: "Visibility layout box ko rakhti hai." },
    ],
  },
  {
    id: "css-advanced-image-styling", title: "CSS Image Styling", level: "Intermediate",
    summary: "Photo ko content column mein fit karo aur proportions bachao.",
    content: [
      "max-width:100% oversized image ko parent ke andar rokta hai aur height:auto natural aspect ratio ke saath adjust hoti hai. border-radius visual crop ko soften karta hai.",
      "Demo ka src apni image se bhi test karo. Parent ki width kam karke check karo ki image overflow na kare. Meaningful alt HTML mein rakho.",
    ],
    examples: [{
      title: "CSS Image Styling · Practice",
      code: cssDemo("<figure><img src=\"/images/courses/python.png\" alt=\"Python course\"></figure>")("figure { max-width: 16rem; }\nimg { display: block; max-width: 100%; height: auto; border-radius: .75rem; }"),
      result: "Image available width mein fit hogi aur natural proportions rakhegi. Rounded edges dikhenge.",
    }],
    quizzes: [
      { question: "Aspect ratio kaise bacha?", options: ["Height fixed 100px", "Border radius", "height: auto"], answer: 2, explanation: "Width change ke saath automatic height scale hoti hai." },
      { question: "Oversize ko kaun rokta hai?", options: ["max-width: 100%", "display: block akela", "alt"], answer: 0, explanation: "Max width containing block ko upper bound banati hai." },
      { question: "Rounded edge ki property?", options: ["outline", "border-radius", "clip text"], answer: 1, explanation: "Radius corners ki curve set karta hai." },
    ],
  },
  {
    id: "css-advanced-image-modal", title: "CSS Image Modal", level: "Intermediate",
    summary: "Thumbnail se badi image modal dialog mein kholo.",
    content: [
      "Modal background interaction rokta hai aur keyboard user ko close karne ka raasta chahiye. CSS backdrop aur image sizing sambhalti hai, native dialog showModal se modal state milti hai.",
      "Thumbnail button activate karo, phir Escape aur Band karo button dono test karo. Local copy mein image URL apni photo ka rakho. Dialog ki image ko viewport ke andar fit karo.",
    ],
    examples: [{
      title: "CSS Image Modal · Practice",
      code: cssDemo("<button id=\"show\"><img width=\"72\" src=\"/images/courses/python.png\" alt=\"Python cover bada dekho\"></button><dialog id=\"view\"><img src=\"/images/courses/python.png\" alt=\"Python course cover\"><form method=\"dialog\"><button>Band karo</button></form></dialog><script>document.querySelector(\"#show\").onclick = () => document.querySelector(\"#view\").showModal();</script>")("dialog img { max-width: 75vw; max-height: 65vh; display: block; }\ndialog::backdrop { background: rgb(0 0 0 / 65%); }"),
      result: "Thumbnail click se enlarged cover aur dark backdrop dikhega. Close par page dobara operate kar sakte ho.",
    }],
    quizzes: [
      { question: "Modal state kaise shuru hui?", options: ["showModal()", "display: block", "opacity: 1"], answer: 0, explanation: "Native dialog method modal behaviour deta hai." },
      { question: "Background overlay selector?", options: ["dialog:hover", "dialog::backdrop", "img::before"], answer: 1, explanation: "Backdrop top-layer dialog ke peeche paint hota hai." },
      { question: "Close button ka mechanism?", options: ["img alt", "width 72", "method=\"dialog\""], answer: 2, explanation: "Dialog form submit karna dialog band karta hai." },
    ],
  },
]);
