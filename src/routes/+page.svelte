<script>
    import { onMount } from "svelte";

    let roles = [
        "Programcı",
        "UNIX / Linux Sistem Yöneticisi",
        "PostgreSQL Uzmanı",
        "Açık Kaynak Gönüllüsü",
    ];
    let roleText = $state("");
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    onMount(() => {
        const typeEffect = () => {
            const currentRole = roles[roleIndex];

            if (isDeleting) {
                roleText = currentRole.substring(0, charIndex - 1);
                charIndex--;
            } else {
                roleText = currentRole.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentRole.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typeSpeed = 500; // Pause before typing new
            }

            setTimeout(typeEffect, typeSpeed);
        };

        typeEffect();
    });
</script>

<svelte:head>
    <title>Anasayfa - Geliştirici Portfolyosu</title>
</svelte:head>

<section class="hero-section">
    <div class="glass-hero">
        <h2 class="greeting">Merhaba, Ben</h2>
        <h1 class="name main-glitch" data-text="Yavuz Tanrıverdi">
            Yavuz Tanrıverdi
        </h1>
        <div class="role-container">
            <span class="role-text"
                ># {roleText}<span class="cursor">█</span></span
            >
        </div>
        <p class="description">
            Modern web teknolojileri ile uygulamalar geliştiriyor, sunucu
            mimarileri kuruyor ve Linux sistemlerini optimize ediyorum. Karmaşık
            sistemleri basit, anlaşılır ve yüksek performanslı yapılara
            dönüştürmek en büyük tutkum.
        </p>

        <div class="actions">
            <a href="/projects" class="btn primary-btn">Projeleri İncele</a>
            <a href="/contact" class="btn secondary-btn">Bana Ulaş</a>
        </div>
    </div>
</section>

<style>
    .hero-section {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
        padding: 2rem;
    }

    .glass-hero {
        background: rgba(20, 25, 33, 0.4);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 24px;
        padding: 5rem 4rem;
        max-width: 800px;
        text-align: center;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        animation: fadeUp 0.8s ease-out;
    }

    @keyframes fadeUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .greeting {
        font-family: "JetBrains Mono", monospace;
        color: #00d2ff;
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
    }

    .name {
        font-size: 5rem;
        font-weight: 800;
        margin: 0;
        color: #ffffff;
        letter-spacing: -2px;
    }

    .role-container {
        margin: 1.5rem 0;
        height: 30px;
    }

    .role-text {
        font-family: "JetBrains Mono", monospace;
        font-size: 1.5rem;
        color: #3a7bd5;
    }

    .cursor {
        animation: blink 1s step-end infinite;
    }

    @keyframes blink {
        0%,
        100% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
    }

    .description {
        color: #8b949e;
        font-size: 1.2rem;
        line-height: 1.8;
        margin-bottom: 3rem;
    }

    .actions {
        display: flex;
        gap: 1.5rem;
        justify-content: center;
    }

    .btn {
        text-decoration: none;
        padding: 1rem 2.5rem;
        border-radius: 30px;
        font-weight: 600;
        font-size: 1.1rem;
        transition: all 0.3s;
    }

    .primary-btn {
        background: linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%);
        color: white;
        box-shadow: 0 4px 15px rgba(0, 210, 255, 0.3);
    }

    .primary-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(0, 210, 255, 0.5);
    }

    .secondary-btn {
        background: rgba(255, 255, 255, 0.05);
        color: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .secondary-btn:hover {
        background: rgba(255, 255, 255, 0.1);
        transform: translateY(-3px);
    }

    @media (max-width: 768px) {
        .glass-hero {
            padding: 3rem 1.5rem;
        }
        .name {
            font-size: 3.5rem;
        }
        .role-text {
            font-size: 1.2rem;
        }
        .actions {
            flex-direction: column;
        }
    }
</style>
