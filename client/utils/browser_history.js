// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

const createBrowserHistory = require('history').createBrowserHistory;

export const browserHistory = createBrowserHistory({basename: window.basename});
