<script>
    let formState = $state({
        name: "",
        email: "",
        message: "",
    });

    let status = $state("idle"); // idle, loading, success

    const handleSubmit = (e) => {
        e.preventDefault();
        status = "loading";
        // Simulate sending fake email
        setTimeout(() => {
            status = "success";
            formState = { name: "", email: "", message: "" };
            setTimeout(() => (status = "idle"), 3000);
        }, 1500);
    };
</script>

<svelte:head>
    <title>İletişim - Sternix</title>
</svelte:head>

<section class="page-container">
    <header class="page-header">
        <h1>İletişime <span class="highlight">Geç</span></h1>
        <p class="subtitle">
            Bir projeniz mi var veya sadece merhaba mı demek istiyorsunuz?
        </p>
    </header>

    <div class="contact-grid">
        <div class="contact-info">
            <div class="premium-card">
                <div class="premium-glass info-box">
                    <div class="icon-bg">
                        <svg
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                        >
                            <path
                                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                            ></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                    </div>
                    <div>
                        <h3>Email</h3>
                        <p>hello@sternix.dev</p>
                    </div>
                </div>
            </div>

            <div class="premium-card">
                <div class="premium-glass info-box">
                    <div class="icon-bg">
                        <svg
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                        >
                            <path
                                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                            ></path>
                        </svg>
                    </div>
                    <div>
                        <h3>GitHub</h3>
                        <p>github.com/sternix</p>
                    </div>
                </div>
            </div>

            <div class="premium-card">
                <div class="premium-glass info-box">
                    <div class="icon-bg">
                        <svg
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                        >
                            <path
                                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                            ></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </div>
                    <div>
                        <h3>LinkedIn</h3>
                        <p>linkedin.com/in/sternix</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="premium-card">
            <form class="premium-glass contact-form" onsubmit={handleSubmit}>
                <h2>Mesaj Gönder</h2>

                <div class="form-group">
                    <label for="name">İsim</label>
                    <input
                        type="text"
                        id="name"
                        bind:value={formState.name}
                        required
                        placeholder="Adınız"
                    />
                </div>

                <div class="form-group">
                    <label for="email">E-posta</label>
                    <input
                        type="email"
                        id="email"
                        bind:value={formState.email}
                        required
                        placeholder="ornek@email.com"
                    />
                </div>

                <div class="form-group">
                    <label for="message">Mesajınız</label>
                    <textarea
                        id="message"
                        bind:value={formState.message}
                        required
                        placeholder="Size nasıl yardımcı olabilirim?"
                        rows="5"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    class="submit-btn"
                    disabled={status === "loading"}
                >
                    {#if status === "loading"}
                        Gönderiliyor...
                    {:else if status === "success"}
                        Gönderildi! ✓
                    {:else}
                        Gönder
                    {/if}
                </button>
            </form>
        </div>
    </div>
</section>

<style>
    .page-container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 4rem 2rem;
    }

    .page-header {
        text-align: center;
        margin-bottom: 4rem;
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
        font-size: 1.2rem;
        color: #8b949e;
        margin-top: 1rem;
    }

    .contact-grid {
        display: grid;
        grid-template-columns: 1fr 1.5fr;
        gap: 2rem;
    }

    .contact-info {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .info-box {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        padding: 1.5rem;
        transition: transform 0.3s;
        cursor: default;
    }

    .info-box:hover {
        transform: translateY(-5px);
        background: rgba(255, 255, 255, 0.05);
    }

    .icon-bg {
        background: rgba(0, 210, 255, 0.1);
        color: #00d2ff;
        width: 50px;
        height: 50px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .info-box h3 {
        margin: 0 0 0.2rem 0;
        color: #ffffff;
        font-size: 1.1rem;
    }

    .info-box p {
        margin: 0;
        color: #8b949e;
        font-size: 0.95rem;
    }

    /* Form Styles */
    .contact-form h2 {
        color: #ffffff;
        margin-top: 0;
        margin-bottom: 2rem;
    }

    .form-group {
        margin-bottom: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    label {
        color: #8b949e;
        font-size: 0.9rem;
        font-family: "JetBrains Mono", monospace;
    }

    input,
    textarea {
        background: rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        padding: 1rem;
        color: #ffffff;
        font-family: inherit;
        font-size: 1rem;
        transition: all 0.3s;
    }

    input:focus,
    textarea:focus {
        outline: none;
        border-color: #3a7bd5;
        box-shadow: 0 0 0 2px rgba(58, 123, 213, 0.2);
    }

    .submit-btn {
        width: 100%;
        padding: 1.2rem;
        border-radius: 10px;
        border: none;
        background: linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%);
        color: white;
        font-weight: 600;
        font-size: 1.1rem;
        cursor: pointer;
        transition: all 0.3s;
    }

    .submit-btn:not(:disabled):hover {
        box-shadow: 0 8px 20px rgba(0, 210, 255, 0.3);
        transform: translateY(-2px);
    }

    .submit-btn:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    @media (max-width: 768px) {
        .contact-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
