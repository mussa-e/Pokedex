function underline(active) {
    let main = document.getElementById("main");
    let stats = document.getElementById("stats");
    let evochain = document.getElementById("evochain");

    main.classList.remove("underline");
    stats.classList.remove("underline");
    evochain.classList.remove("underline");

    if (active === "main") {
        main.classList.add("underline");
    } else if (active === "stats") {
        stats.classList.add("underline");
    } else if (active === "evochain") {
        evochain.classList.add("underline");
    }
}