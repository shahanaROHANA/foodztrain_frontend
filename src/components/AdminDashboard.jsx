import { useState, useEffect } from 'react';
import { FaChartLine, FaUsers, FaStore, FaShoppingCart, FaCog, FaBars, FaTimes, FaSignOutAlt } from 'react-icons/fa';
import VendorManagement from './admin/VendorManagement';
import MenuOversight from './admin/MenuOversight';
import OrderMonitoring from './admin/OrderMonitoring';
import UserManagement from './admin/UserManagement';
import Analytics from './admin/Analytics';
import PlatformSettings from './admin/PlatformSettings';
import './AdminDashboard.css';

const AdminDashboard = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('analytics');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { id: 'analytics', label: 'Analytics Dashboard', icon: FaChartLine },
    { id: 'vendors', label: 'Vendor Management', icon: FaStore },
    { id: 'menu', label: 'Menu Oversight', icon: FaShoppingCart },
    { id: 'orders', label: 'Order Monitoring', icon: FaShoppingCart },
    { id: 'users', label: 'User Management', icon: FaUsers },
    { id: 'settings', label: 'Platform Settings', icon: FaCog },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'analytics':
        return <Analytics />;
      case 'vendors':
        return <VendorManagement />;
      case 'menu':
        return <MenuOversight />;
      case 'orders':
        return <OrderMonitoring />;
      case 'users':
        return <UserManagement />;
      case 'settings':
        return <PlatformSettings />;
      default:
        return <Analytics />;
    }
  };

  return (
    <div className="admin-dashboard">
      {/* Header */}
      <header className="admin-header">
        <div className="header-left">
          <button 
            className="menu-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
          <h1>🚆 TrainFood Admin Dashboard</h1>
        </div>
        <div className="header-right">
          <span className="admin-name">Welcome, {user?.name}</span>
          <button className="logout-btn" onClick={onLogout}>
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </header>

      <div className="admin-content">
        {/* Sidebar */}
        <aside className={`admin-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
          <nav className="sidebar-nav">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(item.id)}
                >
                  <Icon className="nav-icon" />
                  <span className="nav-label">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="admin-main">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;

// import { useState } from 'react';
// import { FaChartLine, FaUsers, FaStore, FaShoppingCart, FaCog, FaBars, FaTimes, FaSignOutAlt } from 'react-icons/fa';
// // Assuming these components exist in your project structure
// import VendorManagement from './admin/VendorManagement';
// import MenuOversight from './admin/MenuOversight';
// import OrderMonitoring from './admin/OrderMonitoring';
// import UserManagement from './admin/UserManagement';
// import Analytics from './admin/Analytics';
// import PlatformSettings from './admin/PlatformSettings';

// const AdminDashboard = ({ user, onLogout }) => {
//   const [activeTab, setActiveTab] = useState('analytics');
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   const menuItems = [
//     { id: 'analytics', label: 'Analytics Dashboard', icon: FaChartLine },
//     { id: 'vendors', label: 'Vendor Management', icon: FaStore },
//     { id: 'menu', label: 'Menu Oversight', icon: FaShoppingCart },
//     { id: 'orders', label: 'Order Monitoring', icon: FaShoppingCart },
//     { id: 'users', label: 'User Management', icon: FaUsers },
//     { id: 'settings', label: 'Platform Settings', icon: FaCog },
//   ];

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'analytics': return <Analytics />;
//       case 'vendors': return <VendorManagement />;
//       case 'menu': return <MenuOversight />;
//       case 'orders': return <OrderMonitoring />;
//       case 'users': return <UserManagement />;
//       case 'settings': return <PlatformSettings />;
//       default: return <Analytics />;
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen bg-gray-100 font-sans">
//       {/* Header */}
//       <header className="flex items-center justify-between h-16 px-6 bg-white shadow-md z-10 flex-shrink-0">
//         <div className="flex items-center gap-4">
//           <button 
//             className="p-2 text-gray-600 rounded hover:bg-gray-100 focus:outline-none transition-colors"
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//           >
//             {sidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
//           </button>
//           <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
//             🚆 <span className="hidden sm:inline">TrainFood Admin</span>
//           </h1>
//         </div>
        
//         <div className="flex items-center gap-6">
//           <span className="text-sm font-medium text-gray-600 hidden sm:block">
//             Welcome, {user?.name || 'Admin'}
//           </span>
//           <button 
//             className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors" 
//             onClick={onLogout}
//           >
//             <FaSignOutAlt /> <span className="hidden sm:inline">Logout</span>
//           </button>
//         </div>
//       </header>

//       <div className="flex flex-1 overflow-hidden">
//         {/* Sidebar */}
//         <aside 
//           className={`bg-gray-900 text-white transition-all duration-300 ease-in-out flex flex-col ${
//             sidebarOpen ? 'w-64' : 'w-20'
//           }`}
//         >
//           <nav className="flex-1 py-6 space-y-1 overflow-y-auto">
//             {menuItems.map((item) => {
//               const Icon = item.icon;
//               const isActive = activeTab === item.id;
              
//               return (
//                 <button
//                   key={item.id}
//                   onClick={() => setActiveTab(item.id)}
//                   className={`flex items-center w-full px-6 py-3 transition-colors duration-200 relative group
//                     ${isActive 
//                       ? 'bg-blue-600 text-white border-r-4 border-blue-300' 
//                       : 'text-gray-400 hover:bg-gray-800 hover:text-white'
//                     }`}
//                 >
//                   <Icon className={`text-xl flex-shrink-0 ${!sidebarOpen && 'mx-auto'}`} />
                  
//                   {/* Label - visible when open */}
//                   <span 
//                     className={`ml-4 font-medium whitespace-nowrap transition-opacity duration-200 
//                     ${sidebarOpen ? 'opacity-100' : 'opacity-0 hidden'}`}
//                   >
//                     {item.label}
//                   </span>

//                   {/* Tooltip for collapsed state */}
//                   {!sidebarOpen && (
//                     <div className="absolute left-14 z-50 px-2 py-1 ml-6 text-xs text-white bg-gray-900 rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap">
//                       {item.label}
//                     </div>
//                   )}
//                 </button>
//               );
//             })}
//           </nav>
          
//           {/* Sidebar Footer (Optional) */}
//           <div className="p-4 border-t border-gray-800 text-center text-xs text-gray-500">
//              {sidebarOpen ? '© 2023 TrainFood' : '©'}
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
//           <div className="max-w-7xl mx-auto">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6 capitalize">
//               {menuItems.find(i => i.id === activeTab)?.label}
//             </h2>
//             <div className="bg-white rounded-lg shadow p-6 min-h-[500px]">
//               {renderContent()}
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;
