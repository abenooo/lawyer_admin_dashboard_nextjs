import { SideNavItemGroup } from "@/types/type";
import { BsEnvelope, BsGear, BsHouseDoor, BsKanban, BsListUl, BsQuestionCircle,BsUpload  } from "react-icons/bs";



export const SIDENAV_ITEMS: SideNavItemGroup[] = [

    {
        title: "Dashboards",
        menuList: [{
            title: 'Dashboard',
            path: '/',
            icon: <BsHouseDoor size={20} />,
        }]
    },
    {
        title: "Manage",
        menuList: [
            {
                title: 'Blog',
                path: '/blog',
                icon: <BsKanban size={20} />,
                submenu: true,
                subMenuItems: [
                    { title: 'All', path: '/blog' },
                    { title: 'New', path: '/blog/new' },
                ],
            },
            {
                title: 'Category',
                path: '/category',
                icon: <BsKanban size={20} />,
                submenu: true,
                subMenuItems: [
                    { title: 'All', path: '/category' },
                    { title: 'New', path: '/category/new' },
                ],
            },
            {
                title: 'News category',
                path: '/newscategory',
                icon: <BsListUl size={20} />,
            },
            {
                title: 'Blog Category',
                path: '/blogcategory',
                icon: <BsEnvelope size={20} />,
            }
        ]
    },
    {
        title: "Others",
        menuList: [
            {
                title: 'Profile',
                path: '/profile',
                icon: <BsGear size={20} />,
            },
            {
                title: 'Setting',
                path: '/setting',
                icon: <BsGear size={20} />,
            },
            {
                title: 'Logout',
                path: '/login',
                icon: <BsUpload size={20} />,
            }
        ]
    }

];