import { chapter } from "./resource-chapter";

type Check = [string, string, string, number, string];

function preserveTopic(id: string, title: string, summary: string, content: string[], examples: [string, string, string], checks: [Check, Check, Check]) {
  return {
    id, title, summary, content, level: "Intermediate" as const,
    examples: examples.map((code, index) => ({ title: `Example ${index + 1}`, code, result: "Compare the rendered tree before and after the update to see which component identity stays in place." })),
    quizzes: checks.map(([question, correct, alternate, answer, explanation]) => ({
      question,
      options: answer === 0 ? [correct, alternate, "Props alone always erase component state"] : [alternate, correct, "Props alone always erase component state"],
      answer,
      explanation,
    })),
  };
}

export const preservingStateLessons = chapter("Learn React · Managing State · Preserving and Resetting State", [
  preserveTopic("react-preserving-and-resetting-state", "Preserving and Resetting State", "Understand how a component's place and identity in the render tree affect its state lifetime.", [
    "React keeps state outside a component function and associates it with a rendered component in the UI tree. When the next render contains the same component identity in the matching place, its state is generally preserved.",
    "When a component is removed, replaced by a different type, or given a new key, React discards that instance's state and initializes a new one. These rules can preserve useful input while also letting an interface deliberately start fresh.",
  ], [
    "function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(value => value + 1)}>{count}</button>;\n}",
    "<Counter />\n<Counter /> // two positions, two independent states",
    "<Chat key={contact.id} contact={contact} /> // new identity when contact changes",
  ], [
    ["What helps React match state to a component?", "Its identity and position in the rendered tree", "The text inside its button", 0, "React associates state with the component at a particular place in the UI tree."],
    ["What happens when a stateful component is removed?", "Its state is discarded", "Its state is automatically moved to its parent", 0, "Removing a component removes that instance and its local state."],
    ["What can a changed key signal?", "Render a distinct component instance", "Preserve all local state regardless of identity", 0, "A different key gives React a different identity for that child."],
  ]),
  preserveTopic("react-state-position-render-tree", "State Is Tied to a Position in the Render Tree", "See why identical component tags at separate positions have independent state.", [
    "A component function does not own one global state bucket. Each rendered instance has its own state associated with its place under its parent in the render tree.",
    "Rendering the same component twice creates two instances. Their state values start separately and update independently, even though both instances were described with the same JSX component type.",
  ], [
    "<main><Counter /><Counter /></main>",
    "function App() { return <><Toggle /><Toggle /></>; }",
    "{showExtra && <Counter />} // this position exists only while showExtra is true",
  ], [
    ["What distinguishes two instances of the same component type?", "Their positions in the rendered tree", "Their shared function source code", 0, "Each rendered position can hold its own state."],
    ["If two Counter components render side by side, how is their state stored?", "Separately for each instance", "As one automatically shared counter", 0, "Each component instance has isolated state."],
    ["What happens to state when a conditional child is removed?", "That instance's state is destroyed", "It is stored in the condition for later", 0, "A component that leaves the tree no longer retains its local state."],
  ]),
  preserveTopic("react-same-component-same-position", "Same Component at the Same Position Preserves State", "Recognize when props and conditional branches still describe one matching instance.", [
    "If the component type remains the same at the same position, React normally preserves its state while updating its props. A changed prop can alter appearance or behavior without replacing the component instance.",
    "Different JSX branches can still produce the same tree shape. React matches the returned tree, not the location of the conditional in the source code, so a counter may keep its state as a prop changes.",
  ], [
    "{fancy ? <Counter theme='bright' /> : <Counter theme='plain' />}",
    "if (compact) return <div><Panel mode='compact' /></div>;\nreturn <div><Panel mode='wide' /></div>;",
    "<ProfileCard user={selectedUser} /> // a changed user prop alone does not reset local state",
  ], [
    ["What usually happens when the same component stays in the same tree position but receives new props?", "Its state is preserved", "Its local state is always cleared", 0, "Matching component identity at the same position preserves state by default."],
    ["Does React compare the source-code location of a JSX tag to match state?", "No, it matches the returned tree structure", "Yes, source-code line numbers define state", 0, "The rendered structure, not source placement, determines matching."],
    ["Does changing a display prop automatically reset local state?", "No", "Yes, every prop change resets state", 0, "Props can change while the same component instance keeps its state."],
  ]),
  preserveTopic("react-different-components-same-position", "Different Components at the Same Position Reset State", "Learn how changing a child component type replaces its state subtree.", [
    "If one render places a Counter at a position and the next render puts a paragraph there, React removes the Counter instance and mounts the paragraph. Returning to Counter later creates a fresh instance.",
    "A changed ancestor type can also replace everything below it. Keep the surrounding tree structure stable when state should survive; avoid defining component functions inside another component because a new function identity can cause replacement on each render.",
  ], [
    "{paused ? <p>Paused</p> : <Counter />}",
    "{layout ? <section><Editor /></section> : <div><Editor /></div>} // wrapper type changes",
    "function Page() { return <Editor />; }\nfunction Editor() { return <textarea />; } // define at module scope",
  ], [
    ["What happens when a different component type occupies the same position?", "The previous component is removed and its state resets", "The previous component state is always reused", 0, "A type change replaces that component instance and its subtree."],
    ["Can changing a wrapper type reset descendant state?", "Yes, the replaced subtree is recreated", "No, wrappers never affect descendants", 0, "Removing an ancestor also removes the components beneath it."],
    ["Where should reusable component functions usually be declared?", "At the top level of a module", "Inside the rendering component each time", 0, "A nested definition creates a new component function identity on each render."],
  ]),
  preserveTopic("react-reset-state-same-position", "Resetting State at the Same Position", "Use a deliberate identity change when a new entity needs fresh local state.", [
    "Sometimes a component remains at the same position but conceptually represents a different entity, such as a new player, contact, or document. Preserving a draft or score across that switch may be confusing.",
    "You can make React treat the next render as a different instance by rendering at a different position or by supplying a different stable key. The old instance is removed and its local state starts over when the new one appears.",
  ], [
    "<ScoreCard key={player.id} player={player} />",
    "{isPrimary && <Counter />}\n{!isPrimary && <Counter />} // alternate positions mount separately",
    "<Editor key={document.id} document={document} />",
  ], [
    ["When is an intentional state reset useful?", "When a component now represents a different entity", "Whenever a component receives any harmless prop", 0, "A new entity may need a fresh local draft or score."],
    ["What are two ways to make instances distinct?", "Render at different positions or provide different keys", "Change CSS and keep the same identity", 0, "Tree position and key contribute to how React distinguishes instances."],
    ["What happens to state from the old identity?", "It is discarded", "It is merged into the new instance", 0, "A new identity causes React to create fresh state for that component."],
  ]),
  preserveTopic("react-reset-state-different-positions", "Option 1: Rendering a Component in Different Positions", "Use separate conditional positions for a small number of distinct instances.", [
    "For a small set of alternatives, render each entity in its own conditional position. When the current entity disappears, its component unmounts; when another appears, it gets a fresh state instance.",
    "This can be clear for a simple two-way choice. If there are many records or the alternatives are dynamic, keys are usually a more scalable way to represent identity.",
  ], [
    "{player === 'A' && <Counter label='A' />}\n{player === 'B' && <Counter label='B' />}",
    "{showEditor && <Editor document={document} />} // unmounts when hidden",
    "{activeView === 'list' ? <ListView /> : <GridView />} // a type change replaces the view",
  ], [
    ["What happens when a condition removes a component from its position?", "That instance unmounts and loses its local state", "It remains mounted invisibly by default", 0, "A component removed from the tree no longer keeps its state."],
    ["When can separate conditional positions be reasonable?", "For a small number of simple alternatives", "For an unbounded list of entities", 0, "A few explicit branches can be clear; dynamic collections benefit from keys."],
    ["What is one cost of switching between separate positions?", "Each newly mounted instance starts with fresh state", "The component type can never render again", 0, "Unmounting discards local state, so returning creates a new instance."],
  ]),
  preserveTopic("react-reset-state-with-key", "Option 2: Resetting State with a Key", "Give each entity a stable key so React can distinguish instances at one position.", [
    "A key is part of a child's identity within its parent, not just a list-rendering hint. If the key changes, React removes the old instance and creates a new one, resetting state for that subtree.",
    "Use stable keys that represent the entity, such as a record ID. Keys only need to be unique among siblings; changing a key on every render causes unwanted resets.",
  ], [
    "<Counter key={player.id} player={player} />",
    "<Form key={account.id} account={account} />",
    "items.map(item => <Row key={item.id} item={item} />)",
  ], [
    ["What does a changed key tell React?", "This child has a new identity", "The existing child must keep all local state", 0, "Keys let React distinguish one child instance from another."],
    ["Where must sibling keys be unique?", "Among children of the same parent", "Across the entire website", 0, "Keys identify items within their sibling set."],
    ["What kind of key should represent a record?", "A stable identifier for that record", "A random value regenerated on every render", 0, "Stable identity avoids accidental remounts on ordinary renders."],
  ]),
  preserveTopic("react-reset-form-with-key", "Resetting a Form with a Key", "Clear a form's local draft when switching to a different record or recipient.", [
    "A chat or editor often keeps its input value in local state. If the component stays at the same position while its recipient changes, React may preserve the old text even though the new entity is different.",
    "Pass the selected entity's stable ID as the component key. Selecting a different ID remounts the form subtree, clearing its local fields and other state. Use this when a reset is the intended behavior, not as a replacement for normal controlled input updates.",
  ], [
    "<MessageEditor key={contact.id} contact={contact} />",
    "<ProfileForm key={profile.id} profile={profile} />",
    "<DocumentEditor key={document.versionId} document={document} />",
  ], [
    ["Why might a chat input keep old text after choosing another contact?", "The chat component stayed the same at the same position", "React always clears text fields on prop changes", 0, "Matching component identity preserves local state by default."],
    ["What key can reset the chat for a new recipient?", "The recipient's stable ID", "A fixed string used for every recipient", 0, "A different key creates a new chat instance for a different recipient."],
    ["What else resets when a keyed form subtree is recreated?", "Its other local state below that keyed component", "Only the visible input text", 0, "Changing identity resets the component and its descendant state."],
  ]),
  preserveTopic("react-preserving-state-recap", "Recap", "Review how tree position, component type, and keys determine state lifetime.", [
    "React preserves state when the same component identity stays at the matching place in the render tree. Removing the component or replacing it with another type destroys that instance's state.",
    "Use keys to identify entities when a same-position component should reset for a new record. Keep component definitions stable and choose keys that change only when the identity truly changes.",
  ], [
    "// Same type and position: state can be preserved.",
    "// Different type or removed child: old state is discarded.",
    "<Editor key={record.id} record={record} /> // reset when record identity changes",
  ], [
    ["What usually preserves state?", "The same component type at the same tree position", "Any component placed in the same file", 0, "React matches the rendered component identity and position."],
    ["What can cause state to reset?", "Removal, a different component type, or a changed key", "A normal prop value change alone", 0, "These changes create a new identity or remove the old instance."],
    ["What should a key represent in a form reset pattern?", "The entity whose local form state belongs to", "A random token generated each render", 0, "The key should change when the conceptual entity changes."],
  ]),
  preserveTopic("react-preserving-state-challenges", "Challenges", "Debug disappearing inputs and choose when to preserve or reset a subtree.", [
    "Challenge 1: Typing in a form and toggling a hint unexpectedly clears the text. Check whether the Form component is being defined inside its parent and recreated on each render; move its definition to module scope.",
    "Challenge 2: A score should restart when the player changes. Add a player ID key. Challenge 3: A draft should survive a style toggle. Keep the same component type and position, and change only its styling prop.",
  ], [
    "function Page() { return <><Form /><HintToggle /></>; }\nfunction Form() { /* stable component definition */ }",
    "<ScoreCounter key={player.id} player={player} />",
    "<Counter fancy={isFancy} /> // prop changes; same instance can preserve state",
  ], [
    ["Why might a nested component definition make its input reset?", "Each parent render creates a new component type identity", "Nested components cannot contain inputs", 0, "A new function identity can cause React to replace the component."],
    ["How can a score reset when the player changes?", "Use the player's stable ID as the component key", "Keep one fixed key for every player", 0, "A changed key creates a new counter instance."],
    ["How can a style toggle preserve the same counter state?", "Keep the component at the same position and change a prop", "Change its key on every toggle", 0, "A prop change alone can update styling while preserving the instance."],
  ]),
]);
