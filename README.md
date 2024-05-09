# React good practices

## About

Simple react app with good practice and learning purposes.

### App pages:

- Login
  - multi step form
- Dashboard
  - private route
  - url state management

---

### Objectives:

Learn how to:

- Create a multi-step form
- Manage form state and validation
- Manage global state with Zustand
- Manage URL state
- Create a private route
  - Redirect to login page if user is not authenticated
  - Return to the previous private route after login
- Use Axios for HTTP requests
- Style your app with Tailwind CSS
- Use Flowbite React components
- Use React Query for HTTP state management
- Use social login authentication
- Use Zod for form validation
- Use React Hook Form for form management

## Project progress

- [x] Vite + React + TypeScript
- [x] Routing with [React Router](https://reactrouter.com/en/main)
- [x] Styling with [Tailwind CSS](https://tailwindcss.com/) + [Flowbite React](https://www.flowbite-react.com/)
- [x] HTTP requests with [Axios](https://axios-http.com/)
- [x] Form management & validation with [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- [x] URL state management with query params
- [x] Global state management using [Zustand](https://zustand-demo.pmnd.rs/)
- [x] Private routes
- [ ] HTTP State management with [React Query](https://tanstack.com/query/latest)
- [ ] Social login authentication

## Notes

Here are some notes during the development of this project.

Some details about the features implemented in this project and how they work.

---

### Private Route

The private route is implemented in [`routes/private-route.tsx`](src/routes/private-route.tsx).

The `PrivateRoute` component is a wrapper around the `Element` component that checks if the user is authenticated.

Logic:
- If the user is authenticated, it renders the `Element` component.
- If the user is **not** authenticated, it redirects to the login page.
- The current route is saved in a global state, so after the user logs in, it redirects to the previous private route he was trying to access (if any).

---

### URL State Management

The `useSearchParams` hook is a custom hook from `react-router-dom` that allows you to manage the URL state using query params.

---

### Global State Management

The global state is managed using [Zustand](https://zustand-demo.pmnd.rs/).

The `useStore` hook is a custom hook that allows you to access the global state.

---

### Form Management & Validation

The form state and validation are managed using `React Hook Form` and `Zod`.

---

### HTTP Requests

HTTP requests are made using Axios.

---

### Styling

The app is styled using Tailwind CSS and Flowbite React components.

---

## Running the app

```bash
# Install dependencies
npm install

# Run the app
npm run dev
```

