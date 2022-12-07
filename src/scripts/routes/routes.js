import Account from '../views/pages/account';
import AddArticle from '../views/pages/add-article';
import Dashboard from '../views/pages/dashboard';
import Detail from '../views/pages/detail';
import EditArticle from '../views/pages/edit-article';
import Home from '../views/pages/home';
import Login from '../views/pages/login';
import Pregnancy from '../views/pages/pregnancy';
import Children from '../views/pages/children';
import Family from '../views/pages/family';
import BudgetingChildren from '../views/pages/budgeting-children';
import BudgetingToddler from '../views/pages/budgeting-toddler';
import BudgetingKids from '../views/pages/budgeting-kids';
import Budgeting from '../views/pages/budgeting';
import AddBudgeting from '../views/pages/add-budgeting';
import EditBudgeting from '../views/pages/edit-budgeting';
import About from '../views/pages/about';
import AboutTeam from '../views/pages/about-team';

const routes = {
  '/': Home,
  '/login': Login,
  '/article': Detail,
  '/dashboard': Dashboard,
  '/dashboard/add-article': AddArticle,
  '/dashboard/edit-article': EditArticle,
  '/dashboard/account': Account,
  '/pregnancy': Pregnancy,
  '/children': Children,
  '/family': Family,
  '/budgeting-children': BudgetingChildren,
  '/budgeting-toddler': BudgetingToddler,
  '/budgeting-kids': BudgetingKids,
  '/dashboard/budgeting': Budgeting,
  '/dashboard/add-budgeting': AddBudgeting,
  '/dashboard/edit-budgeting': EditBudgeting,
  '/about': About,
  '/about-team': AboutTeam,
};

export default routes;
