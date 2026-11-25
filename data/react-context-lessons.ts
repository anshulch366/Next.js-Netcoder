import { chapter } from "./resource-chapter";

type Check = [string, string, string, number, string];

function contextTopic(id: string, title: string, summary: string, content: string[], examples: [string, string, string], checks: [Check, Check, Check]) {
  return {
    id, title, summary, content, level: "Intermediate" as const,
    examples: examples.map((code, index) => ({ title: `Example ${index + 1}`, code, result: "Follow the provider value down the component tree and identify which component reads it." })),
    quizzes: checks.map(([question, correct, alternate, answer, explanation]) => ({
      question,
      options: answer === 0 ? [correct, alternate, "Context automatically stores data in a database"] : [alternate, correct, "Context automatically stores data in a database"],
      answer,
      explanation,
    })),
  };
}

export const contextLessons = chapter("Learn React · Managing State · Passing Data Deeply with Context", [
  contextTopic("react-passing-data-deeply-context", "Passing Data Deeply with Context", "Learn when context can share a value with distant descendants without forwarding it through every layer.", [
    "Props make parent-to-child data flow explicit. When a value must pass through many components that do not use it, repeatedly forwarding it can make component interfaces noisy.",
    "Context lets a component provide a value to descendants that need it. Use it for values shared across a meaningful part of the tree, while keeping ordinary local data as props or state where that is clearer.",
  ], [
    "<Page theme={theme}><Toolbar theme={theme} /></Page>",
    "const ThemeContext = createContext('light');",
    "<ThemeContext.Provider value={theme}><Toolbar /></ThemeContext.Provider>",
  ], [
    ["What problem can context help with?", "Forwarding the same value through many components that do not use it", "Passing one value to a direct child", 0, "Context can avoid repetitive prop forwarding for values needed deeper in a tree."],
    ["Does context replace every use of props?", "No, props remain useful for direct relationships", "Yes, props should never be used", 0, "Props are often clearest when a parent passes data directly to a child."],
    ["What does a context provider make available?", "A value to matching descendants in its subtree", "A value to every app on the internet", 0, "A provider supplies a value within its part of the React tree."],
  ]),
  contextTopic("react-problem-with-passing-props-deeply", "The Problem with Passing Props", "See how intermediate components can become cluttered when they only forward a value.", [
    "Suppose an account name is needed by a button several levels below a page. If each intermediate component accepts and forwards that name without using it, the prop must be threaded through every layer.",
    "This pattern is sometimes called prop drilling. It is not automatically wrong: explicit props can be easier to trace for a short path. Context becomes useful when many distant descendants need the same value and forwarding it obscures component responsibilities.",
  ], [
    "function Page({ user }) { return <Layout user={user} />; }",
    "function Layout({ user }) { return <Toolbar user={user} />; }",
    "function Toolbar({ user }) { return <Avatar user={user} />; }",
  ], [
    ["What makes prop drilling noisy?", "Intermediate components forward values they do not use", "Props can only contain numbers", 0, "Forwarding through many layers can add props to unrelated component interfaces."],
    ["Is passing props through a few layers always a problem?", "No, explicit props may still be clearest", "Yes, props should never pass through a parent", 0, "Context is an option, not a requirement for every prop chain."],
    ["What is a useful reason to consider context?", "Many distant descendants need a shared value", "One child needs one unique value", 0, "Context can help when a shared value is needed across a subtree."],
  ]),
  contextTopic("react-context-alternative-to-passing-props", "Context: An Alternative to Passing Props", "Understand how a provider and consumer connect values across a component subtree.", [
    "A context object identifies a kind of value, such as the current theme. A provider supplies the value, and descendants read the nearest matching provider above them.",
    "This lets components in between remain unaware of the value. Context does not create global state by itself; the value still comes from the provider and is scoped by the rendered tree.",
  ], [
    "const ThemeContext = createContext('light');",
    "<ThemeContext.Provider value='dark'><App /></ThemeContext.Provider>",
    "const theme = useContext(ThemeContext);",
  ], [
    ["How does a descendant get a context value?", "Read the nearest matching provider above it", "Search all components for a similarly named prop", 0, "Context lookup uses the closest matching provider in the tree."],
    ["Is context inherently global across separate React trees?", "No, provider values are scoped to their subtree", "Yes, every provider changes all React apps", 0, "Context follows the rendered tree beneath its provider."],
    ["What role does the context object play?", "It identifies the value that providers and consumers share", "It stores every user's account on a server", 0, "The context object connects the provider value to consumers."],
  ]),
  contextTopic("react-create-the-context", "Step 1: Create the Context", "Create a context object and choose a useful fallback value for consumers without a provider.", [
    "Call createContext outside component functions to create a context object. Its default value is used only when a consumer has no matching provider above it.",
    "Choose a sensible default that fits the context's type and use case. If a value must always come from a provider, a clear fallback or validation pattern can help reveal a missing provider during development.",
  ], [
    "import { createContext } from 'react';\nconst ThemeContext = createContext('light');",
    "const CurrentUserContext = createContext(null);",
    "const DensityContext = createContext('comfortable');",
  ], [
    ["Where should createContext usually be called?", "At the top level outside components", "Inside an event handler on every click", 0, "A context object should have a stable identity."],
    ["When is the default context value used?", "When no matching provider exists above the consumer", "Whenever any provider exists anywhere in the app", 0, "The default is the fallback for consumers outside a provider."],
    ["What does the context default do if a provider supplies a value?", "The provider value is used instead", "The default and provider values are automatically merged", 0, "A matching provider supplies the value for its descendants."],
  ]),
  contextTopic("react-use-the-context", "Step 2: Use the Context", "Read a context value in a descendant component with useContext.", [
    "Call useContext with the context object at the top level of a function component. React returns the value from the nearest matching provider above that component, or the context default if there is none.",
    "A component that calls useContext subscribes to that context value. When the provider supplies a different value, React updates consumers so they can render with the new value.",
  ], [
    "import { useContext } from 'react';\nfunction Heading() {\n  const theme = useContext(ThemeContext);\n  return <h1 className={theme}>Welcome</h1>;\n}",
    "function ProfileName() {\n  const user = useContext(CurrentUserContext);\n  return <span>{user?.name ?? 'Guest'}</span>;\n}",
    "function CompactButton() {\n  const density = useContext(DensityContext);\n  return <button data-density={density}>Save</button>;\n}",
  ], [
    ["Which Hook reads a context value?", "useContext", "useReducer", 0, "useContext reads a value from the closest matching provider."],
    ["Where should useContext be called?", "At the top level of a component or custom Hook", "Inside a conditional branch only", 0, "Hooks must follow the Rules of Hooks."],
    ["What happens when a provider value changes?", "Components reading that context can render with the new value", "Every component receives it as a new prop automatically", 0, "Context consumers update when their provided value changes."],
  ]),
  contextTopic("react-provide-the-context", "Step 3: Provide the Context", "Wrap the relevant subtree in a provider and pass the value descendants should read.", [
    "Place a provider above the components that need the value. Components below it can read the value without each intermediate component accepting and forwarding a prop.",
    "A provider only affects consumers beneath it. If providers are nested for the same context, a consumer reads the closest one. Keep the provider around the smallest useful subtree when possible.",
  ], [
    "<ThemeContext.Provider value={theme}>\n  <Toolbar />\n</ThemeContext.Provider>",
    "<CurrentUserContext.Provider value={user}>\n  <ProfilePage />\n</CurrentUserContext.Provider>",
    "<DensityContext.Provider value='compact'>\n  <SettingsPanel />\n</DensityContext.Provider>",
  ], [
    ["Where should a provider be placed?", "Above the descendants that need its value", "Inside each leaf after the consumer reads it", 0, "Consumers read providers above them in the tree."],
    ["What does a nested provider do for a consumer?", "The nearest matching provider supplies the value", "All provider values are combined automatically", 0, "Context lookup uses the closest provider above the consumer."],
    ["What subtree can read a provider's value?", "Its descendants", "Unrelated components elsewhere in the app", 0, "A provider scopes its value to the tree below it."],
  ]),
  contextTopic("react-context-same-component", "Using and Providing Context from the Same Component", "Separate a provider from the component that reads its value when the parent needs to consume it.", [
    "A component cannot read a provider that it returns later in its own JSX. During that component's render, useContext looks upward in the tree, so it sees only providers already above the component.",
    "If a component needs to choose a value and also have descendants read it, split the job: an outer component reads or calculates the value, then renders a provider around an inner child component that consumes it.",
  ], [
    "function Page() {\n  const theme = useContext(ThemeContext);\n  return <ThemeContext.Provider value={theme}><Toolbar /></ThemeContext.Provider>;\n}",
    "function ThemeProvider({ children, theme }) {\n  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;\n}",
    "function Page() { return <ThemeProvider theme='dark'><Toolbar /></ThemeProvider>; }",
  ], [
    ["Can a component read a provider it returns in its own JSX?", "No, it can only read providers above itself", "Yes, providers apply upward during the same render", 0, "A component's useContext lookup happens in its existing ancestor tree."],
    ["How can a component provide a value for a child to consume?", "Render a provider around a child component", "Call useContext after the return statement", 0, "The child is below the provider in the rendered tree."],
    ["What is one clear way to structure this?", "Use an outer provider component and an inner consumer", "Make the provider wrap its own parent", 0, "Separate components establish a clear provider-to-descendant relationship."],
  ]),
  contextTopic("react-context-intermediate-components", "Context Passes Through Intermediate Components", "Let components between provider and consumer stay unaware of the context value.", [
    "A provider's value can reach a consumer through any number of intermediate components. Those components do not need to receive the value as a prop or forward it to the next layer.",
    "Intermediate components still render the children they are given. Context only removes the need to thread that particular value through them; it does not remove the component tree or ordinary props for other data.",
  ], [
    "<ThemeContext.Provider value='dark'><Page><Toolbar><Button /></Toolbar></Page></ThemeContext.Provider>",
    "function Page({ children }) { return <main>{children}</main>; }",
    "function Button() { const theme = useContext(ThemeContext); return <button className={theme}>OK</button>; }",
  ], [
    ["Must an intermediate component forward context as a prop?", "No, a descendant can read it directly", "Yes, every component must pass it along", 0, "Context lookup can pass through components that do not consume the value."],
    ["What still defines which components can read the value?", "Their position below the provider in the tree", "Their filenames", 0, "The provider value is available to consumers in its subtree."],
    ["Does context remove the need for all props?", "No, props are still useful for other data", "Yes, context replaces every component input", 0, "Context solves a particular sharing need; props remain useful."],
  ]),
  contextTopic("react-before-you-use-context", "Before You Use Context", "Check whether direct props or component composition would make the data flow simpler.", [
    "Before adding context, ask whether the value can be passed directly to the component that needs it. A few explicit props can be easier to understand than introducing a shared context.",
    "You can also pass JSX as children or another prop. A wrapper can then arrange layout without knowing the details of the content, keeping the component that owns the data close to the component that renders it.",
  ], [
    "function Page({ user }) { return <Avatar user={user} />; } // direct prop",
    "function Layout({ children }) { return <main>{children}</main>; }",
    "<Layout><Profile user={user} /></Layout> // composition keeps ownership explicit",
  ], [
    ["What should you consider before adding context?", "Whether a direct prop or composition is simpler", "Whether every value can be made global", 0, "Context is useful when it simplifies the data flow, not as a default for all values."],
    ["What can children composition help with?", "Let a wrapper arrange content without knowing its details", "Make all descendants share one mutable object", 0, "Composition can avoid threading data through components that only arrange layout."],
    ["When are props often a good choice?", "When a value has a clear direct parent-child path", "Whenever many distant components need the same value", 0, "Direct props are explicit and often easiest for short relationships."],
  ]),
  contextTopic("react-use-cases-for-context", "Use Cases for Context", "Share values such as theme or signed-in user data with the subtree that needs them.", [
    "Context can suit values used across many distant descendants, such as a visual theme, the current signed-in user, locale settings, or a navigation preference.",
    "Keep context focused and place providers near the relevant UI. Frequently changing values can cause many consumers to update, so split unrelated values and avoid putting every piece of application state into one context by default.",
  ], [
    "const ThemeContext = createContext('light');",
    "const LocaleContext = createContext('en');",
    "const SessionContext = createContext(null);",
  ], [
    ["Which is a common context use case?", "A theme shared by many distant interface parts", "A value used only once by one direct child", 0, "A shared theme can be useful across a subtree."],
    ["Where should a provider usually go?", "Around the smallest subtree that needs the value", "Around unrelated areas by default", 0, "A focused provider scope makes ownership and updates easier to follow."],
    ["Why might unrelated values use separate contexts?", "To keep their ownership and updates more focused", "React requires one context for each file", 0, "Separating concerns helps avoid coupling unrelated consumers."],
  ]),
  contextTopic("react-passing-data-deeply-context-recap", "Recap", "Review how context is created, provided, consumed, and chosen thoughtfully.", [
    "Create a context, place a provider above the consumers, and read its value with useContext. The closest matching provider supplies the value to descendants.",
    "Use context when it makes deep sharing clearer. Props and composition are often simpler for direct relationships, and context does not replace local state or all component props.",
  ], [
    "const ValueContext = createContext(defaultValue);",
    "<ValueContext.Provider value={value}><Child /></ValueContext.Provider>",
    "function Child() { const value = useContext(ValueContext); return <span>{value}</span>; }",
  ], [
    ["What is the basic context setup?", "Create, provide, then consume the context", "Consume a value before creating any context", 0, "A context object, provider, and consumer form the usual pattern."],
    ["Which provider value does a consumer use?", "The nearest matching provider above it", "The first provider declared in the project", 0, "Context selects the closest provider in the rendered tree."],
    ["What is a good reason to use context?", "It makes a shared value easier to provide to distant descendants", "It avoids writing any component props ever again", 0, "Context is useful for selected values shared through a subtree."],
  ]),
  contextTopic("react-passing-data-deeply-context-challenges", "Challenges", "Practice sharing theme and account values through a tree without unnecessary prop forwarding.", [
    "Challenge 1: A toolbar button needs a theme, but several layout components sit between the page and button. Create a theme context, provide the selected theme above the toolbar, and read it in the button.",
    "Challenge 2: A page owns the current user while a profile badge needs the user's name. Try direct props first, then decide whether several distant consumers make a user context clearer. Challenge 3: Fix a component that tries to read a provider it returns itself by splitting the provider and consumer into parent and child components.",
  ], [
    "const ThemeContext = createContext('light');\nfunction ThemedButton() { const theme = useContext(ThemeContext); return <button className={theme}>Open</button>; }",
    "<ThemeContext.Provider value={theme}><Toolbar /></ThemeContext.Provider>",
    "function Page() { return <UserProvider><ProfileBadge /></UserProvider>; }",
  ], [
    ["How can a distant toolbar button get the theme?", "Read a theme context provided above it", "Read a variable from an unrelated component file", 0, "A provider makes the value available to descendant consumers."],
    ["What should you consider for a user value needed by one child?", "Passing it as a prop may be clearest", "Context is mandatory for all user data", 0, "A direct prop makes a simple parent-child dependency explicit."],
    ["How do you fix a component that reads its own returned provider?", "Move the consumer into a child below the provider", "Call useContext inside the provider's value attribute", 0, "The consumer must render beneath the provider in the tree."],
  ]),
]);
