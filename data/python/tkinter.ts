import { pythonChapter } from "./chapter";

function windowExample(body: string) {
  return `import tkinter as tk
from tkinter import ttk

root = tk.Tk()
${body}
root.mainloop()`;
}

export const tkinter = pythonChapter("Python Tkinter", "Intermediate", [
  {
    title: "Tkinter Intro",
    summary: "Open a desktop window and let Tk manage its events.",
    content: ["Run python -m tkinter from a terminal on a computer with a graphical display. A test window confirms that this Python installation includes Tk support. Save the example in a file such as welcome.py and run it with Python.", "Tk creates the root window. Widgets belong to a parent, and a geometry manager places them inside that parent. mainloop handles painting and input until you close the window."],
    examples: [{ title: "Open a welcome window", code: windowExample(`root.title("Field notebook")
ttk.Label(root, text="Ready to take notes").pack(padx=25, pady=15)`), result: "A window titled Field notebook displays a short message with space around it." }],
    quizzes: [{ question: "Which step gives the label a place in its parent?", options: ["Setting the window title", "Calling pack on the label", "Importing ttk"], answer: 1, explanation: "pack is a geometry manager that allocates and positions the label." }],
  },
  {
    title: "Tkinter Label",
    summary: "Display text that follows a changing application value.",
    content: ["A label can show a fixed text string or track a Tk variable. Binding textvariable to a StringVar lets any callback that holds the variable update the label by calling set."],
    examples: [{ title: "Update a status message", code: windowExample(`status = tk.StringVar(value="Waiting")
ttk.Label(root, textvariable=status).pack()
ttk.Button(root, text="Finish", command=lambda: status.set("Done")).pack()`), result: "Clicking Finish changes the label from Waiting to Done." }],
    quizzes: [{ question: "Which action changes the existing label?", options: ["status.set('Done')", "Creating an unrelated string", "Calling root.title('Done')"], answer: 0, explanation: "The label watches status because it received that variable as its textvariable." }],
  },
  {
    title: "Tkinter Button",
    summary: "Run a Python callback when someone presses a button.",
    content: ["The command option takes a callable with no required arguments. Passing the function by name allows Tk to call it later. Use a Tk variable when several widgets need the same changing value."],
    examples: [{ title: "Count votes with a button", code: windowExample(`votes = tk.IntVar(value=0)

def vote():
    votes.set(votes.get() + 1)

ttk.Label(root, textvariable=votes).pack()
ttk.Button(root, text="Vote", command=vote).pack()`), result: "The count starts at zero and increases once per press." }],
    quizzes: [{ question: "What would command=vote() do during construction?", options: ["Pass the vote function to Tk", "Pass a mouse event to vote", "Run vote immediately and pass its return value"], answer: 2, explanation: "Parentheses call the function while Python evaluates the button arguments." }],
  },
  {
    title: "Tkinter Entry",
    summary: "Read a single line of user input when a form is submitted.",
    content: ["An Entry holds editable text. Calling get inside a callback reads its current contents. strip removes surrounding whitespace, which makes an input containing only spaces count as empty."],
    examples: [{ title: "Greet a visitor", code: windowExample(`name = ttk.Entry(root)
name.pack()
reply = tk.StringVar()

def greet():
    visitor = name.get().strip()
    reply.set(f"Hello, {visitor}!" if visitor else "Enter a name")

ttk.Button(root, text="Greet", command=greet).pack()
ttk.Label(root, textvariable=reply).pack()`), result: "Typing Ada and pressing Greet displays Hello, Ada! An empty entry displays a prompt." }],
    quizzes: [{ question: "Why read name.get() inside greet?", options: ["Entry widgets store integers", "It captures the text at the time of the press", "It closes the form"], answer: 1, explanation: "The user edits the entry after the interface has been constructed." }],
  },
  {
    title: "Tkinter Layout",
    summary: "Align form controls in rows and columns that resize.",
    content: ["grid places each widget in a numbered row and column of its parent. A column's weight determines how it receives extra space. sticky='ew' lets a widget fill that space from east to west."],
    examples: [{ title: "Build a resizable form row", code: windowExample(`root.columnconfigure(1, weight=1)
ttk.Label(root, text="City").grid(row=0, column=0, padx=5)
ttk.Entry(root).grid(row=0, column=1, sticky="ew", padx=5)
ttk.Button(root, text="Close", command=root.destroy).grid(row=1, column=1)`), result: "The City label stays at the left edge while the entry expands when the window is widened." }],
    quizzes: [{ question: "Which setting makes the second column receive spare width?", options: ["row=0", "padx=5", "columnconfigure(1, weight=1)"], answer: 2, explanation: "A positive column weight assigns that column a share of extra horizontal space." }],
  },
  {
    title: "Tkinter Events",
    summary: "Bind a keyboard event to a widget-specific handler.",
    content: ["bind connects an event pattern to a callback that receives an event object. Its widget attribute identifies the control that received the event. An Entry with keyboard focus can handle Return as a form submission."],
    examples: [{ title: "Submit a note with Enter", code: windowExample(`note = ttk.Entry(root)
note.pack()
status = ttk.Label(root, text="Type a note and press Enter")
status.pack()

def submit(event):
    status.configure(text=event.widget.get())

note.bind("<Return>", submit)
note.focus_set()`), result: "With the cursor in the entry, pressing Enter copies its text to the label." }],
    quizzes: [{ question: "What is event.widget in submit?", options: ["The entry that received Return", "The text the user typed", "The label being updated"], answer: 0, explanation: "Tk supplies the widget on which the keyboard event occurred." }],
  },
  {
    title: "Tkinter Check and Radio",
    summary: "Represent independent toggles and mutually exclusive choices.",
    content: ["Use a BooleanVar for an on/off setting such as notifications. Give related radio buttons one shared variable and a different value each. Selecting a radio button writes its value into that variable."],
    examples: [{ title: "Choose delivery preferences", code: windowExample(`alerts = tk.BooleanVar(value=True)
pace = tk.StringVar(value="Daily")
ttk.Checkbutton(root, text="Send alerts", variable=alerts).pack()
for value in ["Daily", "Weekly"]:
    ttk.Radiobutton(root, text=value, variable=pace, value=value).pack()

def show():
    print(alerts.get(), pace.get())

ttk.Button(root, text="Show choices", command=show).pack()`), result: "With alerts checked and Weekly selected, Show choices prints True Weekly in the terminal." }],
    quizzes: [{ question: "What makes Daily and Weekly a single-choice group?", options: ["Calling pack twice", "Sharing the same pace variable", "Giving both buttons identical text"], answer: 1, explanation: "Their shared variable can hold only one of the two distinct values at a time." }],
  },
  {
    title: "Tkinter Messagebox",
    summary: "Use a dialog's return value to decide what happens next.",
    content: ["askyesno opens a modal question and returns a Boolean when the user answers. Set parent to the owning window so Tk associates the dialog with the correct application window."],
    examples: [{ title: "Confirm before clearing a draft", code: windowExample(`from tkinter import messagebox

draft = ttk.Entry(root)
draft.insert(0, "First draft")
draft.pack()

def clear():
    if messagebox.askyesno("Clear draft", "Clear this text?", parent=root):
        draft.delete(0, tk.END)

ttk.Button(root, text="Clear", command=clear).pack()`), result: "Yes clears the entry. No closes the dialog and keeps the draft." }],
    quizzes: [{ question: "What value does askyesno return after No?", options: ["The string 'No'", "None", "False"], answer: 2, explanation: "askyesno converts the user's response into a Python Boolean." }],
  },
  {
    title: "Tkinter Listbox",
    summary: "Build a selectable list and retrieve a chosen item.",
    content: ["A Listbox stores entries at zero-based positions. curselection returns a tuple of selected indices, which may be empty. Check that a selection exists before using an index to retrieve an entry."],
    examples: [{ title: "Inspect a selected station", code: windowExample(`stations = tk.Listbox(root, height=3)
stations.insert(tk.END, "Park", "Museum", "Harbor")
stations.pack()
choice = tk.StringVar()

def select(event):
    indices = stations.curselection()
    if indices:
        choice.set(stations.get(indices[0]))

stations.bind("<<ListboxSelect>>", select)
ttk.Label(root, textvariable=choice).pack()`), result: "Selecting Museum displays Museum in the label below the list." }],
    quizzes: [{ question: "Which index points to Harbor?", options: ["2", "3", "1"], answer: 0, explanation: "The three list positions are numbered 0, 1, and 2." }],
  },
  {
    title: "Tkinter Text",
    summary: "Read a multiline editor using line and column positions.",
    content: ["Text positions use line.column notation. Lines begin at 1 and columns at 0. Tk keeps a final newline, so reading from 1.0 to end-1c gives the content before that automatic character."],
    examples: [{ title: "Count words in a note", code: windowExample(`editor = tk.Text(root, width=32, height=5)
editor.pack()
editor.insert("1.0", "red blue green")
total = tk.StringVar()

def count():
    words = editor.get("1.0", "end-1c").split()
    total.set(f"{len(words)} words")

ttk.Button(root, text="Count", command=count).pack()
ttk.Label(root, textvariable=total).pack()`), result: "Count displays 3 words for the initial text. Edits are included on the next count." }],
    quizzes: [{ question: "Which position identifies the first character?", options: ["0.0", "1.0", "1.1"], answer: 1, explanation: "Tk numbers the first line 1 and its first character column 0." }],
  },
  {
    title: "Tkinter Canvas",
    summary: "Draw a shape and manipulate it using its canvas item ID.",
    content: ["Canvas uses coordinates measured from its top-left corner, with y increasing downward. create_oval takes two corners of a bounding rectangle and returns an item ID. Pass the ID to move to shift just that item."],
    examples: [{ title: "Move a marker down", code: windowExample(`canvas = tk.Canvas(root, width=160, height=160, bg="white")
canvas.pack()
marker = canvas.create_oval(60, 10, 90, 40, fill="navy")
ttk.Button(root, text="Down", command=lambda: canvas.move(marker, 0, 10)).pack()`), result: "Each press shifts the circle ten pixels down. Its size stays the same." }],
    quizzes: [{ question: "Which delta moves the circle left by five pixels?", options: ["(0, -5)", "(5, 0)", "(-5, 0)"], answer: 2, explanation: "Reducing x moves an item left, while a zero y delta preserves its height." }],
  },
  {
    title: "Tkinter ttk",
    summary: "Use a themed combobox to offer a fixed list of options.",
    content: ["ttk provides widgets styled by Tk's active theme. A Combobox combines a text field with a menu of values. Its readonly state still allows selection from the menu, which is useful for settings with a fixed vocabulary."],
    examples: [{ title: "Pick a page size", code: windowExample(`size = tk.StringVar(value="A4")
chooser = ttk.Combobox(root, values=["A4", "A5", "Letter"],
                      textvariable=size, state="readonly")
chooser.pack()
ttk.Label(root, textvariable=size).pack()`), result: "Choosing Letter updates the label to Letter. The menu accepts only its listed options." }],
    quizzes: [{ question: "Which state permits choosing an item while preventing free typing?", options: ["readonly", "disabled", "normal"], answer: 0, explanation: "A readonly combobox lets the user change the selection through its dropdown." }],
  },
  {
    title: "Tkinter Menu",
    summary: "Group commands inside a menu attached to the root window.",
    content: ["Create a menubar, then create a child menu containing commands. add_cascade attaches the child under a named menu heading. Configure the root's menu option to display the completed menubar."],
    examples: [{ title: "Add a File menu", code: windowExample(`bar = tk.Menu(root)
file_menu = tk.Menu(bar, tearoff=False)
file_menu.add_command(label="Close", command=root.destroy)
bar.add_cascade(label="File", menu=file_menu)
root.configure(menu=bar)
ttk.Label(root, text="Choose File, then Close").pack(padx=25, pady=15)`), result: "Opening File and selecting Close exits the window. The operating system controls where the menu appears." }],
    quizzes: [{ question: "Which method places the child menu under File?", options: ["root.destroy", "bar.add_cascade", "file_menu.pack"], answer: 1, explanation: "A cascade entry displays the submenu supplied in its menu option." }],
  },
  {
    title: "Tkinter Timers",
    summary: "Schedule short callbacks without blocking the interface.",
    content: ["after schedules a function for a future pass through the event loop, using milliseconds as the minimum delay. Each scheduled call fires once. A countdown can arrange another call while there is time left."],
    examples: [{ title: "Display a three-second countdown", code: windowExample(`status = ttk.Label(root)
status.pack(padx=25, pady=15)

def tick(seconds):
    status.configure(text=str(seconds) if seconds else "Go!")
    if seconds:
        root.after(1000, tick, seconds - 1)

tick(3)`), result: "The label displays 3, 2, 1, then Go! and the window stays responsive." }],
    quizzes: [{ question: "Why pass tick and seconds - 1 separately to after?", options: ["To start a new process", "To pause the entire event loop", "To let Tk call tick with that argument later"], answer: 2, explanation: "after queues the callable and its arguments for later execution." }],
  },
  {
    title: "Tkinter Project",
    summary: "Build a unit converter with input validation and feedback.",
    content: ["A converter needs an entry, an action, and a place to show the result. Parse the entry when the user submits it. Catch a numeric conversion error in the callback so the user can correct the value and try again."],
    examples: [{ title: "Convert kilometers to meters", code: windowExample(`ttk.Label(root, text="Kilometers").pack()
distance = ttk.Entry(root)
distance.pack()
result = tk.StringVar()

def convert():
    try:
        meters = float(distance.get()) * 1000
    except ValueError:
        result.set("Enter a number")
        return
    result.set(f"{meters:g} meters")

ttk.Button(root, text="Convert", command=convert).pack()
ttk.Label(root, textvariable=result).pack()`), result: "Entering 1.25 shows 1250 meters. Entering hello shows Enter a number." }],
    quizzes: [{ question: "Why return from the except block?", options: ["There is no valid meters value to format", "It shuts down Tk", "It clears the entry automatically"], answer: 0, explanation: "Returning ends this submission after the error message is set and leaves the form ready to retry." }],
  },
  {
    title: "Tkinter To-Do List",
    summary: "Add, select, and remove tasks from a small desktop list.",
    content: ["Use the entry for a pending task and the listbox for submitted tasks. Normalize the text before adding it, then clear the entry for the next task. This version holds tasks in the widget for the lifetime of the window."],
    examples: [{ title: "Make an in-memory task list", code: windowExample(`entry = ttk.Entry(root)
entry.pack()
tasks = tk.Listbox(root)
tasks.pack()

def add():
    text = entry.get().strip()
    if text:
        tasks.insert(tk.END, text)
        entry.delete(0, tk.END)

def finish():
    selected = tasks.curselection()
    if selected:
        tasks.delete(selected[0])

ttk.Button(root, text="Add task", command=add).pack()
ttk.Button(root, text="Complete selected", command=finish).pack()`), result: "Add two task names, select the first, and press Complete selected. Only the second task remains." }],
    quizzes: [{ question: "What happens if Complete selected is pressed with no selection?", options: ["All tasks are removed", "The guard skips deletion", "The last task is removed"], answer: 1, explanation: "An empty selection tuple is false, so the delete call is skipped." }],
  },
]);
