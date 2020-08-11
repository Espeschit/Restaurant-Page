let menu = () => {
    let menuContent = document.createElement('div');
    menuContent.className = 'menuPage';

    let menuHero = document.createElement('div');
    menuHero.className = 'menuHero';

    let breakfastSection = document.createElement('section');
    let breakfastTitle = document.createElement('h2');
    breakfastTitle.className = 'menuTitle'
    breakfastTitle.textContent = 'Breakfast';
    breakfastSection.appendChild(breakfastTitle);

    let breakfastUl = document.createElement('ul');
    breakfastUl.className = 'menuUl';
    breakfastSection.appendChild(breakfastUl);

    let b0Li = document.createElement('li');
    b0Li.className='menuLi';
    b0Li.textContent='Skyr';
    let b1Li = document.createElement('li');
    b1Li.className='menuLi';
    b1Li.textContent='Hræringur';
    let b2Li = document.createElement('li');
    b2Li.className='menuLi';
    b2Li.textContent='Blood Pudding';
    let b3Li = document.createElement('li');
    b3Li.className='menuLi';
    b3Li.textContent='Haframjölskökur';

    breakfastUl.appendChild(b0Li);
    breakfastUl.appendChild(b1Li);
    breakfastUl.appendChild(b2Li);
    breakfastUl.appendChild(b3Li);


    let lunchSection = document.createElement('section');

    let lunchTitle = document.createElement('h2');
    lunchTitle.className = 'menuTitle'
    lunchTitle.textContent = 'Lunch';
    lunchSection.appendChild(lunchTitle);

    let lunchUl = document.createElement('ul');
    lunchUl.className = 'menuUl';
    lunchSection.appendChild(lunchUl);

    let l0Li = document.createElement('li');
    l0Li.className='menuLi';
    l0Li.textContent='Svið';
    let l1Li = document.createElement('li');
    l1Li.className='menuLi';
    l1Li.textContent='Slátur';
    let l2Li = document.createElement('li');
    l2Li.className='menuLi';
    l2Li.textContent='Hangikjöt';
    let l3Li = document.createElement('li');
    l3Li.className='menuLi';
    l3Li.textContent='Þorramatur';

    lunchUl.appendChild(l0Li);
    lunchUl.appendChild(l1Li);
    lunchUl.appendChild(l2Li);
    lunchUl.appendChild(l3Li);


    let dinnerSection = document.createElement('section');
    
    let dinnerTitle = document.createElement('h2');
    dinnerTitle.className = 'menuTitle'
    dinnerTitle.textContent = 'Dinner';
    dinnerSection.appendChild(dinnerTitle);

    let dinnerUl = document.createElement('ul');
    dinnerUl.className = 'menuUl';
    dinnerSection.appendChild(dinnerUl);

    let d0Li = document.createElement('li');
    d0Li.className='menuLi';
    d0Li.textContent='Hákarl';
    let d1Li = document.createElement('li');
    d1Li.className='menuLi';
    d1Li.textContent='Kjötsupa';
    let d2Li = document.createElement('li');
    d2Li.className='menuLi';
    d2Li.textContent='Harðfiskur';
    let d3Li = document.createElement('li');
    d3Li.className='menuLi';
    d3Li.textContent='Hrútspungar';

    dinnerUl.appendChild(d0Li);
    dinnerUl.appendChild(d1Li);
    dinnerUl.appendChild(d2Li);
    dinnerUl.appendChild(d3Li);

    menuHero.appendChild(breakfastSection);
    menuHero.appendChild(lunchSection);
    menuHero.appendChild(dinnerSection);

    menuContent.appendChild(menuHero)

    return menuContent;
}

export { menu }