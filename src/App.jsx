import React, { useState, useEffect, useRef } from 'react';
import {
  MapPin,
  Calendar as CalendarIcon,
  Plus,
  Trash2,
  Heart,
  X,
  Map as MapIcon,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Camera,
  BookOpen,
  Home,
  Search,
  Pencil,
  PenTool,
  Layers
} from 'lucide-react';

const TreeDoodles = {
  curlyCloud: (className = "w-12 h-12", strokeColor = "#2D2D2D") => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 50 20 C 40 20, 35 25, 35 32 C 30 32, 25 35, 25 42 C 25 50, 30 55, 38 55 C 38 60, 45 65, 52 65 C 60 65, 68 60, 68 55 C 75 55, 78 48, 78 42 C 78 35, 72 30, 65 31 C 65 24, 58 20, 50 20 Z" fill="#D5F5E3" stroke={strokeColor} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 42 32 C 45 35, 48 30, 52 33 C 55 35, 53 42, 48 40 C 45 38, 40 45, 48 48 C 55 50, 60 45, 58 38" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 47 64 L 46 85 C 46 86, 54 86, 54 85 L 53 64" fill="#D35400" stroke={strokeColor} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 35 85 C 45 84, 55 86, 65 85" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
      <circle cx="20" cy="30" r="1.5" fill="#E74C3C" />
      <circle cx="82" cy="48" r="1.5" fill="#F1C40F" />
    </svg>
  ),

  concentricSpiral: (className = "w-12 h-12", strokeColor = "#2D2D2D") => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="42" r="22" fill="#E8F8F5" stroke={strokeColor} strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="50" cy="42" r="15" fill="#A2D9CE" stroke={strokeColor} strokeWidth="2.5" strokeDasharray="3 3" />
      <circle cx="50" cy="42" r="8" fill="#1ABC9C" stroke={strokeColor} strokeWidth="2" />
      <circle cx="50" cy="42" r="2" fill={strokeColor} />
      <path d="M 48 64 L 46 84 C 46 86, 54 86, 54 84 L 52 64" fill="#A04000" stroke={strokeColor} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 22 36 C 21 39, 22 43, 23 45" stroke={strokeColor} strokeWidth="2" />
      <circle cx="28" cy="22" r="2" fill="#E67E22" />
      <circle cx="70" cy="24" r="2" fill="#E74C3C" />
      <path d="M 38 84 C 48 83, 52 85, 62 84" stroke={strokeColor} strokeWidth="2" />
    </svg>
  ),

  layeredPine: (className = "w-12 h-12", strokeColor = "#2D2D2D") => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 50 15 L 35 32 L 65 32 Z" fill="#D4EFDF" stroke={strokeColor} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 40 26 L 60 26" stroke={strokeColor} strokeWidth="1.5" strokeDasharray="2 2" />
      <path d="M 50 28 L 28 48 L 72 48 Z" fill="#7DCEA0" stroke={strokeColor} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 34 40 L 66 40" stroke={strokeColor} strokeWidth="1.5" strokeDasharray="2 2" />
      <path d="M 50 44 L 20 66 L 80 66 Z" fill="#27AE60" stroke={strokeColor} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 47 66 L 47 84 C 47 85, 53 85, 53 84 L 53 66" fill="#6E2C00" stroke={strokeColor} strokeWidth="4" strokeLinecap="round" />
      <circle cx="24" cy="25" r="2" fill="#E74C3C" />
      <circle cx="76" cy="35" r="2" fill="#F1C40F" />
      <path d="M 32 84 C 45 83, 55 85, 68 84" stroke={strokeColor} strokeWidth="2" />
    </svg>
  ),

  aztecTriangle: (className = "w-12 h-12", strokeColor = "#2D2D2D") => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 50 18 L 24 64 L 76 64 Z" fill="#FADBD8" stroke={strokeColor} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 50 28 L 34 56 L 66 56 Z" fill="#F1948A" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 50 38 L 42 50 L 58 50 Z" fill="#C0392B" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 47 64 L 46 84 C 46 85, 54 85, 54 84 L 53 64" fill="#3E2723" stroke={strokeColor} strokeWidth="4" strokeLinecap="round" />
      <circle cx="20" cy="50" r="2" fill="#27AE60" />
      <circle cx="50" cy="10" r="2.5" fill="#F39C12" />
      <path d="M 32 84 L 68 84" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),

  heartScribble: (className = "w-12 h-12", strokeColor = "#2D2D2D") => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 50 60 C 45 52, 22 48, 22 34 C 22 22, 38 18, 50 30 C 62 18, 78 22, 78 34 C 78 48, 55 52, 50 60 Z" fill="#FDEDEC" stroke={strokeColor} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 50 50 C 46 44, 30 40, 30 32 C 30 24, 42 22, 50 30 C 58 22, 70 24, 70 32 C 70 40, 54 44, 50 50 Z" fill="#FADBD8" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 2" />
      <path d="M 47 60 L 46 83 C 46 84, 54 84, 54 83 L 53 60" fill="#78281F" stroke={strokeColor} strokeWidth="4" strokeLinecap="round" />
      <circle cx="16" cy="30" r="2" fill="#F5B041" />
      <circle cx="50" cy="12" r="2.5" fill="#E74C3C" />
      <path d="M 33 83 C 45 82, 55 84, 67 83" stroke={strokeColor} strokeWidth="2" />
    </svg>
  ),

  windsweptBonsai: (className = "w-12 h-12", strokeColor = "#2D2D2D") => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 36 38 C 30 30, 42 22, 54 26 C 66 30, 72 24, 76 34 C 80 44, 72 54, 60 52 C 48 50, 42 46, 36 38 Z" fill="#E8F8F5" stroke={strokeColor} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 44 38 C 48 34, 56 34, 60 38 C 64 42, 58 46, 52 44" fill="#A3E4D7" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 48 51 C 45 56, 42 66, 48 83" stroke={strokeColor} strokeWidth="4.5" fill="#5E35B1" strokeLinecap="round" />
      <path d="M 52 51 C 49 56, 47 66, 53 83" stroke={strokeColor} strokeWidth="3" fill="#5E35B1" strokeLinecap="round" />
      <circle cx="68" cy="20" r="2" fill="#E67E22" />
      <path d="M 34 83 C 44 82, 54 84, 64 83" stroke={strokeColor} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
};

