
import Cat from './cat.js';
import Dog from './dog.js';
import Welcome from './welcome.ts';
export { Cat, Dog, Welcome };

import './nps-widget/index.js';
import NpsWidget from './nps-widget/index.js';

//var i = document.createElement('nps-widget');
var i = new NpsWidget();
document.getElementsByTagName('body')[0].appendChild(i);
