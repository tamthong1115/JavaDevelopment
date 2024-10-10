import {
    SearchOutlined,
    ShopOutlined,
    ShoppingCartOutlined,
} from '@ant-design/icons'
import { Button, Dropdown, Input, Menu } from 'antd'
import { useState } from 'react'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const categories = (
        <Menu>
            <Menu.Item key="1">Toys</Menu.Item>
            <Menu.Item key="2">Tuff Trays</Menu.Item>
            <Menu.Item key="3">Behavioural</Menu.Item>
            <Menu.Item key="4">Sensory</Menu.Item>
            <Menu.Item key="5">Outdoors</Menu.Item>
            <Menu.Item key="6">Sand & Water</Menu.Item>
            <Menu.Item key="7">Strollers</Menu.Item>
            <Menu.Item key="8">Curriculum</Menu.Item>
            <Menu.Item key="9">Adventure</Menu.Item>
            <Menu.Item key="10">School Equipment</Menu.Item>
            <Menu.Item key="11">Furniture & Accessories</Menu.Item>
            <Menu.Item key="12">CLEARANCE</Menu.Item>
        </Menu>
    )

    return (
        <header className="bg-white shadow-md">
            <div className="mx-auto flex flex-col md:flex-row gap-3 justify-between items-center p-4">
                <div className="text-2xl font-bold text-purple-700">
                    Educational Toys
                </div>
                <Dropdown overlay={categories} trigger={['click']}>
                    <Button className="bg-orange-500 text-white px-4 py-2 rounded">
                        All categories
                    </Button>
                </Dropdown>
                <Input
                    placeholder="What are you looking for?"
                    suffix={<SearchOutlined />}
                    className="w-1/3"
                />
                <div className="flex flex-col md:flex-row gap-4 items-center space-x-4">
                    <span className="text-gray-700">
                        Get in touch: care@educationaltoys.co.uk
                    </span>
                    <Button type="primary">Login</Button>
                    <ShoppingCartOutlined className="cursor-pointer" />{' '}
                </div>
            </div>

            {/* Navbar */}
            <nav className="bg-gray-100  ">
                <div className="mx-auto flex flex-col gap-10 md:flex-row items-center justify-center space-x-4 py-2">
                    <a href="#" className="text-gray-700 hover:text-purple-700">
                        Toys
                    </a>
                    <a href="#" className="text-gray-700 hover:text-purple-700">
                        Tuff Trays
                    </a>
                    <a href="#" className="text-gray-700 hover:text-purple-700">
                        Behavioural
                    </a>
                    <a href="#" className="text-gray-700 hover:text-purple-700">
                        Sensory
                    </a>
                    <a href="#" className="text-gray-700 hover:text-purple-700">
                        Outdoors
                    </a>
                    <a href="#" className="text-gray-700 hover:text-purple-700">
                        Sand & Water
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Header
