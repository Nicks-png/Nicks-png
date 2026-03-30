// Dados do perfil (carregados do JSON)
let profileData = {
    username: "@runebass_",
    bio: "Comunidade<br>Run the Beat, Feel the Bass!",
    profilePic: "https://via.placeholder.com/180/ff3366/ffffff?text=RTB",
    posts: 73,
    followers: 57800,
    following: 81,
    postsImages: [
        { image: "https://via.placeholder.com/600x600/ff3366/ffffff?text=Bass+1", likes: 2500 },
        { image: "https://via.placeholder.com/600x600/33ccff/ffffff?text=Bass+2", likes: 3200 },
        { image: "https://via.placeholder.com/600x600/ffcc00/ffffff?text=Bass+3", likes: 1800 },
        { image: "https://via.placeholder.com/600x600/ff3366/ffffff?text=Bass+4", likes: 4100 },
        { image: "https://via.placeholder.com/600x600/6633ff/ffffff?text=Bass+5", likes: 2100 },
        { image: "https://via.placeholder.com/600x600/ff6633/ffffff?text=Bass+6", likes: 2900 }
    ]
};

// DOM Elements
const profilePicEl = document.getElementById('profile-pic');
const usernameEl = document.getElementById('username');
const bioEl = document.getElementById('bio');
const postsCountEl = document.getElementById('posts-count');
const followersCountEl = document.getElementById('followers-count');
const followingCountEl = document.getElementById('following-count');
const galleryEl = document.getElementById('gallery');

// Inicialização
document.addEventListener('DOMContentLoaded', async () => {
    await loadProfile();
    renderGallery();
});

// Carregar dados do perfil
async function loadProfile() {
    try {
        const response = await fetch('profile-data.json');
        if (response.ok) {
            const data = await response.json();
            profileData = { ...profileData, ...data };
        }
    } catch (e) {
        console.log('profile-data.json não encontrado, usando dados padrão');
    }

    const savedData = localStorage.getItem('runthebeat_profile');
    if (savedData) {
        profileData = { ...profileData, ...JSON.parse(savedData) };
    }

    // Atualiza DOM
    profilePicEl.src = profileData.profilePic;
    profilePicEl.alt = "Run the Beat Logo";
    usernameEl.textContent = profileData.username;
    bioEl.innerHTML = profileData.bio.replace(/\n/g, '<br>');
    postsCountEl.textContent = formatNumber(profileData.posts);
    followersCountEl.textContent = formatNumber(profileData.followers);
    followingCountEl.textContent = formatNumber(profileData.following);
}

// Renderizar galeria
function renderGallery() {
    if (!profileData.postsImages || profileData.postsImages.length === 0) {
        galleryEl.innerHTML = '<div class="loading"><div class="loading-card"></div><div class="loading-card"></div><div class="loading-card"></div><div class="loading-card"></div><div class="loading-card"></div><div class="loading-card"></div></div>';
        return;
    }

    galleryEl.innerHTML = profileData.postsImages.map(post => `
        <div class="gallery-item">
            <img src="${post.image}" alt="Post do perfil" loading="lazy">
            <div class="gallery-overlay">
                <span class="likes">❤️ ${formatNumber(post.likes)}</span>
            </div>
        </div>
    `).join('');
}

// Formatar números
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toLocaleString('pt-BR');
}

// API para atualizar dados
function updateProfile(data) {
    profileData = { ...profileData, ...data };
    localStorage.setItem('runthebeat_profile', JSON.stringify(profileData));
    loadProfile();
    renderGallery();
}

window.updateProfile = updateProfile;

console.log('Run the Beat - Site carregado!');
console.log('Use updateProfile({...}) para atualizar dados.');
