import { get } from 'lodash';

export const getCurrentRoute = state => get( state, 'ui.route.path.current', null );

export default getCurrentRoute;