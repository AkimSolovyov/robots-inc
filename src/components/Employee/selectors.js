import { createStructuredSelector } from 'reselect';
import REDUCER from './constants';

const robots = state => state[REDUCER];

export default createStructuredSelector({
  robots
});
