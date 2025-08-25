"use client";
import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import Indonesia1 from './Indonesia1';
import Pancasila1 from './Pancasila1';
import Inggris1 from './Inggris1';
import Indonesia2 from './Indonesia2';
import Pancasila2 from './Pancasila2';
import Inggris2, { Inggris2Metadata } from './Inggris2';
import Indonesia3 from './Indonesia3';
import Pancasila3 from './Pancasila3';
import Inggris3 from './Inggris3';
import Indonesia4 from './Indonesia4';
import Pancasila4 from './Pancasila4';
import Inggris4 from './Inggris4';
import Indonesia5 from './Indonesia5';
import Pancasila5 from './Pancasila5';
import Inggris5 from './Inggris5';
import Indonesia6 from './Indonesia6';
import Pancasila6 from './Pancasila6';
import Inggris6 from './Inggris6';
import { cardData, type CardDataItem, type OverlayContentItem } from './CardData';

export default function MateriPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState<CardDataItem | null>(null);
  const [isDetailVisible, setIsDetailVisible] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<OverlayContentItem | null>(null);
  const [isReadingMode, setIsReadingMode] = useState(false);
  const [selectedClasses, setSelectedClasses] = useState<number[]>([]);
  const menuRef = useRef<HTMLDivElement>(null);

  // Function to close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Scroll to top when overlay becomes visible
  useEffect(() => {
    if (isOverlayVisible) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [isOverlayVisible]);

  // Scroll to top when detail view becomes visible
  useEffect(() => {
    if (isDetailVisible) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [isDetailVisible]);

  // Scroll to top when reading mode becomes visible
  useEffect(() => {
    if (isReadingMode) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [isReadingMode]);

  // Handler for checkbox changes
  const handleClassToggle = (kelas: number) => {
    setSelectedClasses(prev => {
      if (prev.includes(kelas)) {
        return prev.filter(k => k !== kelas);
      } else {
        return [...prev, kelas];
      }
    });
  };

  // Filter cards based on selected classes
  const filteredCards = selectedClasses.length === 0 
    ? cardData 
    : cardData.filter(card => {
        // Extract class number from className (assuming format like "Kelas 1")
        const classNumber = parseInt(card.className.replace(/\D/g, ''));
        return selectedClasses.includes(classNumber);
      });

  // Handler for clicking a card to show overlay
  const handleCardClick = (cardIndex: number) => {
    setSelectedCard(filteredCards[cardIndex]);
    setIsOverlayVisible(true);
  };

  // Handler to close overlay
  const closeOverlay = () => {
    setIsOverlayVisible(false);
    setSelectedCard(null);
  };

  // Handler for clicking overlay content to show detail
  const handleOverlayContentClick = (contentItem: OverlayContentItem) => {
    setSelectedTopic(contentItem);
    setIsDetailVisible(true);
  };

  // Handler to close detail view
  const closeDetail = () => {
    setIsDetailVisible(false);
    setSelectedTopic(null);
  };

  // Handler for "Baca Materi" button in detail view to enter reading mode
  const handleBacaMateri = () => {
    setIsReadingMode(true);
  };

  // Handler to close reading mode and go back to detail view
  const closeReadingMode = () => {
    setIsReadingMode(false);
  };

  // Render komponen materi berdasarkan judul kartu
  const renderReadingContent = () => {
    if (!selectedCard || !selectedTopic) return null;
  
    // Debugging: Tampilkan data yang diterima
    console.log("Selected Card:", {
      title: selectedCard.title,
      subtitle: selectedCard.subtitle,
      className: selectedCard.className
    });
  
    // Memeriksa subtitle untuk Bahasa Inggris
    if (selectedCard.subtitle.includes("Bahasa Inggris")) {
      if (selectedCard.className.includes("3")) {
        return <Inggris3 selectedTopicTitle={selectedTopic.title} />;
      } else if (selectedCard.className.includes("2")) {
        return <Inggris2 selectedTopicTitle={selectedTopic.title} />;
      } else if (selectedCard.className.includes("1")) {
        return <Inggris1 selectedTopicTitle={selectedTopic.title} />;
      } 
    }
  
    // Memeriksa subtitle untuk Bahasa Indonesia
    if (selectedCard.subtitle.includes("Bahasa Indonesia")) {
      if (selectedCard.className.includes("3")) {
        return <Indonesia3 selectedTopicTitle={selectedTopic.title} />;
      } else if (selectedCard.className.includes("2")) {
        return <Indonesia2 selectedTopicTitle={selectedTopic.title} />;
      } else if (selectedCard.className.includes("1")) {
        return <Indonesia1 selectedTopicTitle={selectedTopic.title} />;
      } 
    }
  
    // Memeriksa subtitle untuk Pancasila
    if (selectedCard.subtitle.includes("Pancasila")) {
      if (selectedCard.className.includes("3")) {
        return <Pancasila3 selectedTopicTitle={selectedTopic.title} />;
      } else if (selectedCard.className.includes("2")) {
        return <Pancasila2 selectedTopicTitle={selectedTopic.title} />;
      } else if (selectedCard.className.includes("1")) {
        return <Pancasila1 selectedTopicTitle={selectedTopic.title} />;
      } 
    }
  
    // Default case jika tidak ada yang cocok
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Materi tidak dikenali</h2>
        <p>Subtitle: {selectedCard.subtitle}</p>
        <p>Kelas: {selectedCard.className}</p>
      </div>
    );
  };
          
  // Use the selectedTopic.title if present, else fallback to overlayTitle of selectedCard
  const readingTitle = selectedTopic?.title || selectedCard?.overlayTitle || '';

  return (
    <div className="min-h-screen w-full bg-white relative">
      {/* Header dengan logo dan navigasi */}
      <div className="flex items-center justify-between px-8 py-4"></div>



      {/* Main Content */}
      {!isOverlayVisible && !isReadingMode && (
        <div className="flex-1 mt-20 px-8">
          <div className="text-center mb-8">
  <h1 className="text-2xl font-bold text-gray-700">
    Pilih materi pembelajaran yang ingin Anda pelajari.
  </h1>

  {/* Tombol Filter di bawah heading */}
  <div className="mt-4 flex justify-center" ref={menuRef}>
    <button
      onClick={(e) => {
        e.stopPropagation();
        setIsMenuOpen(!isMenuOpen);
      }}
      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
      aria-label="Filter"
    >
      <span>🔍 Filter</span>
    </button>

    {isMenuOpen && (
      <div className="absolute mt-2 bg-white border border-gray-300 rounded-xl shadow-lg py-4 px-4 min-w-52 z-10 max-h-96 overflow-y-auto">
        <h3 className="text-lg font-bold text-gray-800 mb-2">Pilih Kelas</h3>
        <div className="space-y-2">
          {[1, 2, 3, 4, 5, 6].map((kelas) => (
            <label key={kelas} className="flex items-center space-x-2 text-sm text-gray-700">
              <input 
                type="checkbox" 
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" 
                checked={selectedClasses.includes(kelas)}
                onChange={() => handleClassToggle(kelas)}
              />
              <span>Kelas {kelas}</span>
            </label>
          ))}
        </div>
      </div>
    )}
  </div>

  {selectedClasses.length > 0 && (
    <p className="text-gray-500 mt-3">
      Menampilkan materi untuk kelas: {selectedClasses.sort().join(', ')}
    </p>
  )}
</div>

          {filteredCards.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="bg-gray-100 p-8 rounded-lg max-w-md text-center">
                <h3 className="text-xl font-bold text-gray-700 mb-4">Tidak ada materi yang tersedia</h3>
                <p className="text-gray-600">
                  Tidak ditemukan materi untuk kelas yang dipilih. Silakan coba kelas lainnya.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-8">
              {filteredCards.map((card, index) => (
                <div
                  key={index}
                  className="group bg-gray-200 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer relative h-80 flex flex-col"
                  onClick={() => handleCardClick(index)}
                >
                  <div className="flex flex-col h-full p-6">
                    <div className="flex-grow flex flex-col justify-between min-h-0">
                      <div className="mb-4">
                        <h3 className="text-black text-lg font-bold group-hover:text-[#5410B4] transition-colors duration-300 line-clamp-2 leading-tight min-h-[3.5rem]">
                          {card.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed min-h-[2.5rem]">
                          {card.subtitle}
                        </p>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-black text-sm font-medium mb-1">Kelas</p>
                          <p className="text-gray-600 font-semibold text-sm min-h-[1.25rem]">
                            {card.className}
                          </p>
                        </div>
                        <div>
                          <p className="text-black text-sm font-medium mb-1">Kurikulum</p>
                          <p className="text-gray-600 font-semibold text-sm line-clamp-2 leading-tight min-h-[2.5rem]">
                            {card.curriculum}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end mt-6 pt-4 border-t border-gray-300">
                      <button
                        className="w-10 h-10 bg-gray-700 hover:bg-gray-600 group-hover:bg-[#5410B4] rounded-full flex items-center justify-center transition-colors duration-200 flex-shrink-0"
                        aria-label="Go to details"
                      >
                        <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-200" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Overlay Content */}
      {isOverlayVisible && selectedCard && !isDetailVisible && !isReadingMode && (
        <div className="min-h-screen w-full bg-white">
          <button
            onClick={closeOverlay}
            className="fixed top-30 left-8 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 rounded flex items-center space-x-2 z-20"
            aria-label="Back to main content"
          >
            <ArrowLeft className="w-6 h-6" />
            <span className="text-lg font-medium">Back</span>
          </button>

          <div className="pt-20 pb-8 px-8 text-center">
            <h1 className="text-3xl font-bold text-black mb-4 whitespace-nowrap overflow-hidden text-ellipsis inline-block">
              {selectedCard.overlayTitle}
            </h1>
          </div>

          <div className="px-8 pb-8 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
              {selectedCard.overlayContent?.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-200 rounded-lg p-6 cursor-pointer transition-colors duration-200 flex items-center space-x-4 text-left hover:bg-gray-300"
                  onClick={() => handleOverlayContentClick(item)}
                >
                  <div className="text-orange-400">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-black">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Detail Content */}
      {isDetailVisible && selectedTopic && !isReadingMode && (
        <div className="min-h-screen w-full bg-white">
          <div className="px-8 py-16 max-w-6xl mx-auto flex flex-col items-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{selectedTopic.title}</h1>

            <div className="border-l-4 border-blue-500 bg-blue-50 p-4 mb-8 w-full max-w-3xl">
              <p className="text-gray-700 text-lg">{selectedTopic.detailDescription}</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 w-full max-w-3xl">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Topik Pembelajaran:</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedTopic.topics?.map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors duration-200"
                  >
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-gray-800 font-medium">{topic.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={handleBacaMateri}
              className="mt-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-10 rounded-md shadow-md transition-colors duration-300"
              aria-label="Baca Materi"
            >
              Baca Materi
            </button>
          </div>

          <button
            onClick={closeDetail}
            className="fixed top-30 left-8 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 rounded flex items-center space-x-2 z-20"
            aria-label="Back to overlay content"
          >
            <ArrowLeft className="w-6 h-6" />
            <span className="text-lg font-medium">Back</span>
          </button>
        </div>
      )}

      {/* Reading Mode with integrated back button and black-bordered title and content boxes */}
      {isReadingMode && selectedTopic && (
        <div className="min-h-screen w-full bg-white flex flex-col px-8 pt-20 pb-10 max-w-4xl mx-auto relative">

          <button
            onClick={closeReadingMode}
            className="fixed top-30 left-8 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 rounded flex items-center space-x-2 z-20"
            aria-label="Back to detail content"
            type="button"
          >
            <ArrowLeft className="w-6 h-6" />
            <span className="text-lg font-medium">Back</span>
          </button>

          {/* Kotak judul materi */}
          <section
            className="border-2 border-black rounded-lg bg-gray-100 p-6 mb-8 select-none"
            aria-label="Judul materi yang dipilih"
          >
            <h1 className="text-3xl font-bold text-black truncate text-center">
              {readingTitle}
            </h1>
          </section>

          {/* Kotak isi content */}
          <section
            className="border-2 border-black rounded-lg bg-white p-6 flex-1 overflow-y-auto prose prose-lg max-w-none"
            aria-label="Isi materi bacaan"
          >
            {renderReadingContent()}
          </section>
        </div>
      )}
    </div>
  );
}