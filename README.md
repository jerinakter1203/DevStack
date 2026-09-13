# Dev Stack

Dev Stack is a responsive React website where developers can explore different web development technologies and build their own development stack.

Users can view technology information, add technologies to their stack, remove individual technologies, or remove all selected technologies.

## Technologies Used

- React.js
- JavaScript (ES6+)
- CSS
- JSON
- React Toastify
- Vite

## Features

1. Explore different development technologies with their category, difficulty,rating, description, and badge.

2. Add technologies to a personal "Your Stack" section and prevent duplicate technologies from being added.

3. Remove individual technologies or clear the entire stack with toast notifications.

---

# React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript.

React uses JSX because it makes the UI code easier to write and understand.

---

## 2. What is the difference between props and state?

Props are data passed from a parent component to a child component.

State is data managed inside a component that can change over time.

Props are mainly used to pass data, while state is used to manage changing
data.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React Hook used to create and manage changing data inside a
component.

I used `useState` to manage:

- Technology data
- Selected technologies in "Your Stack"
- Loading state

For example:

```jsx
const [selectedStack, setSelectedStack] = useState([]);
```
---


## 4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is a React Hook used to perform side effects in a component.

I used useEffect to load the technology data from the JSON file when the component starts.

Example:
```jsx
useEffect(() => {
  setTechData(technologies);
  setLoading(false);
}, []);
```
The empty [] means the effect runs when the component is loaded.

---

## 5. Why does every item in a .map() list need a unique key prop?

React needs a unique key to identify each item in a list.

It helps React understand which item has changed, been added, or removed.

Example:
```jsx
{techData.map((tech) => (
  <TechnologyCard
    key={tech.id}
    technology={tech}
  />
))}
```
Here, tech.id is the unique key.

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

I used it in the "Your Stack" section.

When no technology is selected, it shows:
```jsx
{selectedStack.length === 0 ? (
  <div className="empty-stack">
    <p>Your stack is empty.</p>
  </div>
) : (
  <div className="stack-items">
    {selectedStack.map((tech) => (
    ))}
  </div>
)}
```
So, if the stack is empty, the empty message is shown. Otherwise, the selected
technologies are displayed.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component can pass data to a child using props.

For example:
```jsx
<TechnologyCard
  technology={tech}
  selectedStack={selectedStack}
/>
```

Here, technology and selectedStack are passed from the parent to the
child.

A child can send something back to the parent by calling a function that the parent passes as a prop.

For example:
```jsx
<TechnologyCard
  technology={tech}
  onAddToStack={handleAddToStack}
/>
```
The child calls:
```jsx
onAddToStack(technology);
```
This sends the selected technology back to the parent function.