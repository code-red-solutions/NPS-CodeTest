
import Cat from './cat.js';
import Dog from './dog.js';
import Welcome from './welcome.ts';
import './nps-widget/index.js';
import NpsWidget from './nps-widget/index.js';

// TODO: Use a document.onload event handler
var i = new NpsWidget();

export { Cat, Dog, Welcome };

document.getElementsByTagName('body')[0].appendChild(i);
