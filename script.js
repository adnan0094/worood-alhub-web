// بيانات الصور
const images = [
    {
        id: 'rose_red_01',
        name: 'وردة حمراء جميلة',
        category: 'red',
        url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&h=500&fit=crop',
        description: 'وردة حمراء رمز الحب والعاطفة'
    },
    {
        id: 'rose_red_02',
        name: 'وردة حمراء ناعمة',
        category: 'red',
        url: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=500&h=500&fit=crop',
        description: 'وردة حمراء ناعمة مع قطرات الندى'
    },
    {
        id: 'rose_pink_01',
        name: 'وردة وردية فاتحة',
        category: 'pink',
        url: 'https://images.unsplash.com/photo-1582794543139-f0c7b9f0f0a0?w=500&h=500&fit=crop',
        description: 'وردة وردية فاتحة وناعمة'
    },
    {
        id: 'rose_pink_02',
        name: 'وردة وردية متفتحة',
        category: 'pink',
        url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&h=500&fit=crop',
        description: 'وردة وردية مع أوراق خضراء'
    },
    {
        id: 'rose_white_01',
        name: 'وردة بيضاء نقية',
        category: 'white',
        url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&h=500&fit=crop',
        description: 'وردة بيضاء نقية رمز البراءة'
    },
    {
        id: 'rose_white_02',
        name: 'وردة بيضاء ناعمة',
        category: 'white',
        url: 'https://images.unsplash.com/photo-1582794543139-f0c7b9f0f0a0?w=500&h=500&fit=crop',
        description: 'وردة بيضاء ناعمة مع ملمس ناعم'
    },
    {
        id: 'rose_yellow_01',
        name: 'وردة صفراء مشرقة',
        category: 'yellow',
        url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&h=500&fit=crop',
        description: 'وردة صفراء مشرقة رمز الفرح'
    },
    {
        id: 'rose_yellow_02',
        name: 'وردة صفراء متفتحة',
        category: 'yellow',
        url: 'https://images.unsplash.com/photo-1582794543139-f0c7b9f0f0a0?w=500&h=500&fit=crop',
        description: 'وردة صفراء متفتحة بجمال طبيعي'
    },
    {
        id: 'nature_flowers_01',
        name: 'زهور برية جميلة',
        category: 'nature',
        url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500&h=500&fit=crop',
        description: 'زهور برية جميلة في الطبيعة'
    },
    {
        id: 'nature_flowers_02',
        name: 'حقل مليء بالزهور',
        category: 'nature',
        url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500&h=500&fit=crop',
        description: 'حقل مليء بالزهور الملونة'
    },
    {
        id: 'nature_flowers_03',
        name: 'زهور في ضوء الشمس',
        category: 'nature',
        url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500&h=500&fit=crop',
        description: 'زهور برية في ضوء الشمس الذهبي'
    },
    {
        id: 'nature_flowers_04',
        name: 'حديقة طبيعية',
        category: 'nature',
        url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500&h=500&fit=crop',
        description: 'حديقة طبيعية مع زهور متنوعة'
    }
];

// الاقتباسات
const quotes = [
    'الحب هو أجمل شعور في العالم 🌹',
    'الورود تتحدث لغة الحب والرومانسية 💕',
    'في كل وردة، هناك قصة حب جميلة 💐',
    'الحب مثل الوردة، ناعم وجميل وعطر 🌺',
    'الورود الحمراء رمز الحب الخالد ❤️',
    'الجمال الحقيقي يكمن في بساطة الطبيعة 🌸',
    'الحب ينمو مثل الورود في حديقة القلب 🌷',
    'كل وردة تحمل معها رسالة حب 💌',
    'الطبيعة تعلمنا أن الحب أجمل من كل شيء 🌼',
    'في عطر الورود، نجد عطر الحب الأبدي 🌹'
];

// المتغيرات
let currentImageIndex = 0;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let currentFilter = 'all';

// تهيئة الموقع
document.addEventListener('DOMContentLoaded', () => {
    displayImage();
    displayQuote();
    renderGallery();
    renderFavorites();
    setupNavigation();
});

