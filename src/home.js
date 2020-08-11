let home = () => {
    let homeContent = document.createElement('div');
    homeContent.className = 'homePage';

    let image = document.createElement('img');
    image.width = 90
    image.height = 90
    image.src = '/assets/images/logo.png';

    let title = document.createElement('div');
    title.className = 'title';
    title.textContent = 'ÍSLANDSMÁL CAFÉ';

    let subtitleDescription = document.createElement('div');
    subtitleDescription.className = 'subtitle';
    subtitleDescription.textContent = 'Café and Restaurant located in the heart of Reykjavík';

    let subtitleInfo = document.createElement('div');
    subtitleInfo.className = 'subtitle';
    subtitleInfo.textContent = 'Open 7 days a week 08:00 - 23:00';

    homeContent.appendChild(title);
    homeContent.appendChild(subtitleDescription);
    homeContent.appendChild(subtitleInfo);
    return homeContent
}


export { home };