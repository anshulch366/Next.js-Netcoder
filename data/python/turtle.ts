import { pythonChapter } from "./chapter";

function drawing(instructions: string) {
  return `import turtle

screen = turtle.Screen()
pen = turtle.Turtle()
${instructions}
screen.mainloop()`;
}

export const turtle = pythonChapter("Python Turtle", "Intermediate", [
  {
    title: "Turtle Intro",
    summary: "Open a drawing window and give a turtle its first instruction.",
    content: ["Use desktop Python with Tk installed. Running python -m tkinter in a terminal should open a test window. Save the drawing as sketch.py so its name keeps the standard turtle module available.", "Screen creates the drawing surface. A new Turtle starts at the center facing east with its pen down. The window's event loop keeps the finished drawing visible until you close it."],
    examples: [{ title: "Draw a starting line", code: drawing(`pen.forward(80)`), result: "An 80-unit line extends to the right from the center." }],
    quizzes: [{ question: "What will a second forward(80) do immediately after the first?", options: ["Return to the origin", "Extend the line another 80 units", "Turn the turtle east"], answer: 1, explanation: "Movement begins at the turtle's current position and follows its current heading." }],
  },
  {
    title: "Turtle Move and Turn",
    summary: "Use travel distances and exterior angles to close a polygon.",
    content: ["forward travels along the current heading. left and right rotate in place by a given angle in degrees. A full turn is 360 degrees, so three equal exterior turns of 120 degrees close an equilateral triangle."],
    examples: [{ title: "Trace a triangle", code: drawing(`for side in range(3):
    pen.forward(90)
    pen.left(120)`), result: "Three equal sides form a triangle and the turtle finishes facing east again." }],
    quizzes: [{ question: "Which left turn will close a regular hexagon after six equal moves?", options: ["30 degrees", "120 degrees", "60 degrees"], answer: 2, explanation: "Six exterior turns must add up to 360 degrees. Each turn is 60 degrees." }],
  },
  {
    title: "Turtle Pen",
    summary: "Choose where a moving turtle leaves ink.",
    content: ["Lifting the pen allows travel through an empty part of the drawing. Lowering it resumes drawing on the next move. pensize sets stroke width and remains in effect until you change it."],
    examples: [{ title: "Leave a gap between two strokes", code: drawing(`pen.pensize(4)
pen.forward(35)
pen.penup()
pen.forward(20)
pen.pendown()
pen.forward(35)`), result: "Two thick horizontal dashes have a 20-unit gap between them." }],
    quizzes: [{ question: "How far from the starting point is the turtle after the three moves?", options: ["90 units", "70 units", "35 units"], answer: 0, explanation: "The 20-unit pen-up move still changes the turtle's position." }],
  },
  {
    title: "Turtle Position",
    summary: "Place vertices on a coordinate plane using absolute positions.",
    content: ["The default coordinate system has its origin in the center, with positive x to the right and positive y upward. goto(x, y) reaches a location regardless of the turtle's heading. With the pen down, it joins the old and new points."],
    examples: [{ title: "Connect three coordinates", code: drawing(`pen.penup()
pen.goto(-50, -20)
pen.pendown()
pen.goto(0, 40)
pen.goto(50, -20)
print(pen.position())`), result: "A peaked line spans the center. The final coordinate is (50, -20)." }],
    quizzes: [{ question: "Which coordinate lies above and to the left of the origin?", options: ["(20, -20)", "(-20, 20)", "(20, 20)"], answer: 1, explanation: "A negative x moves left and a positive y moves up." }],
  },
  {
    title: "Turtle Colors",
    summary: "Set separate colors for the drawing surface and its strokes.",
    content: ["The screen owns the background color. Each turtle owns its pen color, so successive segments can have different colors on the same background. Color names and hexadecimal strings both work."],
    examples: [{ title: "Draw a two-color trail", code: drawing(`screen.bgcolor("#182033")
pen.pensize(6)
for shade in ["gold", "turquoise"]:
    pen.pencolor(shade)
    pen.forward(55)`), result: "A gold segment meets a turquoise segment on a dark background." }],
    quizzes: [{ question: "Which call changes the color of the next line?", options: ["screen.bgcolor('gold')", "pen.speed(2)", "pen.pencolor('gold')"], answer: 2, explanation: "pencolor changes the ink used by this turtle on subsequent strokes." }],
  },
  {
    title: "Turtle Shapes",
    summary: "Stamp copies of a cursor shape at chosen positions.",
    content: ["shape chooses the cursor's appearance. stamp leaves a copy of that shape on the canvas at the current position and heading. You can move the turtle away after stamping, including with the pen raised."],
    examples: [{ title: "Mark three stops", code: drawing(`pen.shape("circle")
pen.penup()
for x in [-60, 0, 60]:
    pen.goto(x, 0)
    pen.stamp()
pen.hideturtle()`), result: "Three stationary circles remain after the moving cursor disappears." }],
    quizzes: [{ question: "Why are there no connecting lines between the circles?", options: ["The pen is raised during travel", "stamp clears previous lines", "A circle cannot draw"], answer: 0, explanation: "penup disables strokes while goto moves the turtle. Stamping still works." }],
  },
  {
    title: "Turtle Fill",
    summary: "Fill an enclosed path with a color of its own.",
    content: ["Set an outline and fill color before tracing the boundary. begin_fill starts recording the path. Returning to the first vertex makes the intended region clear, and end_fill completes the colored area."],
    examples: [{ title: "Fill a square tile", code: drawing(`pen.color("navy", "skyblue")
pen.begin_fill()
for side in range(4):
    pen.forward(70)
    pen.left(90)
pen.end_fill()`), result: "A sky-blue square has a navy outline." }],
    quizzes: [{ question: "When does the square's solid interior appear?", options: ["At begin_fill()", "At end_fill()", "On the first left turn"], answer: 1, explanation: "end_fill finishes the path and applies the fill color to its region." }],
  },
  {
    title: "Turtle Text",
    summary: "Anchor a label at a coordinate on the drawing.",
    content: ["write uses the turtle's current position as a text anchor. The align option controls how the text sits horizontally around that anchor. Setting a font tuple selects the family, size, and style."],
    examples: [{ title: "Label a point", code: drawing(`pen.dot(8)
pen.penup()
pen.goto(0, 12)
pen.write("Origin", align="center", font=("Arial", 14, "bold"))
pen.hideturtle()`), result: "The word Origin is centered above a dot at (0, 0)." }],
    quizzes: [{ question: "What does align='center' center the label on?", options: ["The nearest dot", "The window header", "The turtle's x coordinate"], answer: 2, explanation: "The turtle's position supplies the text anchor, even when the window is resized." }],
  },
  {
    title: "Turtle Events",
    summary: "Turn screen clicks into points on a drawing.",
    content: ["An event handler runs when an input event occurs. Register a function with screen.onclick and accept the click's x and y coordinates. The main loop waits for input and calls that function for each click."],
    examples: [{ title: "Stamp a dot wherever you click", code: drawing(`pen.penup()
pen.hideturtle()

def mark(x, y):
    pen.goto(x, y)
    pen.dot(12, "teal")

screen.onclick(mark)`), result: "Each click inside the drawing area adds a teal dot at that location." }],
    quizzes: [{ question: "Where do the arguments to mark come from?", options: ["The screen's click event", "The turtle's starting position", "The window's size"], answer: 0, explanation: "The event system passes the click coordinates when it invokes the registered function." }],
  },
  {
    title: "Turtle Animation",
    summary: "Draw one frame at a time using the window's timer.",
    content: ["With tracer(0), you decide when a frame appears by calling update. A short timer callback can move a shape, reveal the frame, and schedule the next callback. Returning between frames gives the window time to handle other events."],
    examples: [{ title: "Slide a square across the canvas", code: drawing(`screen.tracer(0)
pen.shape("square")
pen.penup()
pen.goto(-100, 0)

def frame():
    pen.forward(4)
    screen.update()
    if pen.xcor() < 100:
        screen.ontimer(frame, 25)

frame()`), result: "The square moves in four-unit steps and stops at x = 100." }],
    quizzes: [{ question: "What makes the animation stop?", options: ["update closes the window", "The condition stops scheduling frames", "forward cancels the timer"], answer: 1, explanation: "Each timer fires once. At x = 100 the callback returns without scheduling a successor." }],
  },
  {
    title: "Turtle Projects",
    summary: "Combine positioning, headings, and a loop to draw a clock face.",
    content: ["A clock divides a turn into twelve equal angles. For each mark, begin at the center with the pen up, aim toward the desired hour, and draw only the last part of the radius. Reusing this sequence keeps all twelve marks aligned."],
    examples: [{ title: "Draw twelve clock ticks", code: drawing(`pen.speed(0)
for hour in range(12):
    pen.penup()
    pen.goto(0, 0)
    pen.setheading(90 - 30 * hour)
    pen.forward(70)
    pen.pendown()
    pen.forward(12 if hour % 3 == 0 else 6)
pen.hideturtle()`), result: "Twelve marks form a ring. The marks at twelve, three, six, and nine o'clock are longer." }],
    quizzes: [{ question: "Why does the heading decrease by 30 degrees per mark?", options: ["Each tick is 30 units long", "The turtle rotates randomly", "Twelve clockwise intervals divide a full turn"], answer: 2, explanation: "360 divided by 12 is 30, and decreasing standard headings rotates clockwise." }],
  },
]);
