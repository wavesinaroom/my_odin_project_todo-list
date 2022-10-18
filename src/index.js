import _ from 'lodash';
import Session from './session';

Session.signUp('juan', '456');
Session.verifyLogin('jean', '983745');
Session.verifyLogin('juan', '78690');
Session.verifyLogin('juan', '456');
