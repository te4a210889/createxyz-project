"use client";
import React from "react";

function MainComponent() {
  const [currentPage, setCurrentPage] = useState("materials");
  const [showUserModal, setShowUserModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const materials = [
    {
      id: 1,
      title: "データ構造編1 データモデルとデータ構造の基礎",
      duration: "1時間30分",
      status: "未完了",
    },
    {
      id: 2,
      title: "制御構造 制御構造への入り口",
      duration: "30分",
      status: "未完了",
    },
    {
      id: 3,
      title: "制御構造 条件分岐編",
      duration: "1時間",
      status: "未完了",
    },
    {
      id: 4,
      title: "制御構造 繰り返し編",
      duration: "1時間",
      status: "未完了",
    },
  ];

  const tasks = [
    { id: 1, title: "基本課題1", status: "未着手" },
    { id: 2, title: "基本課題2", status: "未着手" },
    { id: 3, title: "基本課題3", status: "未着手" },
    { id: 4, title: "応用課題1", status: "未着手" },
    { id: 5, title: "応用課題2", status: "未着手" },
    { id: 6, title: "応用課題3", status: "未着手" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-orange-500">
            BlocklyCodeAcademy
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">ユーザー名</span>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative p-2 hover:bg-gray-100 rounded-full"
            >
              <i className="fas fa-user-circle text-2xl text-gray-600"></i>
            </button>
            {menuOpen && (
              <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg">
                <button
                  onClick={() => setShowUserModal(true)}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  アカウント管理
                </button>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  ログアウト
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className="w-64 min-h-screen bg-[#1a3d3d] text-white p-4">
          <nav className="space-y-2">
            <button
              onClick={() => setCurrentPage("materials")}
              className={`w-full p-3 rounded-lg text-left hover:bg-[#2a4d4d] ${
                currentPage === "materials" ? "bg-[#2a4d4d]" : ""
              }`}
            >
              <i className="fas fa-book mr-2"></i>教材一覧
            </button>
            <button
              onClick={() => setCurrentPage("tasks")}
              className={`w-full p-3 rounded-lg text-left hover:bg-[#2a4d4d] ${
                currentPage === "tasks" ? "bg-[#2a4d4d]" : ""
              }`}
            >
              <i className="fas fa-tasks mr-2"></i>課題一覧
            </button>
            <button
              onClick={() => setCurrentPage("free")}
              className={`w-full p-3 rounded-lg text-left hover:bg-[#2a4d4d] ${
                currentPage === "free" ? "bg-[#2a4d4d]" : ""
              }`}
            >
              <i className="fas fa-code mr-2"></i>フリーモード
            </button>
          </nav>
        </aside>

        <main className="flex-1 p-8">
          {currentPage === "materials" && (
            <div>
              <h1 className="text-2xl font-bold mb-6">教材一覧</h1>
              <div className="space-y-4">
                {materials.map((material) => (
                  <div
                    key={material.id}
                    className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold">
                        {material.title}
                      </h3>
                      <div className="flex items-center gap-4">
                        <span className="text-gray-500">
                          {material.duration}
                        </span>
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                          {material.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentPage === "tasks" && (
            <div>
              <h1 className="text-2xl font-bold mb-6">課題一覧</h1>
              <div className="bg-white rounded-lg p-6">
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">基本</h2>
                  {tasks.slice(0, 3).map((task) => (
                    <div
                      key={task.id}
                      className="flex justify-between items-center p-3 border-b"
                    >
                      <span>{task.title}</span>
                      <div className="flex items-center gap-4">
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                          {task.status}
                        </span>
                        <button className="text-blue-600 hover:underline">
                          開始する
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-4">応用</h2>
                  {tasks.slice(3).map((task) => (
                    <div
                      key={task.id}
                      className="flex justify-between items-center p-3 border-b"
                    >
                      <span>{task.title}</span>
                      <div className="flex items-center gap-4">
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                          {task.status}
                        </span>
                        <button className="text-blue-600 hover:underline">
                          開始する
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentPage === "free" && (
            <div>
              <h1 className="text-2xl font-bold mb-6">フリーモード</h1>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-600">
                  自由にコードを書いて実行できるモードです
                </p>
              </div>
            </div>
          )}
        </main>
      </div>

      {showUserModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">アカウント管理</h2>
            <button
              onClick={() => setShowUserModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <i className="fas fa-times"></i>
            </button>
            <div className="mt-4">
              <p>ユーザー情報の管理画面です</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainComponent;