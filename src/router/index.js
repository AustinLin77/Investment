import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'
import Home from '@/components/Home'
import UserList from '@/components/UserList'
import InfoList from '@/components/InfoList'
import PersonalInfomation from '@/components/PersonalInfomation'
import EditInfomation from '@/components/EditInfomation'
import FundDiretion from '@/components/FundDiretion'
import PayEvidence from '@/components/PayEvidence'
import ProvinceInvest from '@/components/ProvinceInvest'
import AreaInvest from '@/components/AreaInvest'
import PublishArticle from '@/components/PublishArticle'
import EditArticle from '@/components/EditArticle'
import LookArticle from '@/components/LookArticle'
import InvestSpread from '@/components/InvestSpread'
import ProjectSpread from '@/components/ProjectSpread'
import FundSpread from '@/components/FundSpread'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path: '/',
          name: 'main',
          component: Main,
        },
        {
          path: '/main',
          name: 'main',
          component: Main,
        },
        {
          path: '/userList',
          name: 'userList',
          component: UserList,
        },
        {
          path: '/infoList',
          name: 'infoList',
          component: InfoList,
        },
        {
          path: '/personalInfomation',
          name: 'personalInfomation',
          component: PersonalInfomation,
        },
        {
          path: '/editInfomation',
          name: 'editInfomation',
          component: EditInfomation,
        },
        {
          path: '/fundDiretion',
          name: 'fundDiretion',
          component: FundDiretion,
        },
        {
          path: '/payEvidence',
          name: 'payEvidence',
          component: PayEvidence,
        },
        {
          path: '/provinceInvest',
          name: 'provinceInvest',
          component: ProvinceInvest,
        },
        {
          path: '/areaInvest',
          name: 'areaInvest',
          component: AreaInvest,
        },
        {
          path: '/publishArticle',
          name: 'publishArticle',
          component: PublishArticle,
        },
        {
          path: '/editArticle',
          name: 'editArticle',
          component: EditArticle,
        },
        {
          path: '/lookArticle',
          name: 'lookArticle',
          component: LookArticle,
        },
        {
          path: '/investSpread',
          name: 'investSpread',
          component: InvestSpread,
        },
        {
          path: '/projectSpread',
          name: 'projectSpread',
          component: ProjectSpread,
        },
        {
          path: '/fundSpread',
          name: 'fundSpread',
          component: FundSpread,
        },
      ]
    }
  ]
})
