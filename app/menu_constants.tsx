import { SideNavItemGroup } from "@/types/type";
import { BsEnvelope, BsGear, BsHouseDoor, BsKanban, BsListUl, BsQuestionCircle } from "react-icons/bs";



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
                title: 'Post',
                path: '/post',
                icon: <BsKanban size={20} />,
                submenu: true,
                subMenuItems: [
                    { title: 'All', path: '/post' },
                    { title: 'New', path: '/post/new' },
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
                title: 'News',
                path: '/newa',
                icon: <BsListUl size={20} />,
            },
            {
                title: 'Category',
                path: '/category',
                icon: <BsEnvelope size={20} />,
            }
        ]
    },
    {
        title: "Others",
        menuList: [
            {
                title: 'Account',
                path: '/account',
                icon: <BsGear size={20} />,
            },
            {
                title: 'About us',
                path: '/about',
                icon: <BsQuestionCircle size={20} />,
            }
        ]
    }

];