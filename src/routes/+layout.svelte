<script>
    import favicon from "$lib/assets/favicon.svg";
    import { page } from "$app/stores";
    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

<div class="layout-container">
    <!-- Ambient Background effect shared across all pages -->
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>

    <nav class="glass-nav">
        <div class="nav-content">
            <a href="/" class="logo"># sternix <span class="cursor">█</span></a>
            <div class="nav-links">
                <a href="/" class={$page.url.pathname === "/" ? "active" : ""}
                    >Anasayfa</a
                >
                <a
                    href="/projects"
                    class={$page.url.pathname === "/projects" ? "active" : ""}
                    >Projeler</a
                >
                <a
                    href="/blog"
                    class={$page.url.pathname.startsWith("/blog")
                        ? "active"
                        : ""}>Blog</a
                >
                <a
                    href="/about"
                    class={$page.url.pathname === "/about" ? "active" : ""}
                    >Hakkımda</a
                >
                <a
                    href="/contact"
                    class={$page.url.pathname === "/contact" ? "active" : ""}
                    >İletişim</a
                >
            </div>
        </div>
    </nav>

    <main class="content-wrapper">
        {@render children()}
    </main>
</div>

<style>
    :global(body) {
        margin: 0;
        background-color: #0d1117;
        color: #c9d1d9;
        font-family: "Outfit", sans-serif;
        overflow-x: hidden;
    }

    :global(*) {
        box-sizing: border-box;
    }

    /* Ambient Background effect */
    .blob {
        position: fixed;
        border-radius: 50%;
        filter: blur(80px);
        z-index: -1;
        opacity: 0.5;
        animation: float 20s infinite ease-in-out alternate;
    }

    .blob-1 {
        top: -10%;
        left: -10%;
        width: 50vw;
        height: 50vw;
        background: rgba(138, 43, 226, 0.15);
    }

    .blob-2 {
        bottom: -20%;
        right: -10%;
        width: 60vw;
        height: 60vw;
        background: rgba(0, 210, 255, 0.1);
        animation-delay: -5s;
    }

    .blob-3 {
        top: 40%;
        left: 50%;
        width: 40vw;
        height: 40vw;
        background: rgba(43, 226, 138, 0.08);
        animation-delay: -10s;
        transform: translate(-50%, -50%);
    }

    @keyframes float {
        0% {
            transform: translate(0, 0) scale(1);
        }
        50% {
            transform: translate(50px, 30px) scale(1.1);
        }
        100% {
            transform: translate(-30px, 50px) scale(0.9);
        }
    }

    /* Navigation */
    .glass-nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 70px;
        background: rgba(13, 17, 23, 0.8);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        z-index: 100;
        display: flex;
        justify-content: center;
    }

    .nav-content {
        width: 100%;
        max-width: 1200px;
        padding: 0 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .logo {
        font-family: "JetBrains Mono", monospace;
        font-weight: 700;
        font-size: 1.5rem;
        color: #ffffff;
        text-decoration: none;
        letter-spacing: -2px;
        background: linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .logo .cursor {
        display: inline-block;
        width: 10px;
        animation: blink 1s step-end infinite;
    }

    @keyframes blink {
        50% {
            opacity: 0;
        }
    }

    .nav-links {
        display: flex;
        gap: 2rem;
    }

    .nav-links a {
        color: #8b949e;
        text-decoration: none;
        font-size: 1rem;
        font-weight: 500;
        transition: color 0.3s;
        position: relative;
    }

    .nav-links a:hover,
    .nav-links a.active {
        color: #ffffff;
    }

    .nav-links a.active::after {
        content: "";
        position: absolute;
        bottom: -24px;
        left: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, #00d2ff, #3a7bd5);
        border-radius: 2px;
        box-shadow: 0 -2px 10px rgba(0, 210, 255, 0.5);
    }

    .content-wrapper {
        margin-top: 70px;
        min-height: calc(100vh - 70px);
        display: flex;
        flex-direction: column;
    }
</style>
