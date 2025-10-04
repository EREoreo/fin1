import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  // Прямые ссылки на Finviz
  const NASDAQ_URL = "https://elite.finviz.com/export.ashx?v=152&f=exch_nasd,ind_stocksonly,sh_avgvol_o300,sh_price_3to80&auth=56d25c88-21a3-47a8-ad5a-605f01591d43";
  const NYSE_URL = "https://elite.finviz.com/export.ashx?v=152&f=exch_nyse,ind_stocksonly,sh_avgvol_o300,sh_price_3to80&auth=56d25c88-21a3-47a8-ad5a-605f01591d43";

  // Функция для открытия ссылки
  const downloadFile = (url, exchange) => {
    // Показываем сообщение
    setMessage(`📥 Скачивание ${exchange} началось...`);
    
    // Открываем ссылку в новом окне
    window.open(url, '_blank');
    
    // Убираем сообщение через 3 секунды
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center w-screen p-6">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            📊 Finviz Downloader
          </h1>
          <p className="text-gray-600">
            Скачайте данные с фондовых бирж
          </p>
        </div>
        
        {/* Кнопки */}
        <div className="space-y-4">
          <button
            onClick={() => downloadFile(NASDAQ_URL, 'NASDAQ')}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <div className="flex items-center justify-center space-x-2">
              <span className="text-xl">🇺🇸</span>
              <span>Скачать NASDAQ</span>
            </div>
          </button>
          
          <button
            onClick={() => downloadFile(NYSE_URL, 'NYSE')}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <div className="flex items-center justify-center space-x-2">
              <span className="text-xl">📈</span>
              <span>Скачать NYSE</span>
            </div>
          </button>
        </div>
        
        {/* Сообщение */}
        {message && (
          <div className="mt-6 p-4 rounded-lg bg-blue-50 border border-blue-200 animate-pulse">
            <p className="text-sm text-blue-800 text-center font-medium">{message}</p>
          </div>
        )}
        
        {/* Информация */}
        <div className="mt-8 p-4 rounded-lg bg-gray-50 border">
          <h3 className="font-semibold text-gray-700 mb-3 flex items-center">
            <span className="mr-2">ℹ️</span>
            Информация о загрузке
          </h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Файлы скачиваются прямо с Finviz Elite</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Формат: CSV с данными акций</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Фильтры: объем Больше ,  300K, цена от 3 до 80</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Сохраняется в папку "Загрузки"</span>
            </li>
          </ul>
        </div>
        
        {/* Прямые ссылки (для удобства) */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500 mb-2">Или используйте прямые ссылки:</p>
          <div className="space-y-2">
            <a 
              href={NASDAQ_URL}
              className="block text-blue-500 hover:text-blue-700 text-sm hover:underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              📊 NASDAQ CSV
            </a>
            <a 
              href={NYSE_URL}
              className="block text-green-500 hover:text-green-700 text-sm hover:underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              📈 NYSE CSV
            </a>
          </div>
        </div>
        
        {/* Статус */}
        <div className="mt-6 text-center">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-500">Готов к работе</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;