<script>
    const posts = [
        {
            title: "DevOps Süreçlerinde CI/CD Entegrasyonu",
            category: "DevOps",
            date: "8 Nisan 2026",
            description:
                "Modern yazılım geliştirme süreçlerinde Sürekli Entegrasyon ve Sürekli Dağıtım boru hatlarının nasıl kurulacağı ve yönetileceği hakkında kapsamlı bir rehber.",
            readTime: "7 dk okuma",
            tags: ["Docker", "Kubernetes", "GitLab CI"],
        },
        {
            title: "Linux Çekirdek Parametreleri ve Optimizasyon",
            category: "Linux",
            date: "5 Nisan 2026",
            description:
                "Sunucu performansını artırmak için sysctl üzerinden yapabileceğiniz gelişmiş kernel parametre ayarlamaları ve güvenlik sıkılaştırmaları.",
            readTime: "12 dk okuma",
            tags: ["Sysadmin", "Performance", "Security"],
        },
        {
            title: "Rust ve Svelte 5 ile Tam Yığın Uygulama Geliştirme",
            category: "Programlama",
            date: "2 Nisan 2026",
            description:
                "Backend'de Rust ve frontend'de Svelte 5 kullanarak nasıl yüksek performanslı, güvenli ve modern web uygulamaları geliştirebileceğinizi öğrenin.",
            readTime: "9 dk okuma",
            tags: ["Rust", "Svelte 5", "Web Assembly"],
        },
        {
            title: "Sıfır Kesinti ile Kubernetes Node Güncellemeleri",
            category: "DevOps",
            date: "28 Mart 2026",
            description:
                "Production ortamındaki Kubernetes cluster'ınızda, node'ları sıfır kesinti (zero-downtime) ile nasıl güncelleyeceğinize dair pratik yaklaşımlar.",
            readTime: "10 dk okuma",
            tags: ["Kubernetes", "High Availability"],
        },
        {
            title: "eBPF ile Linux Sistem Gözlemlenebilirliği",
            category: "Linux",
            date: "20 Mart 2026",
            description:
                "Çekirdek seviyesinde sistem logları ve ağ trafiğini izlemek için eBPF (Extended Berkeley Packet Filter) teknolojisinin temelleri.",
            readTime: "15 dk okuma",
            tags: ["eBPF", "Monitoring", "Kernel"],
        },
    ];

    let activeFilter = $state("Tümü");
    const categories = ["Tümü", "Programlama", "DevOps", "Linux"];

    const filteredPosts = $derived(
        activeFilter === "Tümü"
            ? posts
            : posts.filter((post) => post.category === activeFilter),
    );
</script>

<svelte:head>
    <title>Blog - Geliştirici Günlükleri</title>
    <meta
        name="description"
        content="Programlama, DevOps ve Linux sistem yönetimi üzerine teknik makaleler."
    />
</svelte:head>

<main class="blog-container">

    <header class="blog-header">
        <h1 class="glitch" data-text="Terminal & Kod">Terminal & Kod</h1>
        <p class="subtitle">Programlama, DevOps ve Linux dünyasından notlar</p>

        <div class="filters">
            {#each categories as category}
                <button
                    class="filter-btn {activeFilter === category
                        ? 'active'
                        : ''}"
                    onclick={() => (activeFilter = category)}
                >
                    {category}
                </button>
            {/each}
        </div>
    </header>

    <div class="posts-grid">
        {#each filteredPosts as post (post.title)}
            <article class="premium-card">
                <div class="premium-glass">
                    <div class="post-header">
                        <span
                            class="category-badge {post.category.toLowerCase()}"
                            >{post.category}</span
                        >
                        <span class="date">{post.date}</span>
                    </div>
                    <h2 class="post-title">{post.title}</h2>
                    <p class="post-desc">{post.description}</p>
                    <div class="post-footer">
                        <div class="tags">
                            {#each post.tags as tag}
                                <span class="tag">#{tag}</span>
                            {/each}
                        </div>
                        <span class="read-time">{post.readTime}</span>
                    </div>
                </div>
            </article>
        {/each}
    </div>
</main>

<style>
    :global(body) {
        margin: 0;
        background-color: #0d1117;
        color: #c9d1d9;
        font-family: "Outfit", sans-serif;
        overflow-x: hidden;
    }

    .blog-container {
        position: relative;
        max-width: 1200px;
        margin: 0 auto;
        padding: 4rem 2rem;
        min-height: 100vh;
        z-index: 1;
    }

    /* Header & Typography */
    .blog-header {
        text-align: center;
        margin-bottom: 5rem;
    }

    h1 {
        font-size: 4rem;
        font-weight: 800;
        margin: 0;
        color: #ffffff;
        letter-spacing: -1px;
    }

    .subtitle {
        font-size: 1.25rem;
        color: #8b949e;
        margin-top: 1rem;
        font-weight: 300;
    }

    /* Filters */
    .filters {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-top: 3rem;
        flex-wrap: wrap;
    }

    .filter-btn {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: #c9d1d9;
        padding: 0.6rem 1.5rem;
        border-radius: 30px;
        font-size: 1rem;
        font-family: inherit;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        backdrop-filter: blur(10px);
    }

    .filter-btn:hover {
        background: rgba(255, 255, 255, 0.1);
        transform: translateY(-2px);
    }

    .filter-btn.active {
        background: linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%);
        color: white;
        border-color: transparent;
        box-shadow: 0 4px 15px rgba(0, 210, 255, 0.3);
    }

    .posts-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
        gap: 2rem;
    }

    .post-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
    }

    .category-badge {
        font-size: 0.8rem;
        font-weight: 600;
        padding: 0.3rem 0.8rem;
        border-radius: 20px;
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .category-badge.devops {
        background: rgba(56, 189, 248, 0.1);
        color: #38bdf8;
    }
    .category-badge.linux {
        background: rgba(250, 204, 21, 0.1);
        color: #facc15;
    }
    .category-badge.programlama {
        background: rgba(167, 139, 250, 0.1);
        color: #a78bfa;
    }

    .date {
        font-size: 0.85rem;
        color: #8b949e;
    }

    .post-title {
        font-size: 1.5rem;
        color: #ffffff;
        margin: 0 0 1rem 0;
        line-height: 1.4;
        font-weight: 600;
        transition: color 0.3s;
    }

    .premium-card:hover .post-title {
        background: linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .post-desc {
        color: #8b949e;
        line-height: 1.6;
        margin-bottom: 2rem;
        flex-grow: 1;
    }

    .post-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: auto;
        padding-top: 1.5rem;
        border-top: 1px solid rgba(255, 255, 255, 0.05);
    }

    .tags {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
    }

    .tag {
        font-family: "JetBrains Mono", monospace;
        font-size: 0.75rem;
        color: #8b949e;
    }

    .read-time {
        font-size: 0.8rem;
        color: #8b949e;
        display: flex;
        align-items: center;
        gap: 0.3rem;
    }

    .read-time::before {
        content: "⏱";
    }

    /* Responsive */
    @media (max-width: 768px) {
        h1 {
            font-size: 2.5rem;
        }
        .blog-container {
            padding: 2rem 1rem;
        }
        .posts-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
