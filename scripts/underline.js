function underline(active) {
    let main = document.getElementById("main");
    let stats = document.getElementById("stats");
    let evochain = document.getElementById("evochain");

    main.classList.remove("border");
    stats.classList.remove("border");
    evochain.classList.remove("border");

    if (active === "main") {
        main.classList.add("border");
    } else if (active === "stats") {
        stats.classList.add("border");
    } else if (active === "evochain") {
        evochain.classList.add("border");
    }
}