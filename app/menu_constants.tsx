import { SideNavItemGroup } from "@/types/type";
import { BsGear, BsHouseDoor, BsKanban,BsUpload  } from "react-icons/bs";



export const SIDENAV_ITEMS: SideNavItemGroup[] = [

    {
        title: "Dashboards",
        menuList: [{
            title: 'Dashboard',
            path: '/dashboard',
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
                title: 'News',
                path: '/news',
                icon: <BsKanban size={20} />,
                submenu: true,
                subMenuItems: [
                    { title: 'All', path: '/news' },
                    { title: 'New', path: '/news/new' },
                ],
            },
            {
                title: 'Blog Category',
                path: '/blogsCategory',
                icon: <BsKanban size={20} />,
                submenu: true,
                subMenuItems: [
                    { title: 'All', path: '/blogCategory' },
                    { title: 'New', path: '/blogCategory/new' },
                ],
            },
            {
                title: 'News Category',
                path: '/newCategory',
                icon: <BsKanban size={20} />,
                submenu: true,
                subMenuItems: [
                    { title: 'All', path: '/newCategory' },
                    { title: 'New', path: '/newCategory/new' },
                ],
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