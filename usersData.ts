import { User } from './types';

/**
 * CENTRAL USER DATA SOURCE
 * This Array is the main source of truth for the ProAi Admin Dashboard.
 * To update users permanently for all browsers: 
 * 1. Edit this array.
 * 2. Deploy the application.
 */
export const INITIAL_USERS: User[] = [
  { id: '1', name: 'Rowan', code: '7777a', link: 'https://prompt-pro-design.vercel.app/' },
  { id: '2', name: 'DoDo', code: '9090', link: 'https://prompt-pro-design.vercel.app/' },
  { id: '3', name: 'Reem', code: '5532846', link: 'https://prompt-pro-design.vercel.app/' }
];