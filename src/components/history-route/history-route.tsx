import {useState, useLayoutEffect, JSX, ReactNode} from 'react';
import {Router} from 'react-router-dom';
import type {BrowserHistory} from 'history';

export interface HistoryRouterProps {
  history: BrowserHistory;
  basename?: string;
  children?: ReactNode;
}

export default function HistoryRouter({basename, children, history}: HistoryRouterProps): JSX.Element {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
}