const CuteDoodles = {
  twoPeople: (className = "w-32 h-32", strokeColor = "#2D2D2D") => (
    <svg viewBox="0 0 350 180" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(125, 10)">
        <path d="M 40 70 L 30 110 L 34 111 L 43 78 L 52 109 L 56 108 L 47 70 Z" fill="#F5EFE6" />
        <path d="M 38 72 L 29 110 M 41 71 L 32 110 M 44 73 L 35 111 M 47 71 L 52 109 M 45 74 L 49 109" stroke="#873600" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 40 70 L 30 110 L 25 111" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 47 70 L 52 109 L 57 110" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 35 43 C 44 42, 53 44, 51 56 C 49 64, 45 72, 37 71 C 31 70, 31 58, 35 43 Z" fill="#A2D9CE" />
        <path d="M 45 47 C 51 48, 57 50, 61 48" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
        <circle cx="63" cy="48" r="2.2" fill="#FADBD8" stroke={strokeColor} strokeWidth="1.2" />
        <rect x="64" y="43" width="6" height="7" rx="1" fill="#5DADE2" stroke={strokeColor} strokeWidth="1.2" />
        <path d="M 70 45 C 71 45, 72 46, 72 47 C 72 48, 71 49, 70 49" stroke={strokeColor} strokeWidth="1" />
        <path d="M 65 40 Q 66 38, 65 37 M 68 40 Q 69 38, 68 37" stroke="#AEB6BF" strokeWidth="1" strokeLinecap="round" />
        <path d="M 35 43 C 44 42, 53 44, 51 56 C 49 64, 45 72, 37 71 C 31 70, 31 58, 35 43 Z" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 41 38 C 44 38, 47 40, 47 43 C 47 44, 43 45, 40 44 C 38 42, 39 39, 41 38 Z" fill="#FADBD8" />
        <path d="M 39 32 C 43 31, 47 33, 48 37 C 49 41, 45 43, 42 43 C 40 43, 37 39, 39 32 Z" fill="#5D4037" />
        <path d="M 39 32 Q 43 28, 45 31 Q 47 29, 48 34" stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="44" cy="39" r="1.2" fill={strokeColor} />
      </g>

      <g transform="translate(100, 10)">
        <path d="M 125 72 L 114 110 L 110 111 L 122 76 L 132 109 L 136 108 L 128 72 Z" fill="#FAF5EF" />
        <path d="M 123 72 L 114 110 L 109 111" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 127 72 L 132 109 L 137 110" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 116 48 C 122 47, 134 49, 132 60 C 130 68, 126 73, 118 72 C 114 71, 112 60, 116 48 Z" fill="#F5B041" />
        <path d="M 119 48 L 120 71 M 124 49 L 122 71 M 128 50 L 126 71" stroke="#D35400" strokeWidth="1" />
        <path d="M 128 52 C 135 55, 142 54, 146 51" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
        <circle cx="147" cy="51" r="2.2" fill="#FADBD8" stroke={strokeColor} strokeWidth="1.2" />
        <path d="M 116 54 C 110 57, 106 58, 103 55" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" />
        <path d="M 116 48 C 122 47, 134 49, 132 60 C 130 68, 126 73, 118 72 C 114 71, 112 60, 116 48 Z" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 122 38 C 125 38, 128 40, 128 43 C 128 45, 124 46, 122 45 C 119 44, 119 40, 122 38 Z" fill="#FADBD8" />
        <circle cx="124" cy="41" r="1.2" fill={strokeColor} />
        <path d="M 120 37 C 122 33, 126 34, 128 36" stroke={strokeColor} strokeWidth="1.8" fill="#E67E22" strokeLinecap="round" />
        <path d="M 128 36 L 132 37" stroke={strokeColor} strokeWidth="1.8" strokeLinecap="round" />
      </g>
    </svg>
  ),
  paperTape: (color = "#FADBD8") => (
    <svg viewBox="0 0 100 25" className="w-24 h-6 opacity-90 select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 5 5 L 95 3 L 93 20 L 7 22 Z" fill={color} stroke="#2D2D2D" strokeWidth="2" strokeLinejoin="round" />
      <path d="M 15 8 L 25 18 M 35 7 L 45 17 M 55 8 L 65 18 M 75 7 L 85 17" stroke="#F1948A" strokeWidth="1.5" />
    </svg>
  ),
  pushPin: (color = "#E74C3C") => (
    <svg viewBox="0 0 100 100" className="w-8 h-8 select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 50 45 L 50 82" stroke="#7F8C8D" strokeWidth="5" strokeLinecap="round" />
      <path d="M 46 76 L 50 85 L 54 76" fill="#7F8C8D" />
      <ellipse cx="50" cy="42" rx="16" ry="7" fill={color} stroke="#2D2D2D" strokeWidth="3" />
      <rect x="39" y="24" width="22" height="18" rx="3" fill={color} stroke="#2D2D2D" strokeWidth="3" />
      <ellipse cx="50" cy="24" rx="11" ry="5" fill={color} stroke="#2D2D2D" strokeWidth="3" />
      <circle cx="45" cy="29" r="2.5" fill="#FFF" opacity="0.6" />
    </svg>
  )
};

