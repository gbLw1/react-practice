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
  - Manage form state with global state
  - Manage step navigation with URL state
- Manage form state and validation
- Manage global state with Zustand
- Manage URL state with query params
- Create a private route
  - Redirect to login page if user is not authenticated
  - Return to the previous private route after login
- Use Axios for HTTP requests
  - Error handling
  - Authenticated requests
  - Refresh token
- Styling with Tailwind CSS
- Use Flowbite React components
- Manage HTTP state with React Query
  - e.g. after updating the user, update the header component with the new user data
- Use social login authentication (Google, Facebook, etc.)
- Use Zod for form validation
- Use React Hook Form for form management

## Project progress

- [x] Vite + React + TypeScript
- [x] Routing with [React Router](https://reactrouter.com/en/main)
- [x] Styling with [Tailwind CSS](https://tailwindcss.com/) + [Flowbite React](https://www.flowbite-react.com/)
- [x] HTTP requests with [Axios](https://axios-http.com/)
- [x] Form management with [React Hook Form](https://react-hook-form.com/)
- [x] Form validation with [Zod](https://zod.dev/)
- [x] URL state management with query params
- [x] Global state management using [Zustand](https://zustand-demo.pmnd.rs/)
- [x] Private routes
- [ ] HTTP state management with [React Query](https://tanstack.com/query/latest)
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

The `useSearchParams` hook is a custom hook from [react-router-dom](https://reactrouter.com/en/main) that allows you to manage the URL state using query params.

e.g. `http://localhost:3000/login?validating=true`

The `validating` query param is used to show the validating screen when the user is logging in with a multi-step form.

---

### Global State Management

The global state is managed using [Zustand](https://zustand-demo.pmnd.rs/).

The `useStore` hook is a custom hook that allows you to access the global state.

e.g. `const { user, setUser } = useStore()`

The `user` state is used to store the user data and can be accessed from any component.

---

### Form Management & Validation

The form state and validation are managed using [React Hook Form](https://react-hook-form.com/) and [Zod](https://zod.dev/).

The `useForm` hook is a custom hook that allows you to manage the form state and validation.

e.g.

```typescript
interface FormValues {
    email: string
    password: string
}

const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    values: {
        // initial values
        ...
    }
})`
```

- `register` function is used to register the form inputs;
- `handleSubmit` function is used to handle the form submission;
- `errors` object is used to display the form validation errors.

The `zodResolver` function is a custom function that allows you to use Zod for form validation.

e.g.

```typescript
const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
})
```

---

### HTTP Requests

HTTP requests are made using [Axios](https://axios-http.com/).

The API client is implemented in [`src/services/api-client.ts`](src/services/api-client.ts).

The `api` object is used to make HTTP requests.

We can intercept the requests to add the authentication token from the browser storage.

e.g.

```typescript
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})
```

We also intercept the responses to handle the errors and refresh the token if necessary.

e.g.

```typescript
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {
            // refresh token
            ...
        }

        return Promise.reject(error)
    }
)
```

---

### Styling

The app is styled using [Tailwind CSS](https://tailwindcss.com/) and [Flowbite React](https://www.flowbite-react.com/).

---

## Running the app

```bash
# Install dependencies
npm install

# Run the app
npm run dev
```

