// spec.js
describe('Contacto test', function() {
  it('Debe ser la web de Contacto', function() {
    browser.get('http://localhost:8080/contacto.html');

    expect(browser.getTitle()).toEqual('Contacto');
  });
  
  it('Debe comprobar el formulario', function() {
    browser.get('http://localhost:8080/contacto.html');
	
	var nombre = element(by.name('nombre'));
	var email = element(by.name('email'));
	var comentario = element(by.name('message'));
	var enviar = element(by.name('submit'));
	
	
	//nombre.sendKeys('Pablo Tena');
	email.sendKeys('pablotenasingmail.com');
	comentario.sendKeys('La web es maravillosa');
	enviar.click();

    expect(browser.getCurrentUrl()).not.toEqual('http://localhost:8080/sendemail.php');
  });
  
  /*it('Debe comprobar que hay email', function() {
    browser.get('http://localhost:8080/contacto.html');
	
	var nombre = element(by.name('nombre'));
	var email = element(by.name('email'));
	var comentario = element(by.name('message'));
	var enviar = element(by.name('submit'));
	
	
	nombre.sendKeys('Pablo Tena');
	//email.sendKeys('pablotena@gmail.com');
	comentario.sendKeys('La web es maravillosa');
	enviar.click();

    expect(browser.getCurrentUrl()).not.toEqual('http://localhost:8080/sendemail.php');
  });
  
  it('Debe comprobar que el email existe', function() {
    browser.get('http://localhost:8080/contacto.html');
	
	var nombre = element(by.name('nombre'));
	var email = element(by.name('email'));
	var comentario = element(by.name('message'));
	var enviar = element(by.name('submit'));
	
	
	nombre.sendKeys('Pablo Tena');
	email.sendKeys('pablotenasingmail.com');
	comentario.sendKeys('La web es maravillosa');
	enviar.click();

    expect(browser.getCurrentUrl()).not.toEqual('http://localhost:8080/sendemail.php');
  });
  
  it('Debe comprobar el comentario', function() {
    browser.get('http://localhost:8080/contacto.html');
	
	var nombre = element(by.name('nombre'));
	var email = element(by.name('email'));
	var comentario = element(by.name('message'));
	var enviar = element(by.name('submit'));
	
	
	nombre.sendKeys('Pablo Tena');
	email.sendKeys('pablotena@gmail.com');
	//comentario.sendKeys('La web es maravillosa');
	enviar.click();

    expect(browser.getCurrentUrl()).not.toEqual('http://localhost:8080/sendemail.php');
  });*/
});


/*describe('Test formulario', function() {
	
	beforeEach(function() {
		var nombre = element(by.name('nombre'));
		var email = element(by.name('email'));
		var telefono = element(by.tagName('number'));
		var comentario = element(by.name('message'));
		var enviar = element(by.name('enviar'));
		
		//Rellenar
		nombre.sendKeys('Pablo Tena');
		email.sendKeys('pablotena@gmail.com');
		telefono.sendKeys(666222111);
		comentario.sendKeys('La web es maravillosa');
		
		enviar.click();
	});
	
	it('should send an email', function(){
		browser.get('file:///C:/Users/kevin/Documents/UNIVERSIDAD/4%C2%BA%20GII/IISS/magoencadiz/magoencadiz/app/contacto.html')
		heading = element(by.tagName('h1'));
	    expect(heading.getText()).toEqual('Contacta con nosotros');
	});
});*/