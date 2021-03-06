import Main from './Main';
// import NewEntryPage from './NewEntryPage';
// import CommentsPage from './CommentsPage';
import NotFoundPage from './NotFoundPage';

const routes = [
  {
    path: '/',
    name: 'home',
    exact: true,
    component: Main,
  },
  // {
  //   path: '/feed/:type',
  //   name: 'feed',
  //   component: FeedPage,
  // },
  // {
  //   path: '/submit',
  //   name: 'submit',
  //   component: NewEntryPage,
  // },
  // {
  //   path: '/:org/:repoName',
  //   name: 'submit',
  //   component: CommentsPage,
  // },
  {
    path: '*',
    name: 'notfound',
    component: NotFoundPage,
  },
];

export default routes;
