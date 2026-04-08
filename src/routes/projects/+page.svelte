<script>
    const projects = [
        {
            title: "Kubernetes Oto-Ölçekleyici",
            description:
                "Go ile yazılmış, custom metrikleri okuyarak K8s podlarını milisaniyeler içinde ölçeklendirebilen HPA alternatifi bir araç.",
            tech: ["Go", "Kubernetes API", "Prometheus"],
            github: "kubernetes-autoscaler",
        },
        {
            title: "DevOps Monitoring Dashboard",
            description:
                "Svelte 5 ve Rust backend kullanarak CI/CD süreçlerini, logları ve sunucu metriklerini tek bir ekranda canlı toplayan pano.",
            tech: ["Svelte 5", "Rust", "WebSocket"],
            github: "devops-dashboard",
        },
        {
            title: "Linux Güvenlik Denetçisi",
            description:
                "Bash scriptleri ile sistem yapılandırmalarını tarayan, zafiyetleri raporlayan ve CIS benchmarklarına göre puan veren otomasyon aracı.",
            tech: ["Bash", "Linux", "Security"],
            github: "linux-audit-script",
        },
        {
            title: "Serverless E-Ticaret API",
            description:
                "Terraform kullanarak AWS altyapısında saniyeler içinde ayağa kalkan, maliyet odaklı serverless e-ticaret altyapısı.",
            tech: ["Terraform", "AWS Lambda", "Node.js"],
            github: "serverless-ecommerce",
        },
    ];
</script>

<svelte:head>
    <title>Projeler - Sternix</title>
</svelte:head>

<section class="page-container">
    <header class="page-header">
        <h1>Açık Kaynak <span class="highlight">Projeler</span></h1>
        <p class="subtitle">Geliştirdiğim ve katkıda bulunduğum projeler</p>
    </header>

    <div class="projects-grid">
        {#each projects as project}
            <div class="premium-card">
                <div class="premium-glass">
                    <div class="project-top">
                        <svg
                            class="folder-icon"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"
                            ></path>
                        </svg>
                        <a
                            href="https://github.com/sternix/{project.github}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="github-link"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                stroke="currentColor"
                                stroke-width="2"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="icon"
                                ><path
                                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                                ></path></svg
                            >
                        </a>
                    </div>

                    <h2 class="project-title">{project.title}</h2>
                    <p class="project-desc">{project.description}</p>

                    <div class="tech-stack">
                        {#each project.tech as tech}
                            <span class="tech-item">{tech}</span>
                        {/each}
                    </div>
                </div>
            </div>
        {/each}
    </div>
</section>

<style>
    .page-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 4rem 2rem;
    }

    .page-header {
        text-align: center;
        margin-bottom: 5rem;
    }

    h1 {
        font-size: 3.5rem;
        font-weight: 800;
        margin: 0;
        color: #ffffff;
    }

    .highlight {
        background: linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .subtitle {
        font-size: 1.25rem;
        color: #8b949e;
        margin-top: 1rem;
    }

    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: 2rem;
    }

    .project-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
    }

    .folder-icon {
        width: 40px;
        height: 40px;
        color: #3a7bd5;
    }

    .github-link {
        color: #8b949e;
        transition: color 0.3s;
    }

    .github-link:hover {
        color: #ffffff;
    }

    .project-title {
        font-size: 1.4rem;
        color: #ffffff;
        margin: 0 0 1rem 0;
    }

    .premium-card:hover .project-title {
        color: #00d2ff;
    }

    .project-desc {
        color: #8b949e;
        line-height: 1.6;
        margin-bottom: 2rem;
        flex-grow: 1;
    }

    .tech-stack {
        display: flex;
        gap: 0.8rem;
        flex-wrap: wrap;
        font-family: "JetBrains Mono", monospace;
        font-size: 0.8rem;
    }

    .tech-item {
        color: #8b949e;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 2.5rem;
        }
    }
</style>
