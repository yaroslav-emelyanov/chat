import { createEvent, createStore } from 'effector';
import { useStore } from 'effector-react';

export const DRAWER_WIDTH = 240;

const setState = createEvent<boolean>();

const $state = createStore(false).on(setState, (_, value) => value);

export const openDrawer = () => setState(true);
export const closeDrawer = () => setState(false);

export const useDrawer = () => useStore($state);
