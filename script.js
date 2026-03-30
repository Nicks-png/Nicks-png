// Dados do perfil (será preenchido com dados reais do Instagram)
const profileData = {
    username: "@nicks-png",
    fullName: "",
    bio: "Bio do perfil Instagram",
    profilePic: "https://via.placeholder.com/150",
    posts: 0,
    followers: 0,
    following: 0,
    postsImages: []
};

// DOM Elements
const profilePicEl = document.getElementById('profile-pic');
const usernameEl = document.getElementById('username');
const bioEl = document.getElementById('bio');
const postsCountEl = document.getElementById('posts-count');
const followersCountEl = document.getElementById('followers-count');
const followingCountEl = document.getElementById('following-count');
const galleryEl = document.getElementById('gallery');
const ctaButton = document.querySelector('.cta-button');

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    loadProfile();
    renderGallery();
    setupButton();
});

// Carregar dados do perfil
function loadProfile() {
    // Usa dados locais primeiro (podem ser substituídos por fetch de API)
    const savedData = localStorage.getItem('instagramProfile');
    if (savedData) {
        profileData = JSON.parse(savedData);
    }

    // Atualiza DOM
    profilePicEl.src = profileData.profilePic;
    profilePicEl.alt = `Foto de perfil de ${profileData.username}`;
    usernameEl.textContent = profileData.username;
    bioEl.textContent = profileData.bio;
    postsCountEl.textContent = formatNumber(profileData.posts);
    followersCountEl.textContent = formatNumber(profileData.followers);
    followingCountEl.textContent = formatNumber(profileData.following);
}

// Renderizar galeria de posts
function renderGallery() {
    if (!profileData.postsImages || profileData.postsImages.length === 0) {
        // Se não houver dados, mostra placeholder
        galleryEl.innerHTML = `
            <div class="loading"></div>
        `;
        return;
    }

    galleryEl.innerHTML = profileData.postsImages.map(post => `
        <div class="gallery-item">
            <img src="${post.image}" alt="Post do ${profileData.username}" loading="lazy">
            <div class="overlay">
                <span class="likes">❤️ ${formatNumber(post.likes)}</span>
            </div>
        </div>
    `).join('');
}

// Configurar botão CTA
function setupButton() {
    ctaButton.href = `https://instagram.com/${profileData.username.replace('@', '')}`;
}

// Formatar números (ex: 1500 -> 1.5K)
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toLocaleString('pt-BR');
}

// Atualizar dados do perfil (chamado externamente)
function updateProfile(data) {
    profileData = { ...profileData, ...data };
    localStorage.setItem('instagramProfile', JSON.stringify(profileData));
    loadProfile();
    renderGallery();
}

// Permitir atualização via console (útil para debugging)
window.updateProfileFromConsole = updateProfile;

console.log('Site carregado! Para atualizar dados do perfil, use:');
console.log('updateProfileFromConsole({ bio: "nova bio", followers: 1000, ... })');
