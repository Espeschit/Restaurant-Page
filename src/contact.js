let contact = () => {
    let contactContent = document.createElement('div');
    contactContent.className = 'contactPage';

    let image = document.createElement('img');
    image.width = 90
    image.height = 90
    image.src = '/assets/images/logo.png';

    let contactHero = document.createElement('div');
    contactHero.className = 'contactHero';

    let contactTitle = document.createElement('div');
    contactTitle.className = 'contactTitle';
    contactTitle.textContent = 'Send us an email'

    contactHero.appendChild(contactTitle);

    let form = document.createElement('form');
    
    let nameSection = document.createElement('section');
    let emailSection = document.createElement('section');
    let subjectSection = document.createElement('section');
    subjectSection.className = 'subjectSection';
    let messageSection = document.createElement('section');
    messageSection.className = 'messageSection';

    let nameLabel = document.createElement('label');
    nameLabel.for ='name';
    nameLabel.textContent = 'Name *';

    let nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.id = 'name';
    nameInput.required = true;

    nameSection.appendChild(nameLabel);
    nameSection.appendChild(nameInput);

    let emailLabel = document.createElement('label');
    emailLabel.for ='email';
    emailLabel.textContent = 'E-mail *';

    let emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.id = 'email';
    emailInput.required = true;

    emailSection.appendChild(emailLabel);
    emailSection.appendChild(emailInput);

    let subjectLabel = document.createElement('label');
    subjectLabel.for ='subject';
    subjectLabel.textContent = 'Subject *';

    let subjectInput = document.createElement('input');
    subjectInput.type = 'text';
    subjectInput.name = 'subject';
    subjectInput.id = 'subject';
    subjectInput.required = true;

    subjectSection.appendChild(subjectLabel);
    subjectSection.appendChild(subjectInput);

    let messageLabel = document.createElement('label');
    messageLabel.className = 'messageLabel';
    messageLabel.for ='message';
    messageLabel.textContent = 'Message *';

    let messageInput = document.createElement('textarea');
    messageInput.cols = '30';
    messageInput.rows = '10';
    messageInput.name = 'message';
    messageInput.id = 'message';
    messageInput.required = true;
    messageInput.writable = true;

    messageSection.appendChild(messageLabel);
    messageSection.appendChild(messageInput);

    let inputButton = document.createElement('input');
    inputButton.className = 'submitBtn';
    inputButton.type = 'submit';
    inputButton.value = 'Submit';

    form.appendChild(nameSection);
    form.appendChild(emailSection);
    form.appendChild(subjectSection);
    form.appendChild(messageSection);
    form.appendChild(inputButton);

    contactHero.appendChild(form);

    contactContent.appendChild(contactHero)    
    return contactContent
}

export { contact };