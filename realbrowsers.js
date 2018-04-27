import { load } from './lazyloader.js';

load('tim.jpg').then(img => document.body.appendChild(img));
