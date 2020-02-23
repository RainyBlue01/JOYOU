import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: '工作台',
      component: () => import('@/views/dashboard/index'),
      hidden: true
    }]
  },

  {
    path: '/publicarea',
    component: Layout,
    redirect: '/publicarea/typemanagement',
    name: 'publicarea',
    meta: { title: '公共区域', icon: 'example' },
    children: [
      {
        path: 'typemanagement',
        name: 'typemanagement',
        component: () => import('@/views/publicarea/typemanagement'),
        meta: { title: '类型管理', icon: 'table' }
      },
      {
        path: 'regionalmanagement',
        name: 'regionalmanagement',
        component: () => import('@/views/publicarea/regionalmanagement'),
        meta: { title: '区域管理', icon: 'tree' }
      }
    ]
  },

  {
    path: '/noticeOfPublicity',
    component: Layout,
    redirect: '/noticeOfPublicity/table',
    name: 'noticeOfPublicity',
    meta: { title: '公示公告', icon: 'example' },
    children: [
      {
        path: 'typemanagement',
        name: 'typemanagement',
        component: () => import('@/views/noticeOfPublicity/typemanagement'),
        meta: { title: '类型管理', icon: 'table' }
      },
      {
        path: 'releasemanagement',
        name: 'releasemanagement',
        component: () => import('@/views/noticeOfPublicity/releasemanagement'),
        meta: { title: '发布管理', icon: 'tree' }
      }
    ]
  },

  {
    path: '/pipeCorridors',
    component: Layout,
    redirect: '/pipeCorridors/information',
    name: 'pipeCorridors',
    meta: { title: '管廊管理', icon: 'example' },
    children: [
      {
        path: 'information',
        name: 'information',
        component: () => import('@/views/pipeCorridors/information'),
        meta: { title: '管廊信息', icon: 'table' }
      },
      {
        path: 'company',
        name: 'company',
        component: () => import('@/views/pipeCorridors/company'),
        meta: { title: '五方单位', icon: 'tree' }
      }
    ]
  },

  {
    path: '/ledger',
    component: Layout,
    redirect: '/ledger/type',
    name: 'ledger',
    meta: { title: '设备台账', icon: 'example' },
    children: [
      {
        path: 'type',
        name: 'type',
        component: () => import('@/views/ledger/type'),
        meta: { title: '类型管理', icon: 'table' }
      },
      {
        path: 'subsidiary',
        name: 'subsidiary',
        component: () => import('@/views/ledger/subsidiary'),
        meta: { title: '附属工程', icon: 'tree' }
      },
      {
        path: 'engineering',
        name: 'engineering',
        component: () => import('@/views/ledger/engineering'),
        meta: { title: '土建工程', icon: 'tree' }
      },
      {
        path: 'equipment',
        name: 'equipment',
        component: () => import('@/views/ledger/equipment'),
        meta: { title: '公共区域设备', icon: 'tree' }
      }
    ]
  },

  {
    path: '/gallery',
    component: Layout,
    redirect: '/gallery/cost',
    name: 'gallery',
    meta: { title: '入廊管线', icon: 'example' },
    children: [
      {
        path: 'cost',
        name: 'cost',
        component: () => import('@/views/gallery/cost'),
        meta: { title: '入廊费用登记', icon: 'table' }
      },
      {
        path: 'daily',
        name: 'daily',
        component: () => import('@/views/gallery/daily'),
        meta: { title: '日常维护费用', icon: 'tree' }
      },
      {
        path: 'company',
        name: 'company',
        component: () => import('@/views/gallery/company'),
        meta: { title: '管线单位信息', icon: 'tree' }
      },
      {
        path: 'basic',
        name: 'basic',
        component: () => import('@/views/gallery/basic'),
        meta: { title: '管线基本信息', icon: 'tree' }
      }
    ]
  },

  {
    path: '/patrol',
    component: Layout,
    redirect: '/patrol/scheduling',
    name: 'patrol',
    meta: { title: '巡检管理', icon: 'example' },
    children: [
      {
        path: 'scheduling',
        name: 'scheduling',
        component: () => import('@/views/patrol/scheduling'),
        meta: { title: '巡检排程', icon: 'table' }
      },
      {
        path: 'node',
        name: 'node',
        component: () => import('@/views/patrol/node'),
        meta: { title: '巡检节点设置', icon: 'tree' }
      },
      {
        path: 'checkin',
        name: 'checkin',
        component: () => import('@/views/patrol/checkin'),
        meta: { title: '巡检打卡线路', icon: 'tree' }
      },
      {
        path: 'record',
        name: 'record',
        component: () => import('@/views/patrol/record'),
        meta: { title: '巡检记录', icon: 'tree' }
      },
      {
        path: 'robot',
        name: 'robot',
        component: () => import('@/views/patrol/robot'),
        meta: { title: '巡检机器人管理', icon: 'tree' }
      },
      {
        path: 'knowledge',
        name: 'knowledge',
        component: () => import('@/views/patrol/knowledge'),
        meta: { title: '巡检知识库管理', icon: 'tree' }
      }
    ]
  },

  {
    path: '/statistics',
    component: Layout,
    redirect: '/statistics/ventilate',
    name: 'statistics',
    meta: { title: '巡检统计', icon: 'example' },
    children: [
      {
        path: 'ventilate',
        name: 'ventilate',
        component: () => import('@/views/statistics/ventilate'),
        meta: { title: '通风系统', icon: 'table' }
      },
      {
        path: 'drainage',
        name: 'drainage',
        component: () => import('@/views/statistics/drainage'),
        meta: { title: '排水系统', icon: 'tree' }
      },
      {
        path: 'firecontrol',
        name: 'firecontrol',
        component: () => import('@/views/statistics/firecontrol'),
        meta: { title: '消防系统', icon: 'tree' }
      },
      {
        path: 'distribution',
        name: 'distribution',
        component: () => import('@/views/statistics/distribution'),
        meta: { title: '配电系统', icon: 'tree' }
      },
      {
        path: 'monitor',
        name: 'monitor',
        component: () => import('@/views/statistics/monitor'),
        meta: { title: '监控系统', icon: 'tree' }
      },
      {
        path: 'lighting',
        name: 'lighting',
        component: () => import('@/views/statistics/lighting'),
        meta: { title: '照明系统', icon: 'tree' }
      }
    ]
  },

  {
    path: '/maintain',
    component: Layout,
    redirect: '/maintain/maintain',
    name: 'maintain',
    meta: { title: '维护管理', icon: 'example' },
    children: [
      {
        path: 'maintain',
        name: 'maintain',
        component: () => import('@/views/maintain/maintain'),
        meta: { title: '廊体维护', icon: 'table' }
      },
      {
        path: 'keepfit',
        name: 'keepfit',
        component: () => import('@/views/maintain/keepfit'),
        meta: { title: '排水系统', icon: 'tree' }
      },
      {
        path: 'equipment',
        name: 'equipment',
        component: () => import('@/views/maintain/equipment'),
        meta: { title: '附属设备维修', icon: 'tree' }
      },
      {
        path: 'tpm',
        name: 'tpm',
        component: () => import('@/views/maintain/tpm'),
        meta: { title: '附属设备保养', icon: 'tree' }
      },
      {
        path: 'emergency',
        name: 'emergency',
        component: () => import('@/views/maintain/emergency'),
        meta: { title: '应急抢修', icon: 'tree' }
      },
      {
        path: 'repair',
        name: 'repair',
        component: () => import('@/views/maintain/repair'),
        meta: { title: '大修专项', icon: 'tree' }
      }
    ]
  },

  {
    path: '/plan',
    component: Layout,
    redirect: '/plan/engineering',
    name: 'plan',
    meta: { title: '大中修计划', icon: 'example' },
    children: [
      {
        path: 'engineering',
        name: 'engineering',
        component: () => import('@/views/plan/engineering'),
        meta: { title: '土建工程', icon: 'table' }
      },
      {
        path: 'equipment',
        name: 'equipment',
        component: () => import('@/views/plan/equipment'),
        meta: { title: '附属设备', icon: 'tree' }
      }
    ]
  },

  {
    path: '/beonduty',
    component: Layout,
    redirect: '/beonduty/register',
    name: 'beonduty',
    meta: { title: '值班记录', icon: 'example' },
    children: [
      {
        path: 'register',
        name: 'register',
        component: () => import('@/views/beonduty/register'),
        meta: { title: '值班登记', icon: 'table' }
      },
      {
        path: 'record',
        name: 'record',
        component: () => import('@/views/beonduty/record'),
        meta: { title: '值班记录', icon: 'tree' }
      },
      {
        path: 'succession',
        name: 'succession',
        component: () => import('@/views/beonduty/succession'),
        meta: { title: '交接班记录', icon: 'tree' }
      },
      {
        path: 'phone',
        name: 'phone',
        component: () => import('@/views/beonduty/phone'),
        meta: { title: '值班电话', icon: 'tree' }
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('@/views/beonduty/contact'),
        meta: { title: '紧急联系', icon: 'tree' }
      }
    ]
  },

  {
    path: '/access',
    component: Layout,
    redirect: '/access/enter',
    name: 'access',
    meta: { title: '出入廊管理', icon: 'example' },
    children: [
      {
        path: 'enter',
        name: 'enter',
        component: () => import('@/views/access/enter'),
        meta: { title: '入廊登记', icon: 'table' }
      },
      {
        path: 'come',
        name: 'come',
        component: () => import('@/views/access/come'),
        meta: { title: '来访登记', icon: 'tree' }
      },
      {
        path: 'specialtype',
        name: 'specialtype',
        component: () => import('@/views/access/specialtype'),
        meta: { title: '特种作业登记', icon: 'tree' }
      },
      {
        path: 'task',
        name: 'task',
        component: () => import('@/views/access/task'),
        meta: { title: '管线作业记录', icon: 'tree' }
      }
    ]
  },

  {
    path: '/security',
    component: Layout,
    redirect: '/security',
    name: 'security',
    meta: { title: '安全管理', icon: 'example' },
    children: [
      {
        path: 'task',
        name: 'task',
        component: () => import('@/views/security/task'),
        meta: { title: '外部作业', icon: 'table' }
      }
    ]
  },

  {
    path: '/dispatch',
    component: Layout,
    redirect: '/dispatch/personnel',
    name: 'dispatch',
    meta: { title: '调度管理', icon: 'example' },
    children: [
      {
        path: 'personnel',
        name: 'personnel',
        component: () => import('@/views/dispatch/personnel'),
        meta: { title: '人员调整', icon: 'table' }
      },
      {
        path: 'car',
        name: 'car',
        component: () => import('@/views/dispatch/car'),
        meta: { title: '车辆调度', icon: 'tree' }
      },
      {
        path: 'goods',
        name: 'goods',
        component: () => import('@/views/dispatch/goods'),
        meta: { title: '物资调度', icon: 'tree' }
      }
    ]
  },

  {
    path: '/goods',
    component: Layout,
    redirect: '/goods/inlibrary',
    name: 'goods',
    meta: { title: '物资管理', icon: 'example' },
    children: [
      {
        path: 'inlibrary',
        name: 'inlibrary',
        component: () => import('@/views/goods/inlibrary'),
        meta: { title: '在库管理', icon: 'table' }
      },
      {
        path: 'stream',
        name: 'stream',
        component: () => import('@/views/goods/stream'),
        meta: { title: '出入库流水', icon: 'tree' }
      },
      {
        path: 'type',
        name: 'type',
        component: () => import('@/views/goods/type'),
        meta: { title: '物资类型', icon: 'tree' }
      },
      {
        path: 'record',
        name: 'record',
        component: () => import('@/views/goods/record'),
        meta: { title: '物资申购记录', icon: 'tree' }
      },
      {
        path: 'storeroom',
        name: 'storeroom',
        component: () => import('@/views/goods/storeroom'),
        meta: { title: '库房管理', icon: 'tree' }
      }
    ]
  },

  {
    path: '/energy',
    component: Layout,
    redirect: '/energy/Meter',
    name: 'energy',
    meta: { title: '能耗管理', icon: 'example' },
    children: [
      {
        path: 'meter',
        name: 'meter',
        component: () => import('@/views/energy/meter'),
        meta: { title: '仪表管理', icon: 'table' }
      },
      {
        path: 'electric',
        name: 'electric',
        component: () => import('@/views/energy/electric'),
        meta: { title: '用电管理', icon: 'tree' }
      },
      {
        path: 'water',
        name: 'water',
        component: () => import('@/views/energy/water'),
        meta: { title: '用水管理', icon: 'tree' }
      },
      {
        path: 'electricstatistics',
        name: 'electricstatistics',
        component: () => import('@/views/energy/electricstatistics'),
        meta: { title: '用电统计', icon: 'tree' }
      },
      {
        path: 'waterstatistics',
        name: 'waterstatistics',
        component: () => import('@/views/energy/waterstatistics'),
        meta: { title: '用水统计', icon: 'tree' }
      }
    ]
  },

  {
    path: '/setting',
    component: Layout,
    redirect: '/setting/parameter',
    name: 'setting',
    meta: { title: '系统设置', icon: 'example' },
    children: [
      {
        path: 'parameter',
        name: 'parameter',
        component: () => import('@/views/setting/parameter'),
        meta: { title: '参数设置', icon: 'table' }
      },
      {
        path: 'group',
        name: 'group',
        component: () => import('@/views/setting/group'),
        meta: { title: '权限组设置', icon: 'tree' }
      },
      {
        path: 'jurisdiction',
        name: 'jurisdiction',
        component: () => import('@/views/setting/jurisdiction'),
        meta: { title: '权限绑定', icon: 'tree' }
      },
      {
        path: 'apk',
        name: 'apk',
        component: () => import('@/views/setting/apk'),
        meta: { title: 'apk版本设置', icon: 'tree' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
