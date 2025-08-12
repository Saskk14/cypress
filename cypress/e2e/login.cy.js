describe('Проверка авторизации', function () {

   it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт 
        cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин  
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажал войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крести и он виден для пользователя

    })

    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт 
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    
    })

    it('Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт 
        cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин  
        cy.get('#pass').type('123456789'); // ввели верный пароль
        cy.get('#loginButton').click(); // нажал войти
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })

     it('Неверный пароль и веверный логин', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#mail').type('germannnn@dolnikov.ru');  
        cy.get('#pass').type('iLoveqastudio1'); 
        cy.get('#loginButton').click(); 
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })
    
    
     it('Негативный тест валидации', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#mail').type('germannnndolnikov.ru');  
        cy.get('#pass').type('iLoveqastudio1'); 
        cy.get('#loginButton').click(); 
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })

    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#mail').type('GerMan@Dolnikov.ru');  
        cy.get('#pass').type('iLoveqastudio1'); 
        cy.get('#loginButton').click(); 
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })

})