// عرض الصورة الحالية
function displayImage() {
    const image = images[currentImageIndex];
    document.getElementById('mainImage').src = image.url;
    document.getElementById('imageName').textContent = image.name;
    document.getElementById('imageDesc').textContent = image.description;
    document.getElementById('imageCategory').textContent = getCategoryName(image.category);
    document.getElementById('imageCounter').textContent = `${currentImageIndex + 1} / ${images.length}`;
    
    updateFavoriteButton();
}

// الصورة التالية
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    displayImage();
}

// الصورة السابقة
function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    displayImage();
}

// صورة عشوائية
function randomImage() {
    currentImageIndex = Math.floor(Math.random() * images.length);
    displayImage();
}

// إضافة/إزالة من المفضلة
function toggleFavorite() {
    const imageId = images[currentImageIndex].id;
    if (favorites.includes(imageId)) {
        favorites = favorites.filter(id => id !== imageId);
    } else {
        favorites.push(imageId);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoriteButton();
    renderFavorites();
}

// تحديث زر المفضلة
function updateFavoriteButton() {
    const btn = document.getElementById('favoriteBtn');
    const imageId = images[currentImageIndex].id;
    if (favorites.includes(imageId)) {
        btn.classList.add('active');
        btn.textContent = '❤️ مفضلة';
    } else {
        btn.classList.remove('active');
        btn.textContent = '❤️ إضافة';
    }
}

// عرض الاقتباس
function displayQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote').textContent = quote;
}

// تصفية المعرض
function filterGallery(category) {
    currentFilter = category;
    
    // تحديث الأزرار النشطة
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    renderGallery();
}

// عرض المعرض
function renderGallery() {
    const gallery = document.getElementById('galleryGrid');
    gallery.innerHTML = '';
    
    const filteredImages = currentFilter === 'all' 
        ? images 
        : images.filter(img => img.category === currentFilter);
    
    filteredImages.forEach((image, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `
            <img src="${image.url}" alt="${image.name}">
            <div class="gallery-item-overlay">${image.name}</div>
        `;
        item.onclick = () => {
            currentImageIndex = images.indexOf(image);
            displayImage();
            document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
        };
        gallery.appendChild(item);
    });
}

// عرض المفضلة
function renderFavorites() {
    const favoritesGrid = document.getElementById('favoritesGrid');
    
    if (favorites.length === 0) {
        favoritesGrid.innerHTML = `
            <div class="empty-state">
                <p>💔 لا توجد صور مفضلة بعد</p>
                <p class="small">أضف صورك المفضلة بالضغط على قلب الحب</p>
            </div>
        `;
        return;
    }
    
    favoritesGrid.innerHTML = '';
    
    favorites.forEach(favoriteId => {
        const image = images.find(img => img.id === favoriteId);
        if (image) {
            const item = document.createElement('div');
            item.className = 'favorite-item';
            item.innerHTML = `
                <img src="${image.url}" alt="${image.name}">
                <button class="favorite-remove" onclick="removeFavorite('${favoriteId}')">✕</button>
            `;
            favoritesGrid.appendChild(item);
        }
    });
}

// إزالة من المفضلة
function removeFavorite(imageId) {
    favorites = favorites.filter(id => id !== imageId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderFavorites();
    updateFavoriteButton();
}

// الحصول على اسم الفئة
function getCategoryName(category) {
    const names = {
        'red': '🔴 ورود حمراء',
        'pink': '💗 ورود وردية',
        'white': '⚪ ورود بيضاء',
        'yellow': '🟡 ورود صفراء',
        'nature': '🌿 طبيعة وزهور'
    };
    return names[category] || category;
}

// التمرير إلى المعرض
function scrollToGallery() {
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
}

// إعداد التنقل
function setupNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
}

// اختصارات لوحة المفاتيح
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') previousImage();
    if (e.key === ' ') {
        e.preventDefault();
        randomImage();
    }
    if (e.key === 'f' || e.key === 'F') toggleFavorite();
});
