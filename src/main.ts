import { ViteSSG } from 'vite-ssg';
import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';
import App from './App.vue';
import './styles/main.css';

const routes = setupLayouts(generatedRoutes);

export const createApp = ViteSSG(App, { routes }, ({ app, router, routes, isClient, initialState }) => {});
