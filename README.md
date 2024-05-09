# React good practices

## About

simple react app with good practices

### App pages:

- Login
  - multi step form
- Dashboard
  - private route
  - url state management

---

### Objectives:

- Learn how to create a multi-step form
- Learn how to manage form state and validation
- Learn how to manage global state with Zustand
- Learn how to manage URL state
- Learn how to create a private route
  - Redirect to login page if user is not authenticated
  - Return to the previous private route after login
- Learn how to use Axios for HTTP requests
- Learn how to style your app with Tailwind CSS
- Learn how to use Flowbite React components
- Learn how to use React Query for HTTP state management
- Learn how to use social login authentication
- Learn how to use Zod for form validation
- Learn how to use React Hook Form for form management

So far, the app has the following features:

- Login page with a multi-step form managed by URL state
- Dashboard page with a private route

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

## Learning process

Here are some notes about the features implemented in this project

### Private Route

The `PrivateRoute` component is a wrapper around the `Element` component that checks if the user is authenticated.
If the user is authenticated, it renders the `Element` component.
If the user is **not** authenticated, it redirects to the login page.

ps: the `PrivateRoute` component also saves the current route in a global state,
so after the user logs in, it redirects to the previous private route.

---

### URL State Management

The `useSearchParams` hook is a custom hook from `react-router-dom` that allows you to manage the URL state using query params.

---

### Global State Management

The global state is managed using Zustand.
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

