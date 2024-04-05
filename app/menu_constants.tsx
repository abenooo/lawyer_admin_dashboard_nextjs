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
                title: 'News',
                path: '/news',
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
                title: 'Setting',
                path: '/setting',
                icon: <BsGear size={20} />,
            },
            {
                title: 'Logout',
                path: '/logout',
                icon: <BsUpload size={20} />,
            }
        ]
    }

];