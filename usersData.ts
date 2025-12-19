import { User } from './types';

/**
 * ⚠️ CENTRAL USER DATA SOURCE ⚠️
 * This is the ONLY source of truth for user access. 
 * Changes here will apply to all users upon the next deployment.
 * NO localStorage or sessionStorage is used to ensure global consistency.
 */
export const INITIAL_USERS: User[] = [
  { 
    id: '1', 
    name: 'Rowan', 
    code: '7777a', 
    phone: '01000000000', 
    link: 'https://prompt-pro-design.vercel.app/',
    role: 'user'
  },
  { 
    id: '2', 
    name: 'DoDo', 
    code: '9090', 
    phone: '01200000000', 
    link: 'https://prompt-pro-design.vercel.app/',
    role: 'user'
  },
  { 
    id: '3', 
    name: 'Reem', 
    code: '5532846', 
    phone: '01100000000', 
    link: 'https://prompt-pro-design.vercel.app/',
    role: 'user'
  }
];