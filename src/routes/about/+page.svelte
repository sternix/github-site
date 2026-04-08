<svelte:head>
    <title>Hakkımda - Sternix</title>
</svelte:head>

<section class="page-container">
    <header class="page-header">
        <h1>Ben Kimim?</h1>
        <div class="line"></div>
    </header>

    <div class="about-grid">
        <div class="premium-card">
            <div class="premium-glass about-content">
                <h2>Kısaca Ben</h2>
            <p>
                Merhaba! Ben Sternix. Ağırlıklı olarak Linux sistemleri üzerinde çalışan, DevOps süreçlerine aşık ve açık kaynak teknolojilerini destekleyen bir teknoloji meraklısıyım. 
            </p>
            <p>
                Sadece kod yazmakla kalmıyor; yazılan kodun sunucularda nasıl dağıtıldığı, ağ üzerinde nasıl hareket ettiği ve binlerce kullanıcı altında nasıl tepki verdiği üzerine optimizasyonlar yapıyorum. "Sıfır kesinti" ve "otomasyon" en çok kullandığım kelimeler olabilir.
            </p>

            <h3 class="mt-4">Yetenekler ve Teknolojiler</h3>
            <div class="skills-container">
                <span class="skill-badge">Linux (Debian/RHEL)</span>
                <span class="skill-badge">Docker & K8s</span>
                <span class="skill-badge">SvelteKit</span>
                <span class="skill-badge">Rust & Go</span>
                <span class="skill-badge">AWS & Terraform</span>
                <span class="skill-badge">CI/CD Pipelines</span>
                <span class="skill-badge">Bash Scripting</span>
                <span class="skill-badge">Nginx/HAProxy</span>
            </div>
            </div>
        </div>

        <div class="premium-card">
            <div class="premium-glass timeline">
                <h2>Deneyimler</h2>
                <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">2023 - Günümüz</div>
                <h3>Kıdemli DevOps Mühendisi</h3>
                <p>Kubernetes altyapılarının yönetimi, CI/CD süreçlerinin GitLab CI ile otomatize edilmesi ve izleme metriklerinin (Prometheus & Grafana) oluşturulması.</p>
            </div>
            
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">2021 - 2023</div>
                <h3>Sistem Yöneticisi & Backend Dev</h3>
                <p>Fiziksel sunucu bakımları, yüksek trafikli web uygulamaları için Rust backend mikroservislerinin yazılması.</p>
            </div>

            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-date">2019 - 2021</div>
                <h3>Açık Kaynak Katkıcısı</h3>
                <p>Çeşitli Linux araçlarına ve konteyner orkestrasyon araçlarına hata düzeltmeleri ve dokümantasyon desteği.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .page-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 4rem 2rem;
    }

    .page-header {
        margin-bottom: 4rem;
    }

    h1 {
        font-size: 3rem;
        font-weight: 800;
        margin: 0 0 1rem 0;
        color: #ffffff;
    }

    .line {
        width: 60px;
        height: 4px;
        background: linear-gradient(90deg, #00d2ff, #3a7bd5);
        border-radius: 2px;
    }

    .about-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }

    h2 {
        color: #00d2ff;
        font-size: 1.5rem;
        margin-top: 0;
        margin-bottom: 1.5rem;
    }

    p {
        color: #c9d1d9;
        line-height: 1.8;
        margin-bottom: 1rem;
    }

    .mt-4 {
        margin-top: 2.5rem;
        color: #ffffff;
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }

    /* Skills */
    .skills-container {
        display: flex;
        flex-wrap: wrap;
        gap: 0.8rem;
    }

    .skill-badge {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        padding: 0.5rem 1rem;
        border-radius: 8px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.9rem;
        transition: all 0.3s;
    }

    .skill-badge:hover {
        background: rgba(0, 210, 255, 0.1);
        border-color: #00d2ff;
        color: #ffffff;
        transform: translateY(-2px);
    }

    /* Timeline */
    .timeline {
        position: relative;
    }

    .timeline-item {
        position: relative;
        padding-left: 2rem;
        margin-bottom: 2.5rem;
    }

    .timeline-item:last-child {
        margin-bottom: 0;
    }

    .timeline-item::before {
        content: '';
        position: absolute;
        left: 5px;
        top: 0;
        bottom: -2.5rem;
        width: 1px;
        background: rgba(255, 255, 255, 0.1);
    }

    .timeline-item:last-child::before {
        bottom: 0;
    }

    .timeline-dot {
        position: absolute;
        left: 0;
        top: 5px;
        width: 11px;
        height: 11px;
        border-radius: 50%;
        background: #3a7bd5;
        box-shadow: 0 0 10px rgba(58, 123, 213, 0.5);
    }

    .timeline-date {
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.85rem;
        color: #8b949e;
        margin-bottom: 0.5rem;
    }

    .timeline-item h3 {
        color: #ffffff;
        margin: 0 0 0.5rem 0;
        font-size: 1.1rem;
    }

    .timeline-item p {
        font-size: 0.95rem;
        margin: 0;
        color: #8b949e;
    }

    @media (max-width: 768px) {
        .about-grid { grid-template-columns: 1fr; }
    }
</style>