const INITIAL_TREES = [
  {
    id: 'tree-1',
    user: 'him',
    title: 'Lone Pine on the Ridge',
    species: 'Scots Pine (Pinus sylvestris)',
    date: '2026-06-15',
    locationName: 'Highlands, Scotland',
    lat: 57.1497,
    lng: -4.1936,
    caption: 'Stood resiliently against the fierce wind. Its needles look exactly like our layered pine doodles from IMG_7412 2.jpg.',
    images: ['https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1000'],
    weather: 'Windy & Cold',
    doodleStyle: 'layeredPine'
  },
  {
    id: 'tree-2',
    user: 'lili',
    title: 'The Great Golden Ginkgo',
    species: 'Ginkgo Biloba',
    date: '2026-11-04',
    locationName: 'Kyoto Temple Garden, Japan',
    lat: 35.0116,
    lng: 135.7681,
    caption: 'Like thousands of golden fan letters dropped from heaven. We sketched its curly outline in our pocket journal.',
    images: ['https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&q=80&w=1000'],
    weather: 'Crisp Autumn Calm',
    doodleStyle: 'curlyCloud'
  },
  {
    id: 'tree-3',
    user: 'him',
    title: 'Redwood Giant',
    species: 'Coast Redwood',
    date: '2026-05-18',
    locationName: 'Muir Woods, California',
    lat: 37.8970,
    lng: -122.5811,
    caption: 'Felt absolutely minuscule standing next to this giant. Reminds me of our geometric Aztec drawings.',
    images: ['https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=1000'],
    weather: 'Foggy Forest Dew',
    doodleStyle: 'aztecTriangle'
  },
  {
    id: 'tree-4',
    user: 'lili',
    title: 'Swirling Cherry Blossom',
    species: 'Sakura (Prunus serrulata)',
    date: '2026-04-02',
    locationName: 'Meguro River, Tokyo',
    lat: 35.6455,
    lng: 139.6989,
    caption: 'A snowstorm of pink petals. The swirling pattern of the tree rings looks like our spiral doodles.',
    images: ['https://images.unsplash.com/photo-1522441815192-d9f04eb0615c?auto=format&fit=crop&q=80&w=1000'],
    weather: 'Warm Spring Breeze',
    doodleStyle: 'concentricSpiral'
  },
  {
    id: 'tree-5',
    user: 'both',
    title: 'Our Sweetheart Oak',
    species: 'White Oak (Quercus alba)',
    date: '2026-07-04',
    locationName: 'Central Park, New York',
    lat: 40.7829,
    lng: -73.9654,
    caption: 'The tree we sat under when we agreed to start this shared chronicle. Reminds us of the heart scribble style from IMG_7413 2.jpg.',
    images: ['https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1000'],
    weather: 'Sunny Picnic Afternoon',
    doodleStyle: 'heartScribble'
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [trees, setTrees] = useState(INITIAL_TREES);
 
  const [selectedUser, setSelectedUser] = useState('all');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTree, setSelectedTree] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
 
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [editingTreeId, setEditingTreeId] = useState(null);

  const [formUser, setFormUser] = useState('him');
  const [formTitle, setFormTitle] = useState('');
  const [formSpecies, setFormSpecies] = useState('');
  const [formDate, setFormDate] = useState('2026-07-12');
  const [formLocationName, setFormLocationName] = useState('');
  const [formLat, setFormLat] = useState('35.6762');
  const [formLng, setFormLng] = useState('139.6503');
  const [formCaption, setFormCaption] = useState('');
  const [formWeather, setFormWeather] = useState('');
  const [selectedDoodleStyle, setSelectedDoodleStyle] = useState('layeredPine');
  const [imagePreviews, setImagePreviews] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapInstance, setMapInstance] = useState(null);
  const [markersRef, setMarkersRef] = useState([]);
  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(6);

  const mapContainerRef = useRef(null);

  useEffect(() => {
    setActivePhotoIdx(0);
  }, [selectedTree]);

  useEffect(() => {
    const cssId = 'leaflet-css';
    if (!document.getElementById(cssId)) {
      const link = document.createElement('link');
      link.id = cssId;
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }

    const jsId = 'leaflet-js';
    if (!document.getElementById(jsId)) {
      const script = document.createElement('script');
      script.id = jsId;
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.async = true;
      script.onload = () => {
        setMapLoaded(true);
      };
      document.body.appendChild(script);
    } else if (window.L) {
      setMapLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (currentPage !== 'map' || !mapLoaded || !window.L) return;

    const initTimer = setTimeout(() => {
      if (!mapContainerRef.current) return;

      if (mapInstance) {
        mapInstance.remove();
      }

      const L = window.L;

      const map = L.map(mapContainerRef.current, {
        center: [34.0, 8.0],
        zoom: 2,
        minZoom: 1.5,
        maxBounds: [[-85, -180], [85, 180]],
        zoomControl: false
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 20
      }).addTo(map);

      L.control.zoom({
        position: 'bottomright'
      }).addTo(map);

      setMapInstance(map);

      map.on('click', (e) => {
        const { lat, lng } = e.latlng;
        setFormLat(lat.toFixed(5));
        setFormLng(lng.toFixed(5));
       
        const coordinatesBox = document.getElementById('floating-coordinates-feedback');
        if (coordinatesBox) {
          coordinatesBox.classList.remove('opacity-0');
          coordinatesBox.classList.add('opacity-100');
          setTimeout(() => {
            coordinatesBox.classList.remove('opacity-100');
            coordinatesBox.classList.add('opacity-0');
          }, 1500);
        }
      });
    }, 150);

    return () => {
      clearTimeout(initTimer);
    };
  }, [currentPage, mapLoaded]);

  useEffect(() => {
    if (currentPage !== 'map' || !mapInstance || !window.L) return;

    const L = window.L;

    markersRef.forEach(m => mapInstance.removeLayer(m));
    const newMarkers = [];

    const filteredTrees = trees.filter(tree => {
      const matchUser = selectedUser === 'all' || tree.user === selectedUser || tree.user === 'both';
      const matchDate = !selectedDate || tree.date === selectedDate;
      return matchUser && matchDate;
    });

    filteredTrees.forEach(tree => {
      const strokeColor = '#2D2D2D';
      const coverPhoto = tree.images && tree.images.length > 0 ? tree.images[0] : 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1000';

      const customIconHtml = `
        <div class="flex flex-col items-center">
          <div class="w-12 h-12 bg-[#FCFBF9] border-2 border-[#2D2D2D] rounded-xl flex items-center justify-center transform hover:scale-125 transition duration-200">
            <div class="scale-90 flex items-center justify-center">
              ${tree.doodleStyle === 'curlyCloud' ? `
                <svg viewBox="0 0 100 100" class="w-10 h-10" fill="none">
                  <path d="M 50 20 C 40 20, 35 25, 35 32 C 30 32, 25 35, 25 42 C 25 50, 30 55, 38 55 C 38 60, 45 65, 52 65 C 60 65, 68 60, 68 55 C 75 55, 78 48, 78 42 C 78 35, 72 30, 65 31 C 65 24, 58 20, 50 20 Z" fill="#D5F5E3" stroke="${strokeColor}" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M 47 64 L 46 85 L 53 85 L 53 64" fill="#D35400" stroke="${strokeColor}" stroke-width="5" />
                </svg>
              ` : tree.doodleStyle === 'concentricSpiral' ? `
                <svg viewBox="0 0 100 100" class="w-10 h-10" fill="none">
                  <circle cx="50" cy="42" r="20" fill="#E8F8F5" stroke="${strokeColor}" stroke-width="4.5" />
                  <circle cx="50" cy="42" r="12" fill="#A2D9CE" stroke="${strokeColor}" stroke-width="3" stroke-dasharray="2 2" />
                  <path d="M 48 62 L 46 82 L 54 82 L 52 62" fill="#A04000" stroke="${strokeColor}" stroke-width="5" />
                </svg>
              ` : tree.doodleStyle === 'aztecTriangle' ? `
                <svg viewBox="0 0 100 100" class="w-10 h-10" fill="none">
                  <path d="M 50 18 L 24 64 L 76 64 Z" fill="#FADBD8" stroke="${strokeColor}" stroke-width="4.5" stroke-linecap="round" />
                  <path d="M 50 28 L 34 56 L 66 56 Z" fill="#F1948A" stroke="${strokeColor}" stroke-width="3" />
                  <path d="M 47 64 L 46 84 L 54 84 L 53 64" fill="#3E2723" stroke="${strokeColor}" stroke-width="5" />
                </svg>
              ` : tree.doodleStyle === 'heartScribble' ? `
                <svg viewBox="0 0 100 100" class="w-10 h-10" fill="none">
                  <path d="M 50 60 C 45 52, 22 48, 22 34 C 22 22, 38 18, 50 30 C 62 18, 78 22, 78 34 C 78 48, 55 52, 50 60 Z" fill="#FDEDEC" stroke="${strokeColor}" stroke-width="4.5" stroke-linecap="round" />
                  <path d="M 47 60 L 46 83 L 54 83 L 53 60" fill="#78281F" stroke="${strokeColor}" stroke-width="5" />
                </svg>
              ` : tree.doodleStyle === 'windsweptBonsai' ? `
                <svg viewBox="0 0 100 100" class="w-10 h-10" fill="none">
                  <path d="M 36 38 C 30 30, 42 22, 54 26 C 66 30, 72 24, 76 34 C 80 44, 72 54, 60 52 C 48 50, 42 46, 36 38 Z" fill="#E8F8F5" stroke="${strokeColor}" stroke-width="4.5" stroke-linecap="round" />
                  <path d="M 48 51 L 48 83" fill="#5E35B1" stroke="${strokeColor}" stroke-width="5" />
                </svg>
              ` : `
                <svg viewBox="0 0 100 100" class="w-10 h-10" fill="none">
                  <path d="M 50 15 L 35 32 L 65 32 Z" fill="#D4EFDF" stroke="${strokeColor}" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M 40 26 L 60 26" stroke="${strokeColor}" stroke-width="1.5" stroke-dasharray="2 2" />
                  <path d="M 50 28 L 28 48 L 72 48 Z" fill="#7DCEA0" stroke="${strokeColor}" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M 34 40 L 66 40" stroke="${strokeColor}" stroke-width="1.5" stroke-dasharray="2 2" />
                  <path d="M 50 44 L 20 66 L 80 66 Z" fill="#27AE60" stroke="${strokeColor}" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M 47 66 L 47 84 C 47 85, 53 85, 53 84 L 53 66" fill="#6E2C00" stroke="${strokeColor}" stroke-width="5" stroke-linecap="round" />
                  <circle cx="24" cy="25" r="2" fill="#E74C3C" />
                  <circle cx="76" cy="35" r="2" fill="#F1C40F" />
                </svg>
              `}
            </div>
          </div>
          <div class="w-1.5 h-2 bg-[#2D2D2D]"></div>
        </div>
      `;

      const customIcon = L.divIcon({
        html: customIconHtml,
        className: 'custom-tree-pin',
        iconSize: [48, 58],
        iconAnchor: [24, 58]
      });

      const marker = L.marker([tree.lat, tree.lng], { icon: customIcon }).addTo(mapInstance);
     
      const popupContent = `
        <div class="p-1.5 text-zinc-900" style="min-width: 200px;">
          <div class="border-2 border-[#2D2D2D] p-1 bg-white mb-2 rounded-lg">
            <img src="${coverPhoto}" alt="${tree.title}" class="w-full h-24 object-cover rounded" />
          </div>
          <h4 class="font-bold text-xs mb-1 line-clamp-1 text-emerald-900">${tree.title}</h4>
          <p class="text-[10px] text-zinc-500 mb-1 flex items-center gap-1">
            <span class="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            ${tree.locationName}
          </p>
          <button onclick="window.dispatchSelectTree('${tree.id}')" class="mt-2 w-full text-center text-[10px] font-bold border-2 border-[#2D2D2D] py-1 rounded bg-[#EBF5FB] hover:bg-emerald-600 hover:text-white transition-all">
            Open Journal Note
          </button>
        </div>
      `;
      marker.bindPopup(popupContent);
      newMarkers.push(marker);
    });

    setMarkersRef(newMarkers);

    if (filteredTrees.length > 0) {
      const group = L.featureGroup(newMarkers);
      mapInstance.fitBounds(group.getBounds().pad(0.35));
    }
  }, [currentPage, selectedUser, selectedDate, trees, mapInstance]);

  useEffect(() => {
    window.dispatchSelectTree = (id) => {
      const tree = trees.find(t => t.id === id);
      if (tree) {
        setSelectedTree(tree);
        setCurrentPage('album');
      }
    };
    return () => {
      delete window.dispatchSelectTree;
    };
  }, [trees]);

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const readPromises = files.map(file => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve(reader.result);
          };
          reader.readAsDataURL(file);
        });
      });

      Promise.all(readPromises).then(results => {
        setImagePreviews(prev => [...prev, ...results]);
      });
    }
  };

  const removeUploadedPhoto = (indexToRemove) => {
    setImagePreviews(prev => prev.filter((_, idx) => idx !== indexToRemove));
  };

  const handleStartEdit = (tree) => {
    setEditingTreeId(tree.id);
    setFormUser(tree.user);
    setFormTitle(tree.title);
    setFormSpecies(tree.species);
    setFormDate(tree.date);
    setFormLocationName(tree.locationName);
    setFormLat(String(tree.lat));
    setFormLng(String(tree.lng));
    setFormCaption(tree.caption);
    setFormWeather(tree.weather || '');
    setSelectedDoodleStyle(tree.doodleStyle || 'layeredPine');
   
    setImagePreviews(tree.images || [tree.image]);
   
    setFormError('');
    setSuccessMessage('');
   
    setCurrentPage('new');
  };

  const handleCancelEdit = () => {
    setEditingTreeId(null);
    clearFormFields();
    setCurrentPage('album');
  };

  const clearFormFields = () => {
    setFormTitle('');
    setFormSpecies('');
    setFormCaption('');
    setFormWeather('');
    setFormLocationName('');
    setImagePreviews([]);
  };

  const handleAddTree = (e) => {
    e.preventDefault();
    setFormError('');
    setSuccessMessage('');

    if (!formTitle || !formLocationName || !formLat || !formLng || !formCaption) {
      setFormError('Please complete all fields to paint roots!');
      return;
    }

    const latVal = parseFloat(formLat);
    const lngVal = parseFloat(formLng);

    if (isNaN(latVal) || isNaN(lngVal)) {
      setFormError('Coordinates must be numeric values.');
      return;
    }

    setIsSubmitting(true);

    const defaultFallbacks = ['https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1000'];

    setTimeout(() => {
      if (editingTreeId) {
        setTrees(prev => prev.map(tree => {
          if (tree.id === editingTreeId) {
            const updated = {
              ...tree,
              user: formUser,
              title: formTitle,
              species: formSpecies || 'Doodled Wild Flora',
              date: formDate,
              locationName: formLocationName,
              lat: latVal,
              lng: lngVal,
              caption: formCaption,
              images: imagePreviews.length > 0 ? imagePreviews : defaultFallbacks,
              weather: formWeather || 'Soft whispering ink rain',
              doodleStyle: selectedDoodleStyle
            };
           
            if (selectedTree && selectedTree.id === editingTreeId) {
              setSelectedTree(updated);
            }
            return updated;
          }
          return tree;
        }));

        setSuccessMessage('Successfully updated and sketched into our chronicle!');
        setEditingTreeId(null);
      } else {
        const newTree = {
          id: `tree-${Date.now()}`,
          user: formUser,
          title: formTitle,
          species: formSpecies || 'Doodled Wild Flora',
          date: formDate,
          locationName: formLocationName,
          lat: latVal,
          lng: lngVal,
          caption: formCaption,
          images: imagePreviews.length > 0 ? imagePreviews : defaultFallbacks,
          weather: formWeather || 'Soft whispering ink rain',
          doodleStyle: selectedDoodleStyle
        };

        setTrees(prev => [newTree, ...prev]);
        setSuccessMessage('Successfully sketched into our chronicle!');
      }

      clearFormFields();
      setIsSubmitting(false);

      setTimeout(() => {
        setCurrentPage('album');
        setSuccessMessage('');
      }, 1000);

    }, 800);
  };

  const handleDeleteTree = (id) => {
    setTrees(prev => prev.filter(tree => tree.id !== id));
    if (selectedTree?.id === id) {
      setSelectedTree(null);
    }
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(prev => prev - 1);
    } else {
      setCurrentMonth(prev => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(prev => prev + 1);
    } else {
      setCurrentMonth(prev => prev + 1);
    }
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
  const calendarGrid = [];

  for (let i = 0; i < firstDay; i++) {
    calendarGrid.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    calendarGrid.push(d);
  }

  const getTreesForDay = (day) => {
    if (!day) return [];
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return trees.filter(tree => tree.date === dateStr);
  };

  const sortedTrees = [...trees].sort((a, b) => new Date(b.date) - new Date(a.date));
  const topTwoRecentTrees = sortedTrees.slice(0, 2);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D2D2D] p-4 md:p-8 relative overflow-x-hidden">
     
      <style>{`
        * {
          font-family: "Bookman Old Style", "Bookman", "URW Bookman L", "Georgia", serif !important;
        }
      `}</style>
     
      <header className={`max-w-7xl mx-auto mb-8 border-b-2 border-[#2D2D2D] ${currentPage === 'home' ? 'pb-3.5' : 'pb-4'} relative z-50`}>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
         
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-black tracking-tight text-emerald-950 cursor-pointer hover:opacity-85 transition flex items-center gap-2" onClick={() => setCurrentPage('home')}>
                Our Tree Chronicle
              </h1>
              {currentPage === 'home' && (
                <p className="text-xs sm:text-sm text-zinc-500 italic mt-3.5 font-medium">
                  We love trees! We log trees we meet every passing day
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between md:justify-end gap-3 w-full md:w-auto">
           
            {currentPage !== 'home' && (
              <div className="inline-flex p-1 bg-[#FDFBF7] border-2 border-[#2D2D2D] rounded-xl">
                <button
                  onClick={() => setSelectedUser('all')}
                  className={`px-3 py-1.5 text-[10px] font-black rounded-lg transition-all flex items-center gap-1.5 ${selectedUser === 'all' ? 'bg-[#2D2D2D] text-white' : 'text-zinc-700 hover:bg-zinc-100'}`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  All
                </button>
                <button
                  onClick={() => setSelectedUser('him')}
                  className={`px-3 py-1.5 text-[10px] font-black rounded-lg transition-all flex items-center gap-1.5 ${selectedUser === 'him' ? 'bg-[#2D2D2D] text-white' : 'text-zinc-700 hover:bg-zinc-100'}`}
                >
                  {TreeDoodles.layeredPine("w-4 h-4", selectedUser === 'him' ? '#FFF' : '#2D2D2D')}
                  Max
                </button>
                <button
                  onClick={() => setSelectedUser('lili')}
                  className={`px-3 py-1.5 text-[10px] font-black rounded-lg transition-all flex items-center gap-1.5 ${selectedUser === 'lili' ? 'bg-[#2D2D2D] text-white' : 'text-zinc-700 hover:bg-zinc-100'}`}
                >
                  {TreeDoodles.curlyCloud("w-4 h-4", selectedUser === 'lili' ? '#FFF' : '#2D2D2D')}
                  Lili
                </button>
              </div>
            )}

            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex flex-col justify-between w-10 h-10 p-3 bg-[#FDFBF7] border-2 border-[#2D2D2D] rounded-xl hover:bg-emerald-50 active:translate-y-0.5 transition"
                aria-label="Toggle Menu"
              >
                <span className="w-full h-0.5 bg-[#2D2D2D] rounded-full"></span>
                <span className="w-full h-0.5 bg-[#2D2D2D] rounded-full"></span>
                <span className="w-full h-0.5 bg-[#2D2D2D] rounded-full"></span>
              </button>

              {menuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-[#FFFDF9] border-2 border-[#2D2D2D] rounded-xl p-2.5 z-50 flex flex-col gap-1">
                  <button
                    onClick={() => { setCurrentPage('home'); setMenuOpen(false); }}
                    className={`w-full text-left text-[11px] p-2.5 rounded-lg font-black transition flex items-center gap-2 ${currentPage === 'home' ? 'bg-[#4E6E58] text-white' : 'hover:bg-[#F4F1EA] text-zinc-700'}`}
                  >
                    <Home className="w-4 h-4" />
                    Home
                  </button>
                  <button
                    onClick={() => { setCurrentPage('album'); setMenuOpen(false); }}
                    className={`w-full text-left text-[11px] p-2.5 rounded-lg font-black transition flex items-center gap-2 ${currentPage === 'album' ? 'bg-[#4E6E58] text-white' : 'hover:bg-[#F4F1EA] text-zinc-700'}`}
                  >
                    <BookOpen className="w-4 h-4" />
                    Album
                  </button>
                  <button
                    onClick={() => { setCurrentPage('map'); setMenuOpen(false); }}
                    className={`w-full text-left text-[11px] p-2.5 rounded-lg font-black transition flex items-center gap-2 ${currentPage === 'map' ? 'bg-[#4E6E58] text-white' : 'hover:bg-[#F4F1EA] text-zinc-700'}`}
                  >
                    <MapIcon className="w-4 h-4" />
                    Map
                  </button>
                  <button
                    onClick={() => { setCurrentPage('calendar'); setMenuOpen(false); }}
                    className={`w-full text-left text-[11px] p-2.5 rounded-lg font-black transition flex items-center gap-2 ${currentPage === 'calendar' ? 'bg-[#4E6E58] text-white' : 'hover:bg-[#F4F1EA] text-zinc-700'}`}
                  >
                    <CalendarIcon className="w-4 h-4" />
                    Calendar
                  </button>
                  <button
                    onClick={() => {
                      setEditingTreeId(null);
                      clearFormFields();
                      setCurrentPage('new');
                      setMenuOpen(false);
                    }}
                    className={`w-full text-left text-[11px] p-2.5 rounded-lg font-black transition flex items-center gap-2 ${currentPage === 'new' && !editingTreeId ? 'bg-[#4E6E58] text-white' : 'hover:bg-[#F4F1EA] text-zinc-700'}`}
                  >
                    <Plus className="w-4 h-4" />
                    Record a new encounter
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto relative z-10">
       
        {/* HOME PAGE */}
        {currentPage === 'home' && (
          <div className="animate-fadeIn max-w-6xl mx-auto py-8 md:py-16 px-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
             
              <div className="md:col-span-6 flex flex-col items-center md:items-start md:-ml-28 justify-center">
                <div className="transform hover:scale-105 transition-transform duration-500 select-none w-full max-w-[800px] scale-120 md:scale-128 origin-left">
                  {CuteDoodles.twoPeople("w-full h-auto", "#5E4C40")}
                </div>
              </div>

              <div className="md:col-span-6 space-y-6">
                <div className="border-b-2 border-[#2D2D2D] pb-2">
                  <h3 className="text-xs font-black text-[#2D2D2D] uppercase tracking-widest flex items-center gap-2">
                    {TreeDoodles.layeredPine("w-5 h-5", "#2D2D2D")} the most recent tree journals
                  </h3>
                </div>

                <div className="flex flex-col gap-6 max-w-md mx-auto md:mx-0">
                  {topTwoRecentTrees.length > 0 ? (
                    topTwoRecentTrees.map((tree, idx) => {
                      const coverPhoto = tree.images && tree.images.length > 0 ? tree.images[0] : (tree.image || 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1000');
                     
                      return (
                        <div
                          key={tree.id}
                          onClick={() => {
                            setSelectedTree(tree);
                            setCurrentPage('album');
                          }}
                          className="bg-[#FDFBF7] p-5 border-2 border-[#2D2D2D] rounded-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 group relative flex flex-col sm:flex-row gap-5 items-center sm:items-start"
                        >
                          <div className="w-24 h-24 flex-shrink-0 border border-zinc-200 bg-[#FCFBF8] p-1 rounded-md relative overflow-hidden">
                            <img
                              src={coverPhoto}
                              alt={tree.title}
                              className="w-full h-full object-cover rounded"
                            />
                            {tree.images && tree.images.length > 1 && (
                              <div className="absolute bottom-1 right-1 bg-black/70 text-white text-[8px] font-black px-1 rounded">
                                +{tree.images.length - 1}
                              </div>
                            )}
                          </div>

                          <div className="flex-1 space-y-1.5 text-center sm:text-left mt-2 sm:mt-0">
                            <div className="flex items-center justify-center sm:justify-start gap-1.5">
                              <span className="px-1.5 py-0.5 text-[8px] uppercase font-black text-[#2D2D2D] bg-[#FDFBF7] border border-[#2D2D2D] rounded">
                                {tree.user === 'him' ? 'Max' : tree.user === 'lili' ? 'Lili' : 'Both'}
                              </span>
                              <span className="text-[9px] text-zinc-400 font-bold">{tree.date}</span>
                            </div>
                           
                            <h4 className="font-black text-sm text-emerald-950 group-hover:text-emerald-700 transition-colors line-clamp-1">
                              {tree.title}
                            </h4>
                           
                            <p className="text-[10px] text-zinc-500 italic line-clamp-1 flex items-center justify-center sm:justify-start gap-1">
                              <MapPin className="w-3 h-3 text-emerald-600"/> {tree.locationName}
                            </p>
                           
                            <p className="text-[11px] text-zinc-600 line-clamp-2 mt-1 leading-relaxed">
                              "{tree.caption}"
                            </p>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <p className="text-xs text-zinc-400 italic">No sketched tree journals logged yet.</p>
                  )}

                  <button
                    onClick={() => {
                      setEditingTreeId(null);
                      clearFormFields();
                      setCurrentPage('new');
                    }}
                    className="mt-2 w-full text-center text-xs font-black border-2 border-[#2D2D2D] py-3.5 px-4 rounded-[12px_8px_14px_6px] bg-[#FDFBF7] hover:bg-[#2D2D2D] hover:text-white text-[#2D2D2D] transition-all flex items-center justify-center gap-2"
                  >
                    <Plus className="w-4.5 h-4.5" />
                    Record a new encounter
                  </button>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ALBUM PAGE */}
        {currentPage === 'album' && (
          <div className="space-y-8 animate-fadeIn">
           
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-black text-emerald-950 uppercase tracking-wide flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#4E6E58]" /> Album
                  </h3>
                </div>
                <button
                  onClick={() => {
                    setEditingTreeId(null);
                    clearFormFields();
                    setCurrentPage('new');
                  }}
                  className="text-xs font-black text-[#4E6E58] hover:text-[#3d5745] transition-all flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" /> Record a new encounter
                </button>
              </div>

              <div className="relative max-w-md w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search species, locations, or journal memories..."
                  className="w-full text-xs p-3 pl-10 pr-10 border-2 border-[#2D2D2D] rounded-[10px_6px_12px_8px] outline-none bg-[#FDFBF7] focus:ring-2 focus:ring-emerald-300"
                />
                <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-black transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {selectedTree && (
              <div className="bg-[#FCFBF8] p-5 rounded-[18px_12px_22px_15px] border-3 border-[#2D2D2D] relative transition-all">
               
                <button
                  onClick={() => setSelectedTree(null)}
                  className="absolute top-3 right-3 text-zinc-500 hover:text-black border-2 border-zinc-300 hover:border-[#2D2D2D] p-1.5 rounded-full transition bg-[#FDFBF7] z-20"
                >
                  <X className="w-4 h-4" />
                </button>
               
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                 
                  <div className="md:col-span-5 flex flex-col items-center">
                    <div className="border-2 border-[#2D2D2D] p-2.5 pb-6 bg-[#FDFBF7] transform rotate-1 w-full max-w-[280px]">
                     
                      <div className="relative w-full aspect-square bg-[#FAF9F5] rounded overflow-hidden group">
                        {(() => {
                          const photosList = selectedTree.images || [selectedTree.image];
                          const activePhoto = photosList[activePhotoIdx] || 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1000';
                         
                          return (
                            <>
                              <img
                                src={activePhoto}
                                alt={selectedTree.title}
                                className="w-full h-full object-cover rounded"
                              />
                             
                              {photosList.length > 1 && (
                                <>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setActivePhotoIdx(prev => (prev === 0 ? photosList.length - 1 : prev - 1));
                                    }}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#FDFBF7]/90 border-2 border-[#2D2D2D] p-1 rounded-full text-zinc-800 hover:bg-[#4E6E58] hover:text-white transition"
                                  >
                                    <ChevronLeft className="w-4 h-4" />
                                  </button>
                                 
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setActivePhotoIdx(prev => (prev === photosList.length - 1 ? 0 : prev + 1));
                                    }}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#FDFBF7]/90 border-2 border-[#2D2D2D] p-1 rounded-full text-zinc-800 hover:bg-[#4E6E58] hover:text-white transition"
                                  >
                                    <ChevronRight className="w-4 h-4" />
                                  </button>
                                </>
                              )}
                             
                              <div className="absolute bottom-2 right-2 bg-[#2D2D2D]/80 text-[#FDFBF7] text-[9px] font-black px-1.5 py-0.5 rounded">
                                {activePhotoIdx + 1} / {photosList.length}
                              </div>
                            </>
                          );
                        })()}
                      </div>

                      {(() => {
                        const photosList = selectedTree.images || [selectedTree.image];
                        if (photosList.length <= 1) return null;
                        return (
                          <div className="flex justify-center items-center gap-1.5 mt-3 flex-wrap">
                            {photosList.map((photo, pIdx) => (
                              <button
                                key={pIdx}
                                onClick={() => setActivePhotoIdx(pIdx)}
                                className={`w-3 h-3 rounded-full border border-[#2D2D2D] transition-all ${activePhotoIdx === pIdx ? 'bg-[#4E6E58] scale-125' : 'bg-[#EBF5FB]'}`}
                              />
                            ))}
                          </div>
                        );
                      })()}
                     
                      <div className="pt-3 text-center text-[9px] text-zinc-400 italic font-bold">
                        Logged {selectedTree.date}
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-7 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[#4E6E58] text-[10px] font-black uppercase">
                        By {selectedTree.user === 'him' ? "Max" : selectedTree.user === 'lili' ? "Lili" : "Both"}
                      </span>
                      {selectedTree.weather && <span className="text-[10px] text-zinc-500 font-medium">{selectedTree.weather}</span>}
                    </div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-black text-emerald-950">{selectedTree.title}</h3>
                      <div className="scale-90 -mt-1">{TreeDoodles[selectedTree.doodleStyle || 'layeredPine']("w-10 h-10", "#2D2D2D")}</div>
                    </div>
                    <p className="text-[11px] text-emerald-800 font-black italic">{selectedTree.species}</p>
                    <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed py-3">
                      "{selectedTree.caption}"
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-[10px] text-zinc-500 pt-1.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-800" />
                      <span className="font-bold text-zinc-700">{selectedTree.locationName}</span>
                      <span className="bg-zinc-100 px-1.5 py-0.5 rounded text-[9px]">({selectedTree.lat.toFixed(3)}, {selectedTree.lng.toFixed(3)})</span>
                    </div>
                   
                    <div className="flex items-center gap-4 pt-3">
                      <button
                        onClick={() => handleStartEdit(selectedTree)}
                        className="text-[11px] text-[#4E6E58] hover:text-[#3d5745] font-black flex items-center gap-1.5 transition-colors"
                      >
                        <PenTool className="w-4 h-4" /> Edit Memory Sketch
                      </button>
                      <button
                        onClick={() => handleDeleteTree(selectedTree.id)}
                        className="text-[11px] text-red-500 hover:text-red-700 font-black flex items-center gap-1.5 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" /> Erase memory sketch
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {trees
                .filter(t => selectedUser === 'all' || t.user === selectedUser || t.user === 'both')
                .filter(t => {
                  if (!searchQuery) return true;
                  const query = searchQuery.toLowerCase();
                  return (
                    t.title.toLowerCase().includes(query) ||
                    (t.species && t.species.toLowerCase().includes(query)) ||
                    t.locationName.toLowerCase().includes(query) ||
                    t.caption.toLowerCase().includes(query)
                  );
                })
                .map((tree, idx) => {
                  const tapeColors = ["#FADBD8", "#D5F5E3", "#FCF3CF", "#D6EAF8"];
                  const randomTapeColor = tapeColors[idx % tapeColors.length];
                 
                  const coverImage = tree.images && tree.images.length > 0 ? tree.images[0] : (tree.image || 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1000');
                 
                  return (
                    <div
                      key={tree.id}
                      onClick={() => setSelectedTree(tree)}
                      className="bg-[#FDFBF7] p-4 border-2 border-[#2D2D2D] rounded-2xl transition-all duration-300 hover:shadow-md cursor-pointer transform hover:-translate-y-1.5 group relative flex flex-col items-center"
                    >
                      <div className="absolute top-2 right-2 z-20 bg-[#FDFBF7] border-2 border-[#2D2D2D] rounded-xl p-1">
                        {TreeDoodles[tree.doodleStyle || 'layeredPine']("w-7 h-7", "#2D2D2D")}
                      </div>
                     
                      <div className="border border-zinc-200 bg-[#FCFBF8] p-1.5 pb-5 rounded-md relative w-full mt-2 overflow-hidden aspect-[4/3]">
                        <img
                          src={coverImage}
                          alt={tree.title}
                          className="w-full h-full object-cover rounded border border-zinc-100"
                        />
                        {tree.images && tree.images.length > 1 && (
                          <span className="absolute bottom-2 right-2 bg-black/75 text-[#FDFBF7] font-bold text-[8px] px-1 rounded">
                            {tree.images.length} photos
                          </span>
                        )}
                      </div>

                      <div className="mt-3 space-y-1.5 text-center w-full">
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-[10px] font-black uppercase text-[#4E6E58]">
                            {tree.user === 'him' ? 'Max' : tree.user === 'lili' ? 'Lili' : 'Both'}
                          </span>
                          <span className="text-[10px] text-zinc-400 font-bold">{tree.date}</span>
                        </div>
                        <h3 className="font-black text-xs text-emerald-950 line-clamp-1 group-hover:text-emerald-700 transition-colors">{tree.title}</h3>
                        <p className="text-[10px] text-zinc-500 italic line-clamp-1 flex items-center justify-center gap-1">
                          <MapPin className="w-3 h-3 text-emerald-600" /> {tree.locationName}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>

            {(() => {
              const filtered = trees
                .filter(t => selectedUser === 'all' || t.user === selectedUser || t.user === 'both')
                .filter(t => {
                  if (!searchQuery) return true;
                  const query = searchQuery.toLowerCase();
                  return (
                    t.title.toLowerCase().includes(query) ||
                    (t.species && t.species.toLowerCase().includes(query)) ||
                    t.locationName.toLowerCase().includes(query) ||
                    t.caption.toLowerCase().includes(query)
                  );
                });
             
              if (filtered.length === 0) {
                return (
                  <div className="py-12 text-center border-2 border-dashed border-[#2D2D2D] rounded-2xl bg-[#FDFBF7] max-w-sm mx-auto relative">
                    <p className="text-xs text-zinc-500 font-black">No sketchbook logs matched your search or filters.</p>
                    <button
                      onClick={() => {
                        setSelectedUser('all');
                        setSearchQuery('');
                      }}
                      className="mt-3 text-[10px] font-black border-2 border-[#2D2D2D] px-3 py-1.5 rounded-lg bg-[#FAF9F6] hover:bg-[#2D2D2D] hover:text-[#FDFBF7] transition"
                    >
                      Clear Filters & Search
                    </button>
                  </div>
                );
              }
              return null;
            })()}
          </div>
        )}

        {/* MAP PAGE */}
        {currentPage === 'map' && (
          <div className="space-y-8 animate-fadeIn">
            <div>
              <h2 className="text-lg font-black text-emerald-950 flex items-center gap-2 uppercase tracking-wide">
                <MapIcon className="w-5 h-5 text-[#4E6E58]" />
                Map
              </h2>
              <p className="text-[10px] text-zinc-500 font-medium mt-1">
                Click anywhere on the map grid to lock in coordinates.
              </p>
            </div>

            <div className="relative w-full h-[500px] bg-sky-50 border-3 border-[#2D2D2D] rounded-2xl overflow-hidden">
              <div id="floating-coordinates-feedback" className="absolute top-4 left-1/2 -translate-x-1/2 z-[1000] opacity-0 transition-opacity duration-300 bg-emerald-800 text-[#FDFBF7] font-bold text-[10px] py-1.5 px-3 rounded-lg text-center pointer-events-none">
                Locked coordinates for your next sketch! 📌
              </div>
              {!mapLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#FDFBF7] z-[1000] gap-2">
                  <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-[11px] text-zinc-500">Unfolding watercolor map layer...</p>
                </div>
              )}
              <div ref={mapContainerRef} className="w-full h-full" style={{ zIndex: 10 }}></div>
            </div>
          </div>
        )}

        {/* CALENDAR PAGE */}
        {currentPage === 'calendar' && (
          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="text-center">
              <h2 className="text-lg font-black text-emerald-950 flex items-center justify-center gap-2 uppercase tracking-wide">
                <CalendarIcon className="w-5 h-5 text-[#4E6E58]" />
                Calendar
              </h2>
            </div>

            <div className="bg-[#FDFBF7] p-6 border-3 border-[#2D2D2D] rounded-2xl">
              <div className="flex items-center justify-between mb-6 pb-3">
                <button
                  onClick={handlePrevMonth}
                  className="p-1.5 border-2 border-[#2D2D2D] rounded-lg hover:bg-zinc-100 transition bg-[#FDFBF7]"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-sm font-black text-emerald-950 uppercase tracking-wider">
                  {monthNames[currentMonth]} {currentYear}
                </span>
                <button
                  onClick={handleNextMonth}
                  className="p-1.5 border-2 border-[#2D2D2D] rounded-lg hover:bg-zinc-100 transition bg-[#FDFBF7]"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-black text-emerald-800 uppercase mb-3">
                <span>Sun</span>
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
              </div>

              <div className="grid grid-cols-7 gap-2 text-center">
                {calendarGrid.map((day, idx) => {
                  const dayTrees = getTreesForDay(day);
                  const hasTrees = dayTrees.length > 0;
                 
                  const targetDateStr = day
                    ? `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
                    : null;
                  const isSelected = selectedDate === targetDateStr;

                  return (
                    <div key={idx} className="aspect-square relative flex items-center justify-center">
                      {day ? (
                        <button
                          onClick={() => {
                            if (hasTrees) {
                              setSelectedDate(isSelected ? null : targetDateStr);
                            }
                          }}
                          disabled={!hasTrees}
                          className={`w-10 h-10 rounded-xl flex flex-col items-center transition-all relative
                            ${hasTrees ? 'justify-start pt-1 font-black cursor-pointer hover:scale-110' : 'justify-center text-zinc-400 cursor-default'}
                            ${isSelected ? 'bg-emerald-700 text-[#FDFBF7] font-bold border-2 border-[#2D2D2D]' : ''}
                            ${hasTrees && !isSelected ? 'border-2 border-dashed border-[#4E6E58] text-emerald-900 bg-[#E8F8F5]' : ''}
                          `}
                        >
                          <span className="text-[11px]">{day}</span>
                          {hasTrees && !isSelected && (
                            <div className="absolute bottom-0.5 flex items-center justify-center scale-75 opacity-90">
                              {TreeDoodles[dayTrees[0]?.doodleStyle || 'layeredPine']("w-4 h-4", "#2D2D2D")}
                            </div>
                          )}
                        </button>
                      ) : (
                        <span className="text-transparent">-</span>
                      )}
                    </div>
                  );
                })}
              </div>

              {selectedDate && (
                <div className="mt-6 p-4 bg-[#FDFBF7] border-2 border-dashed border-[#2D2D2D] rounded-xl space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-emerald-950 font-black">
                      Trees found on: {selectedDate}
                    </span>
                    <button
                      onClick={() => setSelectedDate(null)}
                      className="text-[9px] font-black uppercase px-2 py-1 bg-[#FDFBF7] border-2 border-[#2D2D2D] rounded-md hover:bg-zinc-100 transition"
                    >
                      Reset Date Filter
                    </button>
                  </div>

                  <div className="grid grid-cols-1 gap-2">
                    {trees.filter(t => t.date === selectedDate).map(t => {
                      const cImg = t.images && t.images.length > 0 ? t.images[0] : (t.image || 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=1000');
                      return (
                        <div
                          key={t.id}
                          onClick={() => { setCurrentPage('album'); setSelectedTree(t); }}
                          className="p-3 bg-[#FDFBF7] border border-zinc-200 rounded-xl flex items-center justify-between hover:bg-emerald-50 cursor-pointer transition text-xs"
                        >
                          <div className="flex items-center gap-3">
                            <img src={cImg} className="w-10 h-10 rounded object-cover" />
                            <div>
                              <span className="font-black text-emerald-950">{t.title}</span>
                              <span className="block text-[9px] text-zinc-400 font-bold">{t.species}</span>
                            </div>
                          </div>
                          {TreeDoodles[t.doodleStyle || 'layeredPine']("w-7 h-7", "#2D2D2D")}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* NEW RECORD PAGE */}
        {currentPage === 'new' && (
          <div className="max-w-xl mx-auto space-y-6 animate-fadeIn">
           
            <div>
              <h2 className="text-lg font-black text-emerald-950 flex items-center gap-2 uppercase tracking-wide">
                {editingTreeId ? <Sparkles className="w-5 h-5 text-emerald-700" /> : <Plus className="w-5 h-5 text-[#4E6E58]" />}
                {editingTreeId ? 'Edit Memory Sketch' : 'Record a new encounter'}
              </h2>
              {editingTreeId && (
                <p className="text-[10px] text-zinc-500 font-medium">
                  Updating details for "{formTitle || 'selected sketch'}".
                </p>
              )}
            </div>

            <form onSubmit={handleAddTree} className="bg-[#FDFBF7] p-6 border-3 border-[#2D2D2D] rounded-2xl space-y-4">
               
                {editingTreeId && (
                  <div className="p-3 bg-yellow-50 border-2 border-dashed border-yellow-600 text-yellow-900 text-[10px] font-black rounded-lg flex items-center justify-between">
                    <span>✏️ YOU ARE EDITING AN EXISTING SKETCH</span>
                    <button
                      type="button"
                      onClick={handleCancelEdit}
                      className="underline text-[9px] uppercase tracking-wider text-red-500 hover:text-red-700 font-black"
                    >
                      Cancel
                    </button>
                  </div>
                )}

                <div className="p-3.5 bg-[#FDFBF7] border-2 border-[#2D2D2D] rounded-xl">
                  <label className="block text-[10px] font-black text-[#2D2D2D] mb-1.5 uppercase">Who discovered this tree?</label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setFormUser('him')}
                      className={`p-2 text-xs rounded-xl border-2 transition flex flex-col items-center gap-1.5 ${formUser === 'him' ? 'border-[#2D2D2D] bg-[#2D2D2D] text-white font-bold' : 'border-zinc-300 bg-[#FDFBF7] hover:border-[#2D2D2D]'}`}
                    >
                      <div className="scale-75 h-5 w-5">{TreeDoodles.layeredPine("w-full h-full", formUser === 'him' ? '#FFF' : '#2D2D2D')}</div>
                      <span>Max</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormUser('lili')}
                      className={`p-2 text-xs rounded-xl border-2 transition flex flex-col items-center gap-1.5 ${formUser === 'lili' ? 'border-[#2D2D2D] bg-[#2D2D2D] text-white font-bold' : 'border-zinc-300 bg-[#FDFBF7] hover:border-[#2D2D2D]'}`}
                    >
                      <div className="scale-75 h-5 w-5">{TreeDoodles.curlyCloud("w-full h-full", formUser === 'lili' ? '#FFF' : '#2D2D2D')}</div>
                      <span>Lili</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormUser('both')}
                      className={`p-2 text-xs rounded-xl border-2 transition flex flex-col items-center gap-1.5 ${formUser === 'both' ? 'border-[#2D2D2D] bg-[#2D2D2D] text-white font-bold' : 'border-zinc-300 bg-[#FDFBF7] hover:border-[#2D2D2D]'}`}
                    >
                      <div className="scale-75 h-5 w-5">{TreeDoodles.heartScribble("w-full h-full", formUser === 'both' ? '#FFF' : '#2D2D2D')}</div>
                      <span>Both</span>
                    </button>
                  </div>
                </div>

                <div className="p-4 bg-[#FDFBF7] border-2 border-dashed border-[#4E6E58] rounded-xl">
                  <span className="block text-[10px] font-black text-emerald-950 mb-2 uppercase">
                    Pick Doodle Profile
                  </span>
                  <div className="grid grid-cols-6 gap-2">
                    {Object.keys(TreeDoodles).map((key) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setSelectedDoodleStyle(key)}
                        className={`p-1 border-2 rounded-xl fill-none flex items-center justify-center hover:scale-110 transition ${selectedDoodleStyle === key ? 'border-[#2D2D2D] ring-2 ring-emerald-300 bg-emerald-50' : 'border-zinc-200 bg-[#FDFBF7]'}`}
                      >
                        {TreeDoodles[key]("w-9 h-9", "#2D2D2D")}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-black text-zinc-500 mb-1 uppercase">Tree Title *</label>
                    <input
                      type="text"
                      value={formTitle}
                      onChange={(e) => setFormTitle(e.target.value)}
                      placeholder="e.g. Spiral Willow"
                      className="w-full text-xs p-2.5 border-2 border-[#2D2D2D] rounded-xl outline-none bg-[#FDFBF7]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-zinc-500 mb-1 uppercase">Species Family</label>
                    <input
                      type="text"
                      value={formSpecies}
                      onChange={(e) => setFormSpecies(e.target.value)}
                      placeholder="e.g. Salix Matsudana"
                      className="w-full text-xs p-2.5 border-2 border-[#2D2D2D] rounded-xl outline-none bg-[#FDFBF7]"
                    />
                  </div>
                </div>

                <div className="p-3 border-2 border-[#2D2D2D] bg-[#FDFBF7] rounded-xl space-y-2">
                  <div className="flex justify-between items-center text-[10px] font-black text-emerald-950">
                    <span>Coordinates *</span>
                    <button
                      type="button"
                      onClick={() => setCurrentPage('map')}
                      className="text-xs text-emerald-700 underline font-black"
                    >
                      Set via Map click 🗺
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="text-[9px] text-zinc-400 font-bold">Latitude</span>
                      <input
                        type="text"
                        value={formLat}
                        onChange={(e) => setFormLat(e.target.value)}
                        className="w-full text-xs p-2.5 border border-zinc-300 rounded-lg outline-none bg-[#FDFBF7]"
                        required
                      />
                    </div>
                    <div>
                      <span className="text-[9px] text-zinc-400 font-bold">Longitude</span>
                      <input
                        type="text"
                        value={formLng}
                        onChange={(e) => setFormLng(e.target.value)}
                        className="w-full text-xs p-2.5 border border-zinc-300 rounded-lg outline-none bg-[#FDFBF7]"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-black text-zinc-500 mb-1 uppercase">Location Name *</label>
                    <input
                      type="text"
                      value={formLocationName}
                      onChange={(e) => setFormLocationName(e.target.value)}
                      placeholder="e.g. Kyoto Temple Garden"
                      className="w-full text-xs p-2.5 border-2 border-[#2D2D2D] rounded-xl outline-none bg-[#FDFBF7]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-zinc-500 mb-1 uppercase">Date *</label>
                    <input
                      type="date"
                      value={formDate}
                      onChange={(e) => setFormDate(e.target.value)}
                      className="w-full text-xs p-2.5 border-2 border-[#2D2D2D] rounded-xl outline-none bg-[#FDFBF7]"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-[10px] font-black text-zinc-500 mb-1 uppercase">Weather Mood</label>
                    <input
                      type="text"
                      value={formWeather}
                      onChange={(e) => setFormWeather(e.target.value)}
                      placeholder="e.g. Crisp autumn calm"
                      className="w-full text-xs p-2.5 border-2 border-[#2D2D2D] rounded-xl outline-none bg-[#FDFBF7]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-zinc-500 mb-1 uppercase">Memory Journal *</label>
                    <textarea
                      value={formCaption}
                      onChange={(e) => setFormCaption(e.target.value)}
                      placeholder="Write a warm note under the branches..."
                      rows="3"
                      className="w-full text-xs p-2.5 border-2 border-[#2D2D2D] rounded-xl outline-none resize-none bg-[#FDFBF7]"
                      required
                    ></textarea>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-zinc-500 mb-1 uppercase">
                    Upload Polaroid Photo(s) (Multiple allowed)
                  </label>
                  <div className="border-2 border-dashed border-[#2D2D2D] rounded-xl hover:bg-emerald-50/20 transition p-4 text-center cursor-pointer relative bg-[#FDFBF7] flex flex-col items-center justify-center">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImagesChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="space-y-1.5 text-center">
                      <Camera className="w-7 h-7 mx-auto text-emerald-800" />
                      <p className="text-[10px] text-zinc-600 font-bold">Select, drag or drop one or multiple real photos</p>
                    </div>
                  </div>

                  {imagePreviews.length > 0 && (
                    <div className="mt-4 p-2 bg-[#FDFBF7] border border-zinc-200 rounded-xl">
                      <span className="block text-[9px] font-black uppercase text-zinc-400 mb-2">
                        Selected Photos ({imagePreviews.length})
                      </span>
                      <div className="grid grid-cols-4 gap-2">
                        {imagePreviews.map((preview, pIdx) => (
                          <div key={pIdx} className="relative aspect-square border border-zinc-300 rounded overflow-hidden bg-[#FDFBF7]">
                            <img src={preview} alt="Upload Preview" className="w-full h-full object-cover" />
                            <button
                              type="button"
                              onClick={() => removeUploadedPhoto(pIdx)}
                              className="absolute top-1 right-1 bg-red-500 text-white p-0.5 rounded-full border border-white hover:bg-red-700 transition"
                              title="Delete photo"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {formError && <p className="text-[10px] font-bold text-red-600 bg-red-50 p-2.5 rounded border border-red-300">⚠ {formError}</p>}
                {successMessage && (
                  <p className="text-[10px] font-black text-emerald-900 bg-emerald-50 p-2.5 rounded border-2 border-dashed border-emerald-500 flex items-center gap-1.5 animate-pulse">
                    <Sparkles className="w-3.5 h-3.5" /> {successMessage}
                  </p>
                )}

                <div className="flex flex-col gap-2 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-center bg-[#4E6E58] text-[#FDFBF7] font-black text-xs uppercase tracking-wider py-3 px-4 rounded-[12px_18px_14px_22px] hover:bg-emerald-800 border-2 border-[#2D2D2D] transition-all"
                  >
                    {isSubmitting
                      ? 'Processing Memory Sketch...'
                      : editingTreeId
                      ? 'Save Changes'
                      : 'Insert Tree Sketch'
                    }
                  </button>
                  {editingTreeId && (
                    <button
                      type="button"
                      onClick={handleCancelEdit}
                      className="w-full text-center border-2 border-zinc-300 hover:border-black text-zinc-700 hover:text-black font-bold text-[10px] uppercase tracking-wider py-2.5 rounded-xl transition-colors"
                    >
                      Cancel Editing
                    </button>
                  )}
                </div>
              </form>
          </div>
        )}

      </main>

      <footer className="max-w-7xl mx-auto mt-6 pt-4 border-t border-zinc-200 text-center text-[10px] text-zinc-400">
        <p>© 2026 Our Tree Chronicle</p>
      </footer>

    </div>
  );
}

