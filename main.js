function rd(target) {
    // Redirects the user to a subpage, or another page.
    if (target == "git") {window.location = "https://github.com/orgs/PyBotDevs/repositories";}
    else if (target == "isobot") {window.location = "https://github.com/PyBotDevs/isobot";}
    else if (target == "yatodb") {window.location = "https://PyBotDevs.github.io/yatodb";}
    else if (target == "iso6.9") {window.location = "https://github.com/PyBotDevs/iso6.9";}
    else if (target == "skyblockpy") {window.location = "https://github.com/PyBotDevs/skyblockpy";}
    else if (target == "codebot") {window.location = "https://github.com/PyBotDevs/codebot";}
    else if (target == "server") {window.location = "https://discord.gg/b5pz8T6Yjr";}
    else {console.error("Page target does not exist.");}
}
