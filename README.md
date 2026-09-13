# Dev Stack

A responsive React + TypeScript web app where you can browse popular developer technologies and build your own personalized tech stack.

## Live Demo

Coming soon (deployment in progress).

## Repository

https://github.com/tasdid2222019/dev-stack

## Features

- **Browse technologies** — 12 popular tools across Frontend, Backend, Database, Language, Styling, DevOps, and Tools categories, each with a rating, difficulty level, and badge.
- **Build your stack** — add technologies to a personal "Your Stack" list with one click, remove them individually or all at once, and get toast notifications for every action (including a warning if you try to add the same technology twice).
- **Fully responsive design** — 3-column grid on desktop, 2 columns on tablet, 1 column on mobile, with a sticky navbar that collapses into a hamburger menu on smaller screens.

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- React-Toastify
- Vite
- JSON (for the technology data)

## Running Locally

```bash
git clone https://github.com/tasdid2222019/dev-stack.git
cd dev-stack
npm install
npm run dev
```

## Project Structure
DevStack/
├── public/
│ ├── assets/
│ └── technologies.json
├── src/
│ ├── components/
│ │ ├── Navbar.tsx
│ │ ├── Hero.tsx
│ │ ├── TechnologyCard.tsx
│ │ └── Footer.tsx
│ ├── types/
│ │ └── technology.ts
│ ├── App.tsx
│ └── main.tsx


## React Concepts Used

**1. What is JSX and why does React use it?**
JSX lets me write HTML-looking code directly inside JavaScript/TypeScript files. React uses it because it makes the UI structure easier to read and write compared to calling `React.createElement()` manually every time.

**2. What is the difference between props and state?**
Props are data passed *into* a component from its parent — the component can't change them itself. State is data a component manages internally and can update over time, usually with `useState`.

**3. What is `useState()` and where is it used?**
`useState()` is a React Hook that lets a component keep track of values that can change and re-render the UI when they do. I used it for the list of technologies, the user's selected stack, and the loading flag.

**4. What is `useEffect()` and why is it needed for JSON loading?**
`useEffect()` runs code after the component renders — it's used for side effects like fetching data. Since loading `technologies.json` happens outside of the normal render flow, I fetch it inside `useEffect()` when the app first mounts.

**5. Why do we need a unique `key` when using `.map()`?**
React uses the `key` to tell items in a list apart so it knows which ones changed, got added, or got removed, instead of re-rendering the whole list every time. I used each technology's `id` as the key.

**6. What is conditional rendering? Give one example.**
Conditional rendering means showing different UI depending on a condition. In this project, while the technologies are loading I show a spinner, and once loading finishes I show the actual technology grid.

**7. How does data move from parent → child, and how can a child communicate back to the parent?**
The parent (`App.tsx`) passes data down to children as props — for example, each `TechnologyCard` receives its `technology` object and whether it's already added. To communicate back up, the parent also passes a function as a prop (like `onAdd`), and the child calls that function when the user clicks a button.

## Future Improvements

- Add search/filter by category or difficulty
- Add user accounts to save stacks permanently
- Add a "compare technologies" view

## License

MIT
